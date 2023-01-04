import React from "react";
import classes from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div className={classes.aboutMe}>
      <div>
        {" "}
        <h2>About me</h2>
        <p>
          <strong> Lorem Ipsum </strong> is simply dummy text of the printing
          and typesetting industry.
          <em>
            <b>Lorem Ipsum</b>
          </em>{" "}
          has been the industry's standard dummy text ever since the 1500s, when
          an unknown printer took a galley of type and scrambled it to make a
          type specimen book. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Corporis, itaque, illo adipisci eius veniam quasi
          cumque vel natus atque explicabo delectus? Adipisci accusantium nemo
          neque ipsa asperiores provident natus iusto.
        </p>
      </div>
      <div className={classes.imageAboutme}>
        <div className={classes.imageWrapper}>
          <image
            className={classes.imgMe}
            src="../../assets/photos/DSCF2387.png"
            alt="My picture"
            width={500}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
