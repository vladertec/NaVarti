import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const OurTeam = ({ PositionItems }) => {
  const isMobile = window.innerWidth <= 750 // Определение мобильного устройства

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
      arrows: !isMobile,
    prevArrow: null,
    nextArrow: null,
  }

  return (
    <div className="our-team">
      <p className="our-team__title">Наша команда</p>
      <div className="our-team__card-container team-card">
        {isMobile ? (
          <Slider {...sliderSettings}>
            {PositionItems.map((item, index) => (
              <div className="team-card__card" key={index}>
                <img
                  className="team-card__card-img"
                  src={item.photoUrl}
                  alt={item.photoUrl}
                />
                <h2 className="team-card__card-name">{item.title}</h2>
                <p className="team-card__card-position">{item.position}</p>
                <p className="team-card__card-text">{item.text}</p>
              </div>
            ))}
          </Slider>
        ) : (
          PositionItems.map((item, index) => (
            <div className="team-card__card" key={index}>
              <img
                className="team-card__card-img"
                src={item.photoUrl}
                alt={item.photoUrl}
              />
              <h2 className="team-card__card-name">{item.title}</h2>
              <p className="team-card__card-position">{item.position}</p>
              <p className="team-card__card-text">{item.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default OurTeam
