import "./about.css"
import Award from "../../img/award.png";
import aboutMe from "../../img/aboutMe.jpg";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={aboutMe} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
            <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I am a Srinivasan Student of Government College of Engineering, Salem
        </p>
        <p className="a-desc">
        Currently, I am in the Third Year of Computer Science and 
        Engineering also I Completed Diploma in Computer Science 
        And Engineering at Thiagarajar Polytechnic College, Salem with a Superlative degree.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Achievements and Awards</h4>
            <p className="a-award-desc">
            I Completed my Diploma with First class Superlative Degree 
            also Receive an award for being on a department-wise Topper List.
            </p>
          </div>
        </div>
            </div>
        </div>
    )
}

export default About
