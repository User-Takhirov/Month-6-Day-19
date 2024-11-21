import { useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { request } from "../../config/request";
export const useEditUser = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) =>
      request.put(`/addUsers/${id}`, data).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["Users"]);
    },
  });
};
