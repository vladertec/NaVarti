import React, { useState } from "react"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"

const CurrentReport = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [expandedIndexes, setExpandedIndexes] = useState([])

  const objects = [
    {
      positionNumber: 1,
      title: "Підзаголовок",
      text: "1Т екст1Тек ст1Тек ст1Текст1 Текст1 Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 ст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1 1Т екст1Тек ст1Тек ст1Текст1 Текст1 Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т  1Т екст1Тек ст1Тек ст1Текст1 Текст1 Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т  ст1 Текст1 Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 ст1 Текст 1Текст1 Текст1 Тек",
      photoUrl: "./img/logo.jpg",
    },
    {
      positionNumber: 2,
      title: "Підзаголовок",
      text: "Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1 ст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1 ст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1",
      photoUrl: "./img/logo.jpg",
    },
    {
      positionNumber: 3,
      title: "Підзаголовок",
      text: "Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1 ст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1 ",
      photoUrl: "./img/logo.jpg",
    },
    {
      positionNumber: 4,
      title: "Текст1текст",
      text: "Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1 ст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1",
      photoUrl: "./img/logo.jpg",
    },
    {
      positionNumber: 5,
      title: "підзаголовок",
      text: "Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1 ст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1",
      photoUrl: "./img/logo.jpg",
    },
    {
      positionNumber: 6,
      title: "підзаголовок",
      text: "Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1 ст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1",
      photoUrl: "./img/logo.jpg",
    },
    {
      positionNumber: 7,
      title: "підзаголовок",
      text: "Текст 1Текст1 Текст1 ТТекс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1 ст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1",
      photoUrl: "./img/logo.jpg",
    },
    {
      positionNumber: 8,
      title: "підзаголовок",
      text: "Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Твровараовпва1 ст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1",
      photoUrl: "./img/logo.jpg",
    },
  ]

  const itemsPerPage = 3

  const sortedObjects = objects.sort(
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

  
  if (objects.length === 0) {
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
                      <h2 className="report-card__name">{object.title}</h2>
                      <p className="report-card__mobile-text">{object.text}</p>
                      {expandedIndexes.includes(index) ? (
                        <p className="report-card__text">{object.text}</p>
                      ) : (
                        <p className="report-card__text">
                          {`${object.text.slice(0, 220)}...`}
                        </p>
                      )}
                      <button
                        className="report-card__btn"
                        onClick={() => toggleExpand(index)}
                      >
                        {expandedIndexes.includes(index)
                          ? "Згорнути"
                          : "Детальніше"}
                        <ArrowOutwardIcon className="report-card__btn-icon" />
                      </button>
                    </div>
                  </div>
                  <div className="report-card__img-container">
                    <img
                      className="report-card__img"
                      src={object.photoUrl}
                      alt={object.photoUrl}
                    />
                  </div>
                </div>
              ) : (
                <div className="current-report__card report-card">
                  <div className="report-card__img-container">
                    <img
                      className="report-card__img"
                      src={object.photoUrl}
                      alt={object.photoUrl}
                    />
                  </div>
                  <div className="report-card__info-container">
                    <div className="report-card__text-container">
                      <h2 className="report-card__name">{object.title}</h2>
                      <p className="report-card__mobile-text">{object.text}</p>
                      {expandedIndexes.includes(index) ? (
                        <p className="report-card__text">{object.text}</p>
                      ) : (
                        <p className="report-card__text">
                          {`${object.text.slice(0, 220)}...`}
                        </p>
                      )}
                      <button
                        className="report-card__btn"
                        onClick={() => toggleExpand(index)}
                      >
                        {expandedIndexes.includes(index)
                          ? "Згорнути"
                          : "Детальніше"}
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
