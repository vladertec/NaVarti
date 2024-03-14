import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Partners = ({ partnerItems }) => {
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

  if (partnerItems.length === 0) {
    return null
  }

  return (
    <div className="partners-carousel">
      <p className="partners-carousel__title">Наші партнери</p>
      <Slider {...settings}>
        {partnerItems.map((slide, index) => (
          <div key={index} className="partner-slide">
            <div className="partner-card">
              <img
                src={slide.photoUrl}
                alt={`Partner logo ${index + 1}`}
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
