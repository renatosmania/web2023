import React from "react";
import { Route, Routes } from "react-router-dom";
import { Aboutpg } from "./pages/Aboultpg";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Aboutpg />} />
    </Routes>
  );
}
