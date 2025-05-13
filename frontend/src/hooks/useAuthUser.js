import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";

const useAuthUser = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    retry: false,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    initialData: { user: null },
  });

  return { 
    isLoading,
    error,
    isError,
    authUser: data?.user || null,
    isAuthenticated: Boolean(data?.user)
  };
};
export default useAuthUser;
