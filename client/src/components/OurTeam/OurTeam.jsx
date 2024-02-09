import React from "react"
import Slider from "react-slick"

const items = {

}

const OurTeam = ({ items }) => {
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-component">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="slide">
            <img src={item.image} alt={item.altText} />
            <div className="slide-caption">{item.caption}</div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default OurTeam
