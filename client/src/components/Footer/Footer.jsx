import React from "react"
import { Link as ScrollLink } from "react-scroll"
import TikTokIcon from "../../ulits/svg/TikTokIcon"
import FacebookIcon from "../../ulits/svg/FacebookIcon"
import InstagramIcon from "../../ulits/svg/InstagramIcon"
import TelegramIcon from "../../ulits/svg/TelegramIcon"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main-container">
        <div className="footer__logo-container">
          <ScrollLink
            to="header"
            className="footer__nav-item"
            spy={true}
            smooth={true}
          >
            <img
              className="footer__logo-img"
              src="./img/footerHeader/logo.jpg"
              alt="footer-logo"
            />
          </ScrollLink>
          <p className="footer__logo-text" href="#">
            Публічна оферта та політика конфіденційності
          </p>
        </div>

        <div className="footer__socials-container">
          <a
            className="footer__socials-item"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/na_varty_zhyttya?igsh=MWc1MzdxbG8wczAxbg=="
          >
            <InstagramIcon className="footer__social-icon" />
          </a>
          <a
            className="footer__socials-item"
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=61554088658276"
          >
            <FacebookIcon className="footer__social-icon" />
          </a>
          <a
            className="footer__socials-item"
            target="_blank"
            rel="noreferrer"
            href="https://www.tiktok.com/@na_varty_zhyttya?_t=8kfjRnBP2GM&_r=1"
          >
            <TikTokIcon className="footer__social-icon" />
          </a>
          <a
            className="footer__socials-item"
            target="_blank"
            rel="noreferrer"
            href="https://t.me/na_varty_zhyttya"
          >
            <TelegramIcon className="footer__social-icon" />
          </a>
        </div>
        <div className="footer__info-container">
          <p className="footer__info-title">Контакти:</p>
          <p className="footer__info-text">пн-пт 10:00-19:00</p>
          <a className="footer__info-text" href="tel:+380673890823">
            +380673890823
          </a>
          <p className="footer__info-text">
            Україна, 08200, Київська обл., місто Ірпінь, вул. Глазового Павла 84
          </p>
          <a
            className="footer__info-text"
            href="mailto:bfnavartyzyttya@gmail.com"
          >
            bfnavartyzyttya@gmail.com
          </a>
        </div>

        <div className="footer__menu-container">
          <ScrollLink
            to="donation-details"
            spy={true}
            smooth={true}
            className="footer__nav-item"
          >
            РЕКВІЗИТИ
          </ScrollLink>
          <ScrollLink
            to="current-report"
            spy={true}
            smooth={true}
            className="footer__nav-item"
          >
            ЗВІТИ
          </ScrollLink>
          <ScrollLink
            to="footer"
            spy={true}
            smooth={true}
            className="footer__nav-item"
          >
            КОНТАКТИ
          </ScrollLink>
          <ScrollLink
            to="question"
            spy={true}
            smooth={true}
            className="footer__nav-item"
          >
            ВІДПОВІДІ
          </ScrollLink>
        </div>
        <div className="footer__qr-container">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://send.monobank.ua/jar/3iDPWEskZm"
          >
            <img
              className="footer__qr-code"
              src="./img/footerHeader/qr-code.png"
              alt="qr-code"
            />
          </a>
        </div>
      </div>
      <p className="footer__rights">
        © 2023-2024 «На Варті Життя». Всі права захищені.
      </p>
      <p className="footer__policy">
        Публічна оферта та політика конфіденційності
      </p>
    </footer>
  )
}

export default Footer
