import "./work.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";


const Work = () => {
  return (
    <div className="mywork" id="work">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern } alt="" />
      </div>

      <div className="mywork-container">
        {
          mywork_data.map((iteam, index)=> {
            return (
              <img src={iteam.w_img} key={index}/>
            )})
        }
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default Work