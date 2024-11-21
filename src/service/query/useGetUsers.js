import React from "react";
import { useQuery } from "react-query";
import { request } from "../../config/request";

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["Users"],
    queryFn: () => request.get("/addUsers").then((res) => res.data),
  });
};
