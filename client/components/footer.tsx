import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <div className="icons">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="icon" />
          <span className="sr-only">Facebook</span>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="icon" />
          <span className="sr-only">Instagram</span>
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="icon" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="icon" />
          <span className="sr-only">GitHub</span>
        </a>
      </div>
    </footer>
  )
}
