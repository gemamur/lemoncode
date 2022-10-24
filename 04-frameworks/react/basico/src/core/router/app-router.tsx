import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {LoginScene, ListScene, DetailScene} from "@/scenes";
import { switchRoutes } from "./routes";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginScene />} />
        <Route path={switchRoutes.list} element={<ListScene />} />
        <Route path={switchRoutes.detail} element={<DetailScene />} />
        <Route path="*" element={<Navigate to="/" />} />      
      </Routes>
    </Router>
  );
};