import React from "react"
import { Link } from "react-router-dom"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import TelegramIcon from "@mui/icons-material/Telegram"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__menu-container">
        <div className="footer__logo-container">
          <img
            className="footer__logo-img"
            src="/img/logoBackground.png"
            alt="footer-logo"
          />
          <p className="footer__logo-text">
            © 2023-2024 «На Варті Життя». Всі права захищені.
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
          <p className="footer__info-text">dfgdgfdg</p>
          <p className="footer__info-text">sarnavsk2001@gmail.com</p>
        </div>
        <div className="footer__menu-container">
          <Link className="footer__menu-item">реквізити</Link>
          <Link className="footer__menu-item">звіти</Link>
          <Link className="footer__menu-item">контакти</Link>
          <Link className="footer__menu-item">відповіді</Link>
        </div>
        <div className="footer__qr-container">
          <img
            className="footer__qr-code"
            src="/img/qr-code.jpg"
            alt="qr-code"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
