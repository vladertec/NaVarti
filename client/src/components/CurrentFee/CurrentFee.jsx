import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"

const CurrentFee = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    prevArrow: null,
    nextArrow: null,
  }

  const RequestItems = [
    {
      photoUrl: "/img/logo.jpg",
      title: "Підзаголовок",
      text: "Текстfd1 Текс тfd1 Текс тfd1 Текстfd1 Текстf d1Текстf d1Текс тfd1 Тек стfd1 Текст fd1 Текст fd1 Текст fd1 dfjh",
    },
    {
      photoUrl: "/img/logo.jpg",
      title: "Підзаголовок",
      text: "Текстfd1 Текс тfd1 Текс тfd1 Текстfd1 Текстf d1Текстf d1Текс тfd1 Тек стfd1 Текст fd1",
    },
    {
      photoUrl: "/img/logo.jpg",
      title: "Підзаголовок",
      text: "Текстfd1 Текс тfd1 Текс тfd1 Текстfd1 Текстf d1Текстf d1Текс тfd1 Тек стfd1 Текст fd1",
    },
    {
      photoUrl: "/img/logo.jpg",
      title: "Підзаголовок",
      text: "Текстfd1 Текс тfd1 Текс тfd1 Текстfd1 Текстf d1Текстf d1Текс тfd1 Тек стfd1 Текст fd1",
    },
    {
      photoUrl: "/img/logo.jpg",
      title: "Підзаголовок",
      text: "Текстfd1 Текс тfd1 Текс тfd1 Текстfd1 Текстf d1Текстf d1Текс тfd1 Тек стfd1 Текст fd1",
    },
    {
      photoUrl: "/img/logo.jpg",
      title: "Підзаголовок",
      text: "Текстfd1 Текс тfd1 Текс тfd1 Текстfd1 Текстf d1Текстf d1Текс тfd1 Тек стfd1 Текст fd1",
    },
  ]

  return (
    <div className="current-fee-carousel">
      <p className="current-fee-carousel__title">Актуальні збори</p>
      <Slider {...settings}>
        {RequestItems.map((slide, index) => (
          <div key={index} className="current-fee-slide">
            <div className="current-fee-slide__card">
              <img
                src={slide.photoUrl}
                alt={`Current fee Logo ${index}`}
                className="current-fee-slide__logo"
              />
              <p className="current-fee-slide__title">{slide.title}</p>
              <p className="current-fee-slide__text">{slide.text}</p>
              <button className="current-fee-slide__btn">
                ПІДТРИМАТИ ЗБІР
              </button>
              <button className="current-fee-slide__btn current-fee-slide__btn--information">
                ДЕТАЛЬНІШЕ
                <ArrowOutwardIcon className="current-fee-slide__btn-icon" />
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CurrentFee
