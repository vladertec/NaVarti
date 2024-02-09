import React from "react"
import { Link } from "react-router-dom"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import TelegramIcon from "@mui/icons-material/Telegram"

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="header__nav-item">реквізити</Link>
        <Link className="header__nav-item">звіти</Link>
        <Link className="header__nav-item">контакти</Link>
        <Link className="header__nav-item">відповіді</Link>
      </nav>

      <div className="header__socials">
        <a
          className="header__socials-item"
          href="https://www.instagram.com/na_varty_zyttya?igsh=MWF5OWNyNzI2ZTk0eg=="
        >
          <InstagramIcon />
        </a>
        <a
          className="header__socials-item"
          href="https://www.facebook.com/profile.php?id=61554088658276"
        >
          <FacebookIcon />
        </a>
        <a
          className="header__socials-item"
          href="https://www.facebook.com/profile.php?id=61554088658276"
        >
          <TelegramIcon />
        </a>
        <a
          className="header__socials-item"
          href="https://www.facebook.com/profile.php?id=61554088658276"
        >
          <TelegramIcon />
        </a>
      </div>
    </header>
  )
}

export default Header
