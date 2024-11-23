import { message } from "antd";
import React from "react";
import { useCreateUser } from "../../service/mutation/useCreateUsers";
import { useQueryClient } from "react-query";
import { FormData } from "../../components/Form";
import { useNavigate } from "react-router-dom";
export const AddUsers = () => {
  const queryClient = useQueryClient();
  const { mutate } = useCreateUser();
  const navigate = useNavigate();
  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/app");
        queryClient.invalidateQueries(["Users"]);
      },
    });
  };

  return <FormData submit={submit} />;
};
