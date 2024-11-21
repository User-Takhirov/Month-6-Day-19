import { useMutation, useQueryClient } from "react-query";

import { request } from "../../config/request";

export const useCreateUser = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      request.post("/addUsers", data).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["info"]);
    },
  });
};
