import { useMutation } from "react-query";
import { request } from "../../config/request";
export const useLogin = () => {
  return useMutation({
    mutationFn: (data) => request.post("/login", data).then((res) => res.data),
  });
};
