import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { useQuery } from "@tanstack/react-query";
import { getStreamToken } from "../lib/api";

import {
  Channel,
  ChannelHeader,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import { StreamChat } from "stream-chat";
import toast from "react-hot-toast";

import ChatLoader from "../components/ChatLoader";
import CallButton from "../components/CallButton";

const STREAM_API_KEY = import.meta.env.VITE_STREAM_API_KEY;

const ChatPage = () => {
  const { id: targetUserId } = useParams();

  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [loading, setLoading] = useState(true);

  const { authUser } = useAuthUser();

  const { data: tokenData, isLoading: isTokenLoading, error: tokenError } = useQuery({
    queryKey: ["streamToken", authUser?._id],
    queryFn: getStreamToken,
    enabled: !!authUser?._id,
    retry: 2,
    retryDelay: 1000,
    staleTime: 5 * 60 * 1000,
    onError: (error) => {
      console.error("Stream token error:", error);
      toast.error(error?.response?.data?.message || "Failed to connect to chat");
      setLoading(false); // Ensure we stop loading on error
    }
  });

  useEffect(() => {
    let client;
    let mounted = true;

    const initChat = async () => {
      // Guard against missing data
      if (!tokenData?.token || !authUser?._id || !targetUserId) {
        if (mounted) setLoading(false);
        return;
      }

      try {
        if (!mounted) return;
        setLoading(true);
        console.log("Initializing stream chat client...");

        // Disconnect existing client if any
        if (chatClient) {
          await chatClient.disconnectUser();
        }

        // Get or create Stream client instance
        client = StreamChat.getInstance(STREAM_API_KEY);
        
        // Connect user to Stream
        await client.connectUser(
          {
            id: authUser._id.toString(),
            name: authUser.fullName,
            image: authUser.profilePic,
          },
          tokenData.token
        );

        // Create and initialize channel
        const channelId = [authUser._id, targetUserId].sort().join("-");
        const channel = client.channel("messaging", channelId, {
          members: [authUser._id.toString(), targetUserId.toString()],
        });

        await channel.watch();

        // Only update state if still mounted
        if (mounted) {
          setChatClient(client);
          setChannel(channel);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error initializing chat:", error);
        // Only show error if still mounted
        if (mounted) {
          toast.error(error?.message || "Could not connect to chat. Please try again.");
          setLoading(false);
        }
      }
    };

    initChat();

    // Cleanup function
    return () => {
      mounted = false;
      if (client) {
        client.disconnectUser().catch(() => {
          // Ignore disconnect errors during cleanup
          console.log("Disconnected chat client during cleanup");
        });
        setChatClient(null);
        setChannel(null);
      }
    };
  }, [tokenData?.token, authUser, targetUserId, chatClient]);

  const handleVideoCall = () => {
    if (channel) {
      const callUrl = `${window.location.origin}/call/${channel.id}`;

      channel.sendMessage({
        text: `I've started a video call. Join me here: ${callUrl}`,
      });

      toast.success("Video call link sent successfully!");
    }
  };

  if (loading || isTokenLoading || !chatClient || !channel) {
    return <ChatLoader />;
  }

  if (tokenError) {
    return (
      <div className="h-[93vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Failed to load chat</h2>
          <p className="text-sm opacity-70">Please try refreshing the page</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[93vh]">
      <Chat client={chatClient} theme="str-chat__theme-light">
        <Channel channel={channel}>
          <div className="w-full relative">
            <CallButton handleVideoCall={handleVideoCall} />
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput focus />
            </Window>
          </div>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
};
export default ChatPage;
