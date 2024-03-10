import React from "react"
import Slider from "react-slick"
import ModeEditIcon from "@mui/icons-material/ModeEdit"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded"
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded"

const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={() => {
        console.log("Prev clicked")
        onClick()
      }}
      className="make-request__arrow-next-icon-container "
    >
      <NavigateNextRoundedIcon className="make-request__icon-next" />
    </div>
  )
}

const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={() => {
        console.log("Prev clicked")
        onClick()
      }}
      className="make-request__arrow-prev-icon-container "
    >
      <NavigateBeforeRoundedIcon className="make-request__icon-prev" />
    </div>
  )
}

const MakeRequest = ({ RequestItems }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.68,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  if (RequestItems.length === 0) {
    return null
  }

  return (
    <div className="make-request">
      <p className="make-request__mobile-title">Зробити запит</p>
      <div className="make-request__container">
        <p className="make-request__title">Зробити запит</p>
        <div className="make-request__card-container">
          {RequestItems.map((item, index) => (
            <div className="make-request__card" key={index}>
              <img
                className="make-request__card-img"
                src={item.photoUrl}
                alt={item.title}
              />
              <h2 className="make-request__card-name">{item.title}</h2>
              <p className="make-request__card-text">{item.text}</p>
              <button
                className="make-request__btn"
                onClick={() => (window.location.href = item.link)}
              >
                Заповнити форму
                <ModeEditIcon className="make-request__btn-icon" />
              </button>
            </div>
          ))}
        </div>
        <div className="make-request__mobile-slider">
          <Slider {...sliderSettings}>
            {RequestItems.map((item, index) => (
              <div className="make-request__card" key={index}>
                <img
                  className="make-request__card-img"
                  src={item.photoUrl}
                  alt={item.title}
                />
                <h2 className="make-request__card-name">{item.title}</h2>
                <p className="make-request__card-text">{item.text}</p>
                <button
                  className="make-request__btn"
                  onClick={() => (window.location.href = item.link)}
                >
                  Заповнити форму
                  <ModeEditIcon className="make-request__btn-icon" />
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default MakeRequest
