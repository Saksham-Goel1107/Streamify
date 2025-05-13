import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STEAM_API_KEY;
const apiSecret = process.env.STEAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Stream API key or Secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.error("Error upserting Stream user:", error);
  }
};

export const generateStreamToken = (userId) => {
  try {
    if (!userId) {
      throw new Error('UserId is required to generate Stream token');
    }
    const userIdStr = userId.toString();
    const token = streamClient.createToken(userIdStr);
    if (!token) {
      throw new Error('Failed to generate Stream token');
    }
    return token;
  } catch (error) {
    console.error("Error generating Stream token:", error);
    throw error;
  }
};
