import React from "react";
import { Route, Routes } from "react-router-dom";
import { Aboutpg } from "./pages/Aboultpg";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Postspg } from "./pages/post";
import { Postpg } from "./pages/post/post";
import { Projectspg } from "./pages/projects";
import { Projectpg } from "./pages/projects/projects";

export function Router() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Aboutpg />} />
      <Route path="/posts" element={<Postspg />} />
      <Route path="/post/:slug" element={<Postpg />} />
      <Route path="/projetos" element={<Projectspg />} />
      <Route path="/projeto/:slug" element={<Projectpg />} />
    </Routes>
  );
}
