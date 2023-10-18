import React from "react";
import Heading from "./Heading";
import classes from "../../styles/Home.module.scss";

const Home = () => {
  return (
    <main className={classes.home_container}>
      <Heading />
    </main>
  );
};

export default Home;
