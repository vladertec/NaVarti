import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const OurTeam = ({ PositionItems }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 90000000,
    cssEase: "linear",
    prevArrow: null,
    nextArrow: null,
  }

  if (PositionItems.length === 0) {
    return null
  }

  return (
    <div className="our-team">
      <p className="our-team__title">Наша команда</p>
      <div className="our-team__card-container team-card">
        <div className="team-card__desktop-list-card">
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
        </div>
        <div className="team-card__mobile-slider">
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
        </div>
      </div>
    </div>
  )
}

export default OurTeam
