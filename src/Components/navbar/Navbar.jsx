import "./navbar.css";
import logo from "../../assets/logo.svg"
import { useRef, useState } from "react";
import underline from "../../assets/nav_underline.svg"
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} className="nav-mob-opne"/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} className="nav-mob-close" />
        <li><AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={() => setMenu("home")}>Home</p>{menu === "home" ? <img src={underline} /> : <></>}</AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu("about")}>About Me</p>{menu === "about" ? <img src={underline} /> : <></>}</AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={() => setMenu("services")}>Services</p>{menu === "services" ? <img src={underline} /> : <></>}</AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={() => setMenu("work")}>Portfolio</p>{menu === "work" ? <img src={underline} /> : <></>}</AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p>{menu === "contact" ? <img src={underline} /> : <></>}</AnchorLink></li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={()=>setMenu("contact")}>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar