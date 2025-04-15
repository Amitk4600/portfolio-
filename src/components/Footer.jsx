import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
return (
  <footer className="d-flex align-items-center justify-content-around" id="contact">
    <div className="row w-100">
          <h1 className="text-center mb-5">Contacts Us</h1>
      <div className="col-md-6 mb-4 d-flex justify-content-center">
        <form action="" className="d-flex flex-column gap-3">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone" />
          <button className=" submit-btn">Submit</button>
        </form>
      </div>
      <div className="col-md-6 mb-4 d-flex justify-content-center align-items-center">
        <div className="social-icons">
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
}
export default Footer;
