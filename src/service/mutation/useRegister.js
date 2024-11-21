import { useMutation } from "react-query";
import { request } from "../../config/request";

export const useRegister = () => {
  return useMutation({
    mutationFn: (values) =>
      request.post("/register", values).then((res) => res.data),
  });
};
