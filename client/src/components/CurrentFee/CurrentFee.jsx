import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"

const CurrentFee = ({ currentFeeItems }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1)

  if (currentFeeItems.length === 0) {
    return null
  }

  const settings = {
    dots: currentFeeItems.length > 4,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 90000000,
    cssEase: "linear",
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          dots: currentFeeItems.length > 2,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index)
  }

  return (
    <div className="current-fee-carousel">
      <p className="current-fee-carousel__title">Актуальні збори</p>
      <Slider {...settings}>
        {currentFeeItems.map((slide, index) => (
          <div key={index} className="current-fee-slide">
            <div className="current-fee-slide__card">
              <img
                src={slide.photoUrl}
                alt={`Current fee Logo ${index + 1}`}
                className="current-fee-slide__logo"
              />
              <p className="current-fee-slide__title">{slide.title}</p>
              <p
                className={`current-fee-slide__text ${
                  expandedIndex === index ? "expanded" : ""
                }`}
              >
                {slide.text}
              </p>
              <button
                className="current-fee-slide__btn"
                onClick={() => window.open(slide.link, "_blank")}
              >
                ПІДТРИМАТИ ЗБІР
              </button>
              <button
                className="current-fee-slide__btn current-fee-slide__btn--information"
                onClick={() => handleExpand(index)}
              >
                {expandedIndex === index ? "ЗГОРНУТИ" : "ДЕТАЛЬНІШЕ"}
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
