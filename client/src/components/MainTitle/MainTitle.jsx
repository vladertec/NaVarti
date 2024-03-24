import React, { useState } from "react"
import TollIcon from "@mui/icons-material/Toll"
import { Link as ScrollLink } from "react-scroll"
import ModalDonation from "../ModalDonation/ModalDonation"

const MainTitle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDonateClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="title">
      {isModalOpen && (
        <div className="title__overlay" onClick={handleCloseModal}></div>
      )}
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
            src="./img/content/mainTitle/mainTitle.jpg"
            className="info-container__img"
            alt="Title illustration"
          />
        </div>
      </div>
      {isModalOpen && <ModalDonation onClose={handleCloseModal} />}
    </div>
  )
}

export default MainTitle
