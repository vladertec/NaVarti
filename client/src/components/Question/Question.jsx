import React, { useState } from "react"

const Question = ({ faq }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="question">
      <div className="question__container">
        <h1 className="question__title">Відповіді</h1>
        <p className="question__text">
          Перед тим як сфокусуватися на основних 4 напрямках ми встигли
          передати: fdkhkfjndsg kdgfn dgskgb jfdg kdsfb fgd js gb
          djbhfbfdshjgdfjh fdbg jsdg bdfjgb jfbnd lkvfskfjd ndfk kfdbg egfdk
          kfgbkgdfsjl kgbekb ekg fk bkt bgbds fd gfdsiubfjkbn dfkg bigfdb kjb
          dfks fdkgb ldsg gdfl sgfb fgfkjdsgdfg dfkb fdgfgdsk gkj gfdlkbfgd
          gfdgf kgfbkfdgs dfgb fsdkfdbgdbkjfbgfd sf kgfdb gds gfs
        </p>
        {faq.map((item, index) => (
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
