import { useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { request } from "../../config/request";
export const useEditUser = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: ({ id, NewData }) =>
      request.put(`/addUsers/${id}`, NewData).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["Users"]);
    },
  });
};
