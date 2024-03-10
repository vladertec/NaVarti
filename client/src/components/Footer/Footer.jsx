import React from "react"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import TelegramIcon from "@mui/icons-material/Telegram"
import { Link as ScrollLink } from "react-scroll"
import { Link as RouterLink } from "react-router-dom"
import TikTokIcon from "../../ulits/svg/TikTokIcon"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main-container">
        <div className="footer__logo-container">
          <img
            className="footer__logo-img"
            src="/img/logo.jpg"
            alt="footer-logo"
          />
          <a className="footer__logo-text" href="#">
            Публічна оферта та політика конфіденційності
          </a>
        </div>

        <div className="footer__socials-container">
          <a
            className="footer__socials-item"
            href="https://www.instagram.com/na_varty_zyttya?igsh=MWF5OWNyNzI2ZTk0eg=="
          >
            <InstagramIcon className="footer__social-icon" />
          </a>
          <a
            className="footer__socials-item"
            href="https://www.facebook.com/profile.php?id=61554088658276"
          >
            <FacebookIcon className="footer__social-icon" />
          </a>
          <a
            className="footer__socials-item  footer__tiktok-icon"
            href="https://www.facebook.com/profile.php?id=61554088658276"
          >
            <TikTokIcon />
          </a>
          <a
            className="footer__socials-item"
            href="https://www.facebook.com/profile.php?id=61554088658276"
          >
            <TelegramIcon className="footer__social-icon" />
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
          <ScrollLink
            to="donation-details"
            spy={true}
            smooth={true}
            className="footer__nav-item"
          >
            реквізити
          </ScrollLink>
          <ScrollLink
            to="current-report"
            spy={true}
            smooth={true}
            className="footer__nav-item"
          >
            звіти
          </ScrollLink>
          <ScrollLink
            to="footer"
            spy={true}
            smooth={true}
            className="footer__nav-item"
          >
            контакти
          </ScrollLink>
          <ScrollLink
            to="question"
            spy={true}
            smooth={true}
            className="footer__nav-item"
          >
            відповіді
          </ScrollLink>
        </div>
        <div className="footer__qr-container">
          <img
            className="footer__qr-code"
            src="./img/qr-code.png"
            alt="qr-code"
          />
        </div>
      </div>
      <RouterLink to="/login">
        <p className="footer__rights">
          © 2023-2024 «На Варті Життя». Всі права захищені.
        </p>
      </RouterLink>
      <RouterLink to="/login">
        <p className="footer__policy">
          Публічна оферта та політика конфіденційності
        </p>
      </RouterLink>
    </footer>
  )
}

export default Footer
