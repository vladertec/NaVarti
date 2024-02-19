import React from "react"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import TelegramIcon from "@mui/icons-material/Telegram"
import { Link } from "react-scroll"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-container">
        <img
          className="footer__logo-img"
          src="/img/logoBackground.png"
          alt="footer-logo"
        />
        <p className="footer__logo-text">
          © 2023-2024 БФ «На Варті Життя». Всі права захищені.
        </p>
      </div>

      <div className="footer__socials-container">
        <a
          className="footer__socials-link"
          href="https://www.instagram.com/na_varty_zyttya?igsh=MWF5OWNyNzI2ZTk0eg=="
        >
          <InstagramIcon />
        </a>
        <a
          className="footer__socials-link"
          href="https://www.facebook.com/profile.php?id=61554088658276"
        >
          <FacebookIcon />
        </a>
        <a
          className="footer__socials-link"
          href="https://www.facebook.com/profile.php?id=61554088658276"
        >
          <TelegramIcon />
        </a>
        <a
          className="footer__socials-link"
          href="https://www.facebook.com/profile.php?id=61554088658276"
        >
          <TelegramIcon />
        </a>
      </div>
      <div className="footer__info-container">
        <p className="footer__info-title">Контакти:</p>
        <p className="footer__info-text">пн-пт 10:00-19:00</p>
        <p className="footer__info-text">+380900000000</p>
        <p className="footer__info-text">
          dfgdgfdg sjhbfsdjb sdhf sdhfv sdhgfvs sdhgfv sdhgfv hsdvf
        </p>
        <p className="footer__info-text">sarnavsk2001@gmail.com</p>
      </div>
      <div className="footer__menu-container">
        <Link
          to="donation-details"
          spy={true}
          smooth={true}
          className="header__nav-item"
        >
          реквізити
        </Link>
        <Link
          to="current-report"
          spy={true}
          smooth={true}
          className="header__nav-item"
        >
          звіти
        </Link>
        <Link
          to="our-team"
          spy={true}
          smooth={true}
          className="header__nav-item"
        >
          контакти
        </Link>
        <Link
          to="question"
          spy={true}
          smooth={true}
          className="header__nav-item"
        >
          відповіді
        </Link>
      </div>
      <div className="footer__qr-container">
        <img className="footer__qr-code" src="/img/qr-code.png" alt="qr-code" />
      </div>
    </footer>
  )
}

export default Footer
