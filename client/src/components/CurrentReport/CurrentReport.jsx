import React, { useState } from "react"

const CurrentReport = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const objects = [
    {
      positionNumber: 1,
      title: "Текст1текст",
      content:
        "Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1 Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1",
      photoUrl: "/img/logo.jpg",
    },
    {
      positionNumber: 2,
      title: "Текст1текст",
      content:
        "Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1",
      photoUrl: "/img/logo.jpg",
    },
    {
      positionNumber: 3,
      title: "Текст1текст",
      content:
        "Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1",
      photoUrl: "/img/logo.jpg",
    },
    {
      positionNumber: 4,
      title: "Текст1текст",
      content:
        "Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1",
      photoUrl: "/img/logo.jpg",
    },
    {
      positionNumber: 5,
      title: "Текст1текст",
      content:
        "Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1",
      photoUrl: "/img/logo.jpg",
    },
    {
      positionNumber: 6,
      title: "Текст1текст",
      content:
        "Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1",
      photoUrl: "/img/logo.jpg",
    },
    {
      positionNumber: 7,
      title: "Текст1текст",
      content:
        "Текст 1Текст1 Текст1 ТТекс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Тек ст1Тек ст1Текст1 Текст1",
      photoUrl: "/img/logo.jpg",
    },
    {
      positionNumber: 8,
      title: "Текст1текст",
      content:
        "Текст 1Текст1 Текст1 Текст 1Текст1 Текст1 Текс т1Текст1Т екст1Текс т1Текст1 Текст1 Текст1Т екст1Те кст1Т екст1Твровараовпва1",
      photoUrl: "/img/logo.jpg",
    },
  ]

  const itemsPerPage = 3

  const sortedObjects = objects.sort(
    (a, b) => a.positionNumber - b.positionNumber
  )

  const pageCount = Math.ceil(sortedObjects.length / itemsPerPage)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pageCount)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pageCount - 1 : prevIndex - 1
    )
  }

  return (
    <div className="current-report">
      <p className="current-report__title">Звіти</p>
      <div className="current-report__slider-container">
        {sortedObjects
          .slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
          .map((object) => (
            <div key={object.positionNumber} className="current-report__slide">
              {object.positionNumber % 2 === 0 ? (
                <div className="current-report__card report-card">
                  <div className="report-card__info-container">
                    <div className="report-card__text-container">
                      <h2 className="report-card__name">{object.title}</h2>
                      <p className="report-card__text">{object.content}</p>
                    </div>
                  </div>
                  <img
                    className="report-card__img"
                    src={object.photoUrl}
                    alt={object.photoUrl}
                  />
                </div>
              ) : (
                <div className="current-report__card report-card">
                  <img
                    className="report-card__img"
                    src={object.photoUrl}
                    alt={object.photoUrl}
                  />
                  <div className="report-card__info-container">
                    <div className="report-card__text-container">
                      <h2 className="report-card__name">{object.title}</h2>
                      <p className="report-card__text">{object.content}</p>
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
