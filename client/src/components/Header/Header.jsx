import React from "react"
import { Link } from "react-scroll"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import TelegramIcon from "@mui/icons-material/Telegram"

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
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
      </nav>

      <div className="header__socials">
        <a
          className="header__socials-item"
          href="https://www.instagram.com/na_varty_zyttya?igsh=MWF5OWNyNzI2ZTk0eg=="
        >
          <InstagramIcon className="header__social-icon" />
        </a>
        <a
          className="header__socials-item"
          href="https://www.facebook.com/profile.php?id=61554088658276"
        >
          <FacebookIcon className="header__social-icon" />
        </a>
        <a
          className="header__socials-item"
          href="https://www.facebook.com/profile.php?id=61554088658276"
        >
          <TelegramIcon className="header__social-icon" />
        </a>
        <a
          className="header__socials-item"
          href="https://www.facebook.com/profile.php?id=61554088658276"
        >
          <TelegramIcon className="header__social-icon" />
        </a>
      </div>
    </header>
  )
}

export default Header
