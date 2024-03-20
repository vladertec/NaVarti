import React, { useState } from "react"
import Slider from "react-slick"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"

const CurrentReport = ({ currentReportItems }) => {
  const [expandedIndexes, setExpandedIndexes] = useState([])

  const toggleExpand = (index) => {
    const expandedIndex = expandedIndexes.indexOf(index)
    if (expandedIndex === -1) {
      setExpandedIndexes([...expandedIndexes, index])
    } else {
      const newExpandedIndexes = [...expandedIndexes]
      newExpandedIndexes.splice(expandedIndex, 1)
      setExpandedIndexes(newExpandedIndexes)
    }
  }

  if (currentReportItems.length === 0) {
    return null
  }

  const settings = {
    dots: currentReportItems.length > 3,
    infinite: currentReportItems.length > 3,
    speed: 500,
    slidesToShow: 1,
    autoplaySpeed: 90000000,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
  }

  const groupedItems = []
  for (let i = 0; i < currentReportItems.length; i += 3) {
    groupedItems.push(currentReportItems.slice(i, i + 3))
  }

  return (
    <div className="current-report">
      <p className="current-report__title">Звіти</p>
      <Slider {...settings}>
        {groupedItems.map((group, index) => (
          <div key={index} className="current-report__slide">
            {group.map((object, idx) => (
              <div key={idx} className="current-report__card report-card">
                {object.positionNumber % 2 === 0 ? (
                  <>
                    <div className="report-card__img-container">
                      <img
                        className="report-card__img"
                        src={object.photoUrl}
                        alt={`Report ${idx + 1}`}
                      />
                    </div>
                    <div className="report-card__info-container">
                      <div className="report-card__text-container">
                        <p className="report-card__date">{object.date}</p>
                        <p className="report-card__name">{object.title}</p>
                        <p className="report-card__mobile-text">
                          {object.text}
                        </p>
                        <p
                          className={`report-card__text ${
                            expandedIndexes.includes(idx) ? "expanded" : ""
                          }`}
                        >
                          {object.text}
                        </p>
                        <button
                          className="report-card__btn"
                          onClick={() => toggleExpand(idx)}
                        >
                          {expandedIndexes.includes(idx)
                            ? "ЗГОРНУТИ"
                            : "ДЕТАЛЬНІШЕ"}
                          <ArrowOutwardIcon className="report-card__btn-icon" />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="report-card__info-container">
                      <div className="report-card__text-container">
                        <p className="report-card__date">{object.date}</p>
                        <p className="report-card__name">{object.title}</p>
                        <p className="report-card__mobile-text">
                          {object.text}
                        </p>
                        <p
                          className={`report-card__text ${
                            expandedIndexes.includes(idx) ? "expanded" : ""
                          }`}
                        >
                          {object.text}
                        </p>
                        <button
                          className="report-card__btn"
                          onClick={() => toggleExpand(idx)}
                        >
                          {expandedIndexes.includes(idx)
                            ? "ЗГОРНУТИ"
                            : "ДЕТАЛЬНІШЕ"}
                          <ArrowOutwardIcon className="report-card__btn-icon" />
                        </button>
                      </div>
                    </div>
                    <div className="report-card__img-container">
                      <img
                        className="report-card__img"
                        src={object.photoUrl}
                        alt={`Report ${idx + 1}`}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CurrentReport
