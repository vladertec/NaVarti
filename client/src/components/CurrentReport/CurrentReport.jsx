import React, { useState } from "react"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"

const CurrentReport = ({ currentReportItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [expandedIndexes, setExpandedIndexes] = useState([])

  const itemsPerPage = 3

  const sortedObjects = currentReportItems.sort(
    (a, b) => a.positionNumber - b.positionNumber
  )

  const pageCount = Math.ceil(sortedObjects.length / itemsPerPage)

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

  return (
    <div className="current-report">
      <p className="current-report__title">Звіти</p>
      <div className="current-report__slider-container">
        {sortedObjects
          .slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
          .map((object, index) => (
            <div key={object.positionNumber} className="current-report__slide">
              {object.positionNumber % 2 === 0 ? (
                <div className="current-report__card report-card">
                  <div className="report-card__info-container">
                    <div className="report-card__text-container">
                      <p className="report-card__date">{object.date}</p>
                      <p className="report-card__name">{object.title}</p>
                      <p className="report-card__mobile-text">{object.text}</p>
                      <p
                        className={`report-card__text ${
                          expandedIndexes.includes(index) ? "expanded" : ""
                        }`}
                      >
                        {object.text}
                      </p>
                      <button
                        className="report-card__btn"
                        onClick={() => toggleExpand(index)}
                      >
                        {expandedIndexes.includes(index)
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
                      alt={`Report ${index + 1}`}
                    />
                  </div>
                </div>
              ) : (
                <div className="current-report__card report-card">
                  <div className="report-card__img-container">
                    <img
                      className="report-card__img"
                      src={object.photoUrl}
                      alt={`Report ${index + 1}`}
                    />
                  </div>
                  <div className="report-card__info-container">
                    <div className="report-card__text-container">
                      <p className="report-card__date">{object.date}</p>
                      <p className="report-card__name">{object.title}</p>
                      <p className="report-card__mobile-text">{object.text}</p>
                      <p
                        className={`report-card__text ${
                          expandedIndexes.includes(index) ? "expanded" : ""
                        }`}
                      >
                        {object.text}
                      </p>
                      <button
                        className="report-card__btn"
                        onClick={() => toggleExpand(index)}
                      >
                        {expandedIndexes.includes(index)
                          ? "ЗГОРНУТИ"
                          : "ДЕТАЛЬНІШЕ"}
                        <ArrowOutwardIcon className="report-card__btn-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        {pageCount > 1 && (
          <div className="current-report__controls">
            {Array.from({ length: pageCount }).map((_, index) => (
              <span
                key={index}
                className={`current-report__dot ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CurrentReport
