import TollIcon from "@mui/icons-material/Toll"
import { Link as ScrollLink } from "react-scroll"

const MainTitle = () => {
  const handleDonateClick = () => {
    window.location.href = "https://send.monobank.ua/jar/3iDPWEskZm"
  }
  return (
    <div className="title">
      <div className="title__container">
        <div className="title__text-container info-container">
          <h6 className="info-container__title">БФ "НА ВАРТІ ЖИТТЯ"</h6>
          <p className="info-container__text">
            Ми стоїмо На Варті Життя тих, хто дійсно цього потребує, запрошуємо
            вас долучитися до нашої «Варти»
          </p>

          <div className="info-container__btn-container">
            <button
              className="info-container__btn info-container__btn--donate"
              onClick={handleDonateClick}
            >
              ЗРОБИТИ ВНЕСОК <TollIcon className="info-container__btn-icon" />
            </button>
            <ScrollLink
              to="make-request"
              spy={true}
              smooth={true}
              className="info-container__btn info-container__btn--help"
            >
              ЗАПИТ ПРО ДОПОМОГУ
            </ScrollLink>
          </div>
        </div>

        <div className="info-container__img-container">
          <img
            src="./img/logoBackground.png"
            className="info-container__img"
            alt="Title illustration"
          />
        </div>
      </div>
    </div>
  )
}

export default MainTitle
