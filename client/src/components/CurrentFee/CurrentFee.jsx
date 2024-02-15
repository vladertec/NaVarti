import React, { useState } from "react"

const CurrentFee = ({ cards }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0)

  const handleCardClick = (index) => {
    setSelectedCardIndex(index)
  }

  const centerCardIndex = cards.findIndex((card) => card.numberPosition === 1)

  return (
    <div className="current-fee">
      <div className="current-fee__cards-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${index === centerCardIndex ? "center" : ""} ${
              index === selectedCardIndex ? "selected" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CurrentFee
