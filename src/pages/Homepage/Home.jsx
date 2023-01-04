import React from "react";
import Heading from "./Heading";
import AboutMe from "./AboutMe";
import "./Home.module.scss";

const Home = () => {
  return (
    <main className="home">
      <Heading />
      <AboutMe />
    </main>
  );
};

export default Home;
