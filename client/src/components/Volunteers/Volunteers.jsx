import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import TollIcon from "@mui/icons-material/Toll"

const Volunteers = () => {
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
      text: "Текстfd1",
    },
    {
      photoUrl: "/img/logo.jpg",
      title: "Підзаголовок",
      text: "Текстfd1",
    },
    {
      photoUrl: "/img/logo.jpg",
      title: "Підзаголовок",
      text: "Текстfd1",
    },
    {
      photoUrl: "/img/logo.jpg",
      title: "Підзаголовок",
      text: "Текстfd1",
    },
    {
      photoUrl: "/img/logo.jpg",
      title: "Підзаголовок",
      text: "Текстfd1",
    },
    {
      photoUrl: "/img/logo.jpg",
      title: "Підзаголовок",
      text: "Текстfd1",
    },
  ]

  return (
    <div className="volunteer-carousel">
      <p className="volunteer-carousel__title">Волонтери</p>
      <div className="volunteer-carousel__container">
        <Slider {...settings}>
          {RequestItems.map((slide, index) => (
            <div key={index} className="volunteer-slide">
              <div className="volunteer-card">
                <img
                  src={slide.photoUrl}
                  alt={`Volunteer Logo ${index}`}
                  className="volunteer-logo"
                />
                <p className="volunteer-title">{slide.title}</p>
                <p className="volunteer-text">{slide.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="volunteer-carousel__btn-container">
        <button className="volunteer-carousel__btn">
          ЗРОБИТИ ВНЕСОК <TollIcon className="volunteer-carousel__btn-icon" />
        </button>
      </div>
    </div>
  )
}

export default Volunteers
