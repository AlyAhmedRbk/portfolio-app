import "./hero.css";
import profile_img from "../../assets/ali.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className="hero" id="home">
        <img src={profile_img}  />
        <h1><span>I'm Aly Ahmed,</span> Software Engineer</h1>
        <p>
            I am Full Stack Developer from Islamabad, Pakistan with more than 1 year of experience as a Software Engineer.
        </p>

        <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={()=>setMenu("contact")}>
               Connect With Me
              </AnchorLink>
            </div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero