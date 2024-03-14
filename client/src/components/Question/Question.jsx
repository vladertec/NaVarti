import React, { useState } from "react"

const Question = ({ questionItems }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="question">
      <div className="question__container">
        <h1 className="question__title">Відповіді</h1>
        <p className="question__text">
          Перед тим як сфокусуватися на основних 4 напрямках ми встигли Перед
          тим як сфокусуватися на основних 4 напрямках ми встигли Перед тим як
          сфокусуватися на основних 4 напрямках ми встигли Перед тим як
          сфокусуватися на основних 4 напрямках ми встигли Перед тим як
          сфокусуватися на основних 4 напрямках ми встигли Перед тим як
          сфокусуватися на основних 4 напрямках ми встигли
        </p>
        {questionItems.map((item, index) => (
          <div className="question__item" key={index}>
            <button
              className="question__question-btn"
              onClick={() => handleToggle(index)}
              aria-expanded={activeIndex === index ? "true" : "false"}
            >
              {item.question}
              <span
                className={`question__icon ${
                  activeIndex === index ? "question__icon--active" : ""
                }`}
              >
                ^
              </span>
            </button>
            <div
              className={`question__answer ${
                activeIndex === index ? "question__answer--active" : ""
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Question
