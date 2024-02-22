import React from "react"
import { Link } from "react-scroll"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import TelegramIcon from "@mui/icons-material/Telegram"

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-wrapper logo-container">
        <img
          className="logo-container__logo-img"
          src="/img/logoWeb.jpg"
          alt=""
        />
      </div>

      <div className="header__info-wrapper info-container">
        <div className="info-container__center">
          <nav className="info-container__nav">
            <Link
              to="donation-details"
              spy={true}
              smooth={true}
              className="info-container__nav-item"
            >
              РЕКВІЗИТИ
            </Link>
            <Link
              to="current-report"
              spy={true}
              smooth={true}
              className="info-container__nav-item"
            >
              ЗВІТИ
            </Link>
            <Link
              to="our-team"
              spy={true}
              smooth={true}
              className="info-container__nav-item"
            >
              КОНТАКТИ
            </Link>
            <Link
              to="question"
              spy={true}
              smooth={true}
              className="info-container__nav-item"
            >
              ВІДПОВІДІ
            </Link>
          </nav>

          <div className="info-container__socials">
            <a
              className="info-container__socials-item"
              href="https://www.instagram.com/na_varty_zyttya?igsh=MWF5OWNyNzI2ZTk0eg=="
            >
              <InstagramIcon className="info-container__social-icon" />
            </a>
            <a
              className="info-container__socials-item"
              href="https://www.facebook.com/profile.php?id=61554088658276"
            >
              <FacebookIcon className="info-container__social-icon" />
            </a>
            <a
              className="info-container__socials-item"
              href="https://www.facebook.com/profile.php?id=61554088658276"
            >
              <TelegramIcon className="info-container__social-icon" />
            </a>
            <a
              className="info-container__socials-item"
              href="https://www.facebook.com/profile.php?id=61554088658276"
            >
              <TelegramIcon className="info-container__social-icon" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
