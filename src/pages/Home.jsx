import React from "react";
import "./Home.module.scss";

const Home = () => {
  return (
    <main className="home">
      <section classNAme="heading">
        <h1 classNAme="welcomeText">Hi! I'm Eyvaz Alishov.</h1>
        <h2 classNAme="welcomeMessage">
          I'm a student at Full Stack Web Developer program.
        </h2>

        <p>
          I'm a student at Helsinki Business College at Full Stack Web Developer
          program. I'm trying to create my own portfolio page. Please contribute
          your ideas and experiences to help me on this way. Thanks in advance.
        </p>
        <div>
          <a className="button" href="#" role="button"></a>
          <button type="button" class="contactMeButton hovarable">
            Contact me here
          </button>
        </div>
      </section>
      <section className="aboutMe">
        <h3>About me</h3>
        <div classNAme="aboutInner}">
          <div>
            <p>
              <strong> Lorem Ipsum </strong> is simply dummy text of the
              printing and typesetting industry.
              <em>
                <b>Lorem Ipsum</b>
              </em>{" "}
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Corporis, itaque, illo adipisci eius veniam
              quasi cumque vel natus atque explicabo delectus? Adipisci
              accusantium nemo neque ipsa asperiores provident natus iusto.
            </p>
          </div>
          <div class="imageAboutme">
            <img
              className="imgMe"
              src="https://lh5.googleusercontent.com/7ayz6f3xhsx8UTFUn4uWVq6CPmjA-7UKn3dgd9KcUA_bkxkq8JTGCNopPbK9sBpoaWo"
              alt="My picture"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
