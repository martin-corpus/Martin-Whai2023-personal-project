import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <div className="icons">
        <a
          href="https://www.facebook.com/example"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon" />
        </a>
        <a
          href="https://www.instagram.com/example"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/example"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://www.github.com/example"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
      </div>
    </footer>
  )
}
