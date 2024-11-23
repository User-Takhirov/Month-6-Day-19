import React from "react";
import { useQuery } from "react-query";
import { request } from "../../config/request";

export const useGetSigleData = (id) => {
  return useQuery({
    queryKey: ["single-users", id],
    queryFn: () => request.get(`/addUsers/${id}`).then((res) => res.data),
  });
};
