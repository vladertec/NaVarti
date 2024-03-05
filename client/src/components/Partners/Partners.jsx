import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Partners = () => {
  const slides = [
    "./img/logoWeb.jpg",
    "./img/logoWeb.jpg",
    "./img/logoWeb.jpg",
    "./img/logoWeb.jpg",
    "./img/qr-code.png",
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  }

  return (
    <div className="partners-carousel">
      <p className="partners-carousel__title">Наші партнери</p>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="partner-slide">
            <div className="partner-card">
              <img
                src={slide}
                alt={`Partner Logo ${index}`}
                className="partner-logo"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Partners
