import style from "./style/index.module.scss";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Project } from "./pages/Project";
import { Careers } from "./pages/Careers";
import { Healt } from "./pages/Healt";
import { Contact } from "./pages/Contact";
import { Certificates } from "./pages/Certificates";
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="projects" element={<Project />} />
        <Route path="careers" element={<Careers />} />
        <Route path="healt-safety" element={<Healt />} />
        <Route path="contact" element={<Contact />} />
        <Route path="certificates" element={<Certificates />} />
      </Route>
    </Routes>
  );
};
