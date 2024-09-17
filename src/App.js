import React from "react";
import "./styles/App.scss";
import Layout from "./pages/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Home from "./pages/Homepage/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProjectManagementProjects from "./pages/ProjectManagementProjects";
import FullStackProjects from "./pages/FullStackProjects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedCursor
          innerSize={13}
          outerSize={5}
          color="86, 240, 212"
          outerAlpha={0.8}
          innerScale={1.0}
          outerScale={0}
        />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/projects/project-management"
              element={<ProjectManagementProjects />}
            />
            <Route
              path="/projects/full-stack"
              element={<FullStackProjects />}
            />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
