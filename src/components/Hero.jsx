import {
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import expressIcon from "../assets/icons/ex.svg";
import mongoIcon from "../assets/icons/mongo.svg";
const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="row hero-row">
        <div className="col-md-6">
          <h1 className="">Hi, my name is Amit Kumar</h1>
          <p>I'm a MERN Stack Developer</p>
          <div className="skill-icon">
            <ul
              className="d-flex justify-content-between"
              style={{ listStyle: "none", gap: "20px" }}
            >
              <li title="MongoDB">
                <img src={mongoIcon} alt="MongoDB" width="30" height="30" />
              </li>
              <li title="Express">
                <img src={expressIcon} alt="Express" width="30" height="30" />
              </li>
              <li title="React">
                <FontAwesomeIcon
                  icon={faReact}
                  size="2x"
                  style={{ color: "#61DBFB" }}
                />
              </li>
              <li title="Node.js">
                <FontAwesomeIcon
                  icon={faNodeJs}
                  size="2x"
                  style={{ color: "#68A063" }}
                />
              </li>
            </ul>
            <div className="text-center mt-4">
              <button className="btn btn-hire">Hire Me</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 hero-image d-flex justify-content-center align-items-center">
          <img src="hero.png" alt="Amit Kumar" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
