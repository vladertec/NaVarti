import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import TollIcon from "@mui/icons-material/Toll"
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded"
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded"
import ModalDonation from "../ModalDonation/ModalDonation"

const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={() => {
        onClick()
      }}
      className="volunteer-carousel__arrow-next-icon-container "
    >
      <NavigateNextRoundedIcon className="volunteer-carousel__icon-next" />
    </div>
  )
}

const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={() => {
        onClick()
      }}
      className="volunteer-carousel__arrow-prev-icon-container "
    >
      <NavigateBeforeRoundedIcon className="volunteer-carousel__icon-prev" />
    </div>
  )
}

const Volunteers = ({ volunteerPositionItems }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDonateClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const settings = {
    dots: volunteerPositionItems.length > 4,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  if (volunteerPositionItems.length === 0) {
    return null
  }

  return (
    <div className="volunteer-carousel">
      {isModalOpen && (
        <div className="title__overlay" onClick={handleCloseModal}></div>
      )}
      <p className="volunteer-carousel__title">Волонтери</p>
      <div className="volunteer-carousel__container">
        <p className="volunteer-carousel__mobile-title">Волонтери</p>
        <Slider {...settings}>
          {volunteerPositionItems.map((slide, index) => (
            <div key={index} className="volunteer-slide">
              <div className="volunteer-card">
                <img
                  src={slide.photoUrl}
                  alt={`Volunteer member ${index + 1}`}
                  className="volunteer-logo"
                />
                <p className="volunteer-title">{slide.title}</p>
                <p className="volunteer-text">{slide.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="volunteer-carousel__btn-container volunteer-btn-wrapper">
        <button
          className="volunteer-btn-wrapper__btn"
          onClick={handleDonateClick}
        >
          ЗРОБИТИ ВНЕСОК{" "}
          <TollIcon className="volunteer-btn-wrapper__btn-icon" />
        </button>
      </div>
      {isModalOpen && <ModalDonation onClose={handleCloseModal} />}
    </div>
  )
}

export default Volunteers
