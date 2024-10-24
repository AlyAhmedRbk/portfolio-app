import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { toast } from "react-toastify";


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6d127002-7f59-47a5-8539-48bc5fd2ecdf");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          toast.success("Success! Your Message has Been Sent");
        }
      };

  return (
    <div className="contact" id="contact">
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme_pattern } alt="" />
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>Have an idea or project in mind? Let’s connect and explore how I can help bring your vision to life! Whether you're looking to collaborate on a web development project, need a skilled developer for your team  feel free to reach out.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>alyahmedrbk@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>+923469069796</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Islamabad Pakistan</p>
                    </div>
                </div>
            </div>
            <form className="contact-right" onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter Your Name" name="name"/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter Your Email" name="email"/>
                <label htmlFor="">Write Your Message Here!</label>
                <textarea rows={8} name="message" placeholder="Enter Your Message" />
                <button className="contact-submit" type="submit">Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact