import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  draggable: true,
  variableWidth: true,
  arrows: false,
  centerMode: true,
}

const CurrentFee = ({ cards }) => (
  <div className="current-fee">
    <p className="title">Актуальні збори</p>
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index} className="card" style={{ width: 300 }}>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>
      ))}
    </Slider>
  </div>
)

export default CurrentFee
