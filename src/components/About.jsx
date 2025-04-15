import {
  faBootstrap,
  faJs,
  faNodeJs,
  faReact,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import expressIcon from "../assets/icons/ex.svg";
import mongoIcon from "../assets/icons/mongo.svg";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="row">
        <div className="col-md-6">
          <h1>ABOUT ME</h1>
          <p>
            I have practical experience developing online applications with
            React, Redux, and Node.js as a MERN stack developer. Creating
            intuitive and user-friendly web experiences is something I'm really
            passionate about.
          </p>
        </div>
        <div className="col-md-6">
          <div className="skills">
            <h1 className="text-center mb-4">MY SKILLS</h1>
            <div className="row text-center g-3 ">
              <div className="col-4 col-md-3 " title="MongoDB">
                <img src={mongoIcon} alt="MongoDB" width="30" height="30" />
              </div>
              <div className="col-4 col-md-3" title="Express">
                <img src={expressIcon} alt="Express" width="30" height="30" />
              </div>
              <div className="col-4 col-md-3" title="React">
                <FontAwesomeIcon
                  icon={faReact}
                  size="2x"
                  style={{ color: "#61DBFB" }}
                />
              </div>
              <div className="col-4 col-md-3" title="WordPress">
                <FontAwesomeIcon
                  icon={faWordpress}
                  size="2x"
                  style={{ color: "#21759b" }}
                />
              </div>
              <div className="col-4 col-md-3" title="Bootstrap">
                <FontAwesomeIcon
                  icon={faBootstrap}
                  size="2x"
                  style={{ color: "#563d7c" }}
                />
              </div>
              <div className="col-4 col-md-3" title="Js">
                <FontAwesomeIcon
                  icon={faJs}
                  size="2x"
                  style={{ color: "#f7df1e" }}
                />
              </div>
              <div className="col-4 col-md-3" title="Node.js">
                <FontAwesomeIcon
                  icon={faNodeJs}
                  size="2x"
                  style={{ color: "#68A063" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
