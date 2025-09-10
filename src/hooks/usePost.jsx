import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://json-placeholder.mock.beeceptor.com/posts"
      );
      return data;
    },
   
  });
};

export const useAddPost = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (newPost) => {
      const { data } = await axios.post(
        "https://json-placeholder.mock.beeceptor.com/posts",
        newPost
      );
      return data;
    },
    onSuccess: () => {
     
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};