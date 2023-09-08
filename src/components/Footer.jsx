import { BsTwitter, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <div>
        <a
          href="https://twitter.com/Prof_Ochosteve"
          target={"_blank"}
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
        <a href="mailto:stephenujah@yahoo.com">
          <FiMail />
        </a>
        <a
          href="https://www.linkedin.com/in/ujah-stephen"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/ochosteve08"
          target={"_blank"}
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <p >Copyright &copy; {today.getFullYear()} </p>
    </footer>
  );
};
export default Footer;
