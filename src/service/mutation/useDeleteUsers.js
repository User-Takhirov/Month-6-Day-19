import { useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { request } from "../../config/request";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => request.delete(`/addUsers/${id}`).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(["Users"]);
    },
  });
};
