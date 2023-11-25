import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const menuItems = ["Terms Of Use", "Privacy-Policy", "About", "Blog", "FAQ"];

const infoText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed " +
  "do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
  "laboris nisi ut aliquip ex ea commodo consequat. Duis aute " +
  "irure dolor in reprehenderit in voluptate velit esse cillum " +
  "dolore eu fugiat nulla pariatur.";

const socialIcons = [
  { icon: <FaFacebookF />, id: 1 },
  { icon: <FaInstagram />, id: 2 },
  { icon: <FaTwitter />, id: 3 },
  { icon: <FaLinkedin />, id: 4 },
];

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          {menuItems.map((item, index) => (
            <li key={index} className="menuItem">
              {item}
            </li>
          ))}
        </ul>
        <div className="infoText">{infoText}</div>
        <div className="socialIcons">
          {socialIcons.map((socialIcon) => (
            <span key={socialIcon.id} className="icon">
              {socialIcon.icon}
            </span>
          ))}
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;