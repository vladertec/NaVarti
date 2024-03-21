import React, { useState } from "react"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Question = ({ questionItems }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const handleLinkClick = (link) => {
    if (link.includes("@")) {
      window.location.href = `mailto:${link}`
    } else if (link.match(/^\+?\d+$/)) {
      window.location.href = `tel:${link.replace(/\D/g, "")}`
    }
  }

  const formatContent = (text) => {
    const content = []
    let currentIndex = 0

    // Регулярное выражение для поиска и почты, и номеров телефонов
    const linkRegex =
      /(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)|(\+?\d{10,})/g

    let match
    while ((match = linkRegex.exec(text)) !== null) {
      // Добавляем текст до ссылки
      const beforeText = text.substring(currentIndex, match.index)
      content.push(beforeText)

      // Определяем, является ли найденная ссылка почтой или телефонным номером
      const link = match[0]
      if (link.includes("@")) {
        content.push(
          <a
            key={currentIndex}
            className="footer__info-text"
            href="#"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick(link)
            }}
          >
            {link}
          </a>
        )
      } else if (link.match(/^\+?\d+$/)) {
        content.push(
          <a
            key={currentIndex}
            className="footer__info-text"
            href="#"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick(link)
            }}
          >
            {link}
          </a>
        )
      }

      currentIndex = match.index + link.length
    }

    // Добавляем оставшийся текст после последней ссылки
    const remainingText = text.substring(currentIndex)
    content.push(remainingText)

    return content
  }

  return (
    <div className="question">
      <div className="question__container">
        <h1 className="question__title">Відповіді</h1>
        <p className="question__text">
          Тут ми зібрали найбільш поширені запитання та відповіді на них. Якщо у
          вас виникли додаткові питання або потрібна додаткова інформація, будь
          ласка, зв'яжіться з нами за допомогою наведених контактних даних
          нижче:
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
                <KeyboardArrowDownIcon               className="question__arrow-icon"/>
              </span>
            </button>
            <div
              className={`question__answer ${
                activeIndex === index ? "question__answer--active" : ""
              }`}
            >
              {formatContent(item.answer)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Question
