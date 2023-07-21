import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-ctn">
      <a
        href="https://github.com/Joaquin-Bianchi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={"40px"}></FaGithub>
      </a>
      <a
        href="https://www.linkedin.com/in/joaquin-bianchi-89725721a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={"40px"}></FaLinkedin>
      </a>
    </footer>
  );
}
