import React from "react";
import { NavLink } from "react-router-dom";
import my_img from "../resources/mypic.jpg";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";


import "./Home.css";


const Home = () => {
  return (
    <>
      <div className="mainHome">
        <div className="container">
          <div className="row">
            <div className="home-info padd-15 col-7">
              <h3 className="hello">
                Hello,my name is <span className="name">Charudatta Warke</span>
              </h3>
              <h3 className="my-profession">
                I' m a{" "}
                <span className="typing">Full Stack Web Developer (MERN)</span>
              </h3>
              <p>
                I'm a Full Stack Developer with extensive experience for last
                few months. My expertise is to create webapplications, website
                design, and many more...
              </p>
              {/* <button onClick={Contact} className="btn hire-me">Hire Me</button> */}
              <a href="Contact" className="">
                <NavLink to="Contact" className="btn1 hire-me">
                  Hire Me
                </NavLink>
              </a>
            </div>
            <div className="home-img padd-15 col-5 ">
              <img src={my_img} alt="myimage" />
            </div>
          </div>
        </div>
      </div>

      <div className="mainAbout">
        <About />
      </div>

      <div className="mainService padd-15 ">
        <Skills />
      </div>

      <div className="mainProjects">
        <Projects />
      </div>

      <div className="mainContact">
        <Contact />
      </div>
    </>
  );
};

export default Home;
