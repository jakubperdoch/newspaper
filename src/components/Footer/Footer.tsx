import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./_footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer  container-fluid px-md-5 py-3">
        <span className="thanksSection">
          Thanks for <span className="thanksTitle-highlighted">coming!</span>
        </span>
        <span className="contactSection">perdochjakub@gmail.com</span>
        <div className="networkSection">
          <div className="networkLink">
            <FontAwesomeIcon icon={faGithubAlt} className="networkIcon" />
          </div>
          <div className="networkLink">
            <FontAwesomeIcon icon={faEnvelope} className="networkIcon" />
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
