import "./about.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/ali.png";

const About = () => {
  return (
    <div className="about" id="about">
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a passionate MERN Stack Developer with hands-on experience building full-stack web applications using MongoDB, Express.js, React, and Node.js. </p>
                    <p>Currently, I'm working as a software engineering intern, where I focus on developing dynamic and responsive web solutions that solve real-world problems.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width : "60%" }}/></div>
                    <div className="about-skill"><p>React JS</p> <hr style={{ width : "70%" }}/></div>
                    <div className="about-skill"><p>JavaScript</p> <hr style={{ width : "85%" }}/></div>
                    <div className="about-skill"><p>Git & Github</p> <hr style={{ width : "50%" }}/></div>
                    <div className="about-skill"><p>Node & Express JS</p> <hr style={{ width : "55%" }}/></div>
                    <div className="about-skill"><p>SQL & Mongo DB</p> <hr style={{ width : "50%" }}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJETCS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default About