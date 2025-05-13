import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../lib/api";
import { useNavigate } from "react-router";

const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending, error } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      if (!data.user.isOnboarded) {
        navigate("/onboarding");
      } else {
        navigate("/");
      }
    },
  });

  return { error, isPending, loginMutation: mutate };
};

export default useLogin;
