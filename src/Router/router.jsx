import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../Layout";
import { Login } from "../Login";
import { Register } from "../Register";
import { Home } from "../Pages/Home";
import { AddUsers } from "../Pages/Add-Users";
import { EditUser } from "../components/EditUsers";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/app" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="Users" element={<AddUsers />} />
        <Route path="edit-users/:id" element={<EditUser />} />
      </Route>
    </Routes>
  );
};
