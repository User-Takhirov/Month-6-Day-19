import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEditUser } from "../../service/mutation/useEditUser";
import { FormData } from "../../components/Form";
import { useGetSigleData } from "../../service/mutation/useGetSigleData";

export const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { mutate } = useEditUser();
  const { data: Datas, isLoading } = useGetSigleData(id);

  const submit = (NewData) => {
    mutate(
      { id, NewData },
      {
        onSuccess: () => {
          navigate("/app");
        },
      }
    );
  };
  return (
    <>
      <div>
        <FormData data={Datas} isLoading={isLoading} submit={submit} />
      </div>
    </>
  );
};
