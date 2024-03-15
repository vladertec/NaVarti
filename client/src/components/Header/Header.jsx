import React, { useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import { Link as RouterLink } from "react-router-dom"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import TelegramIcon from "@mui/icons-material/Telegram"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import TikTokIcon from "../../ulits/svg/TikTokIcon"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <RouterLink to="/" className="header__logo-wrapper logo-container">
        <img
          className="logo-container__logo-img"
          src="./img/footerHeader/logoWeb.jpg"
          alt="Header logo"
        />
      </RouterLink>

      <div className="header__mobile-info-wrapper mobile-info-container">
        <div className="mobile-info-container__center">
          <ScrollLink
            to="donation-details"
            spy={true}
            smooth={true}
            className="mobile-info-container__btn"
          >
            <button className="mobile-info-container__btn">
              ДОПОМОГТИ ФОНДУ
            </button>
          </ScrollLink>
          <MenuRoundedIcon
            className="mobile-info-container__menu-icon"
            onClick={toggleMenu}
          />
        </div>

        <div className={`mobile-sidebar-menu ${menuOpen ? "open" : ""}`}>
          {menuOpen && (
            <CloseRoundedIcon
              className="mobile-sidebar-menu__close-icon"
              onClick={closeMenu}
            />
          )}
          <ul className="mobile-sidebar-menu__unordered-list">
            <li className="mobile-sidebar-menu__list">
              <ScrollLink
                to="donation-details"
                spy={true}
                smooth={true}
                className="mobile-sidebar-menu__nav-item"
                onClick={closeMenu}
              >
                РЕКВІЗИТИ
              </ScrollLink>
            </li>
            <li className="mobile-sidebar-menu__list">
              <ScrollLink
                to="current-report"
                spy={true}
                smooth={true}
                className="mobile-sidebar-menu__nav-item"
                onClick={closeMenu}
              >
                ЗВІТИ
              </ScrollLink>
            </li>
            <li className="mobile-sidebar-menu__list">
              <ScrollLink
                to="footer"
                spy={true}
                smooth={true}
                className="mobile-sidebar-menu__nav-item"
                onClick={closeMenu}
              >
                КОНТАКТИ
              </ScrollLink>
            </li>
            <li className="mobile-sidebar-menu__list">
              <ScrollLink
                to="question"
                spy={true}
                smooth={true}
                className="mobile-sidebar-menu__nav-item"
                onClick={closeMenu}
              >
                ВІДПОВІДІ
              </ScrollLink>
            </li>
          </ul>
          <div className="mobile-sidebar-menu__info-container">
            <p className="mobile-sidebar-menu__number">+380673890823</p>
            <p className="mobile-sidebar-menu__email">
              bfnavartyzyttya@gmail.com
            </p>
            <div className="mobile-sidebar-menu__icon-container">
              <a
                className="mobile-sidebar-menu__socials-item"
                href="https://www.instagram.com/na_varty_zyttya?igsh=MWF5OWNyNzI2ZTk0eg=="
              >
                <InstagramIcon className="mobile-sidebar-menu__social-icon" />
              </a>
              <a
                className="mobile-sidebar-menu__socials-item"
                href="https://www.facebook.com/profile.php?id=61554088658276"
              >
                <FacebookIcon className="mobile-sidebar-menu__social-icon" />
              </a>
              <a
                className="mobile-sidebar-menu__socials-item mobile-sidebar-menu__socials-item--tiktok-icon"
                href="https://www.tiktok.com/@na_varty_zhyttya?_t=8kfjRnBP2GM&_r=1"
              >
                <TikTokIcon />
              </a>
              <a
                className="mobile-sidebar-menu__socials-item"
                href="https://t.me/na_varty_zhyttya"
              >
                <TelegramIcon className="mobile-sidebar-menu__social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="header__info-wrapper info-container">
        <div className="info-container__center">
          <nav className="info-container__nav">
            <ScrollLink
              to="donation-details"
              spy={true}
              smooth={true}
              className="info-container__nav-item"
            >
              РЕКВІЗИТИ
            </ScrollLink>
            <ScrollLink
              to="current-report"
              spy={true}
              smooth={true}
              className="info-container__nav-item"
            >
              ЗВІТИ
            </ScrollLink>
            <ScrollLink
              to="footer"
              spy={true}
              smooth={true}
              className="info-container__nav-item"
            >
              КОНТАКТИ
            </ScrollLink>
            <ScrollLink
              to="question"
              spy={true}
              smooth={true}
              className="info-container__nav-item"
            >
              ВІДПОВІДІ
            </ScrollLink>
          </nav>

          <div className="info-container__socials social-container">
            <a
              className="social-container__socials-item"
              href="https://www.instagram.com/na_varty_zyttya?igsh=MWF5OWNyNzI2ZTk0eg=="
            >
              <InstagramIcon className="social-container__social-icon" />
            </a>
            <a
              className="social-container__socials-item"
              href="https://www.facebook.com/profile.php?id=61554088658276"
            >
              <FacebookIcon className="social-container__social-icon" />
            </a>
            <a
              className="social-container__socials-item social-container__tiktok-icon"
              href="https://www.tiktok.com/@na_varty_zhyttya?_t=8kfjRnBP2GM&_r=1"
            >
              <TikTokIcon />
            </a>
            <a
              className="social-container__socials-item"
              href="https://t.me/na_varty_zhyttya"
            >
              <TelegramIcon className="social-container__social-icon" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
