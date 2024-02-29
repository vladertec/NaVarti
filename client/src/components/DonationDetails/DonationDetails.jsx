import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import CheckIcon from "@mui/icons-material/Check"
import LinkIcon from "@mui/icons-material/Link"
import React, { useState } from "react"

const DonationDetails = ({ details }) => {
  const [copiedIndex, setCopiedIndex] = useState(null)

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 5000)
    })
  }

  return (
    <div className="donation-details">
      <p className="donation-details__title">Реквізити фонду</p>
      <div className="donation-details__container">
        {details.map((detail, index) => (
          <div
            key={index}
            className="donation-details__item donation-container"
          >
            <div>
              <p className="donation-container__currency">
                {detail.description}
              </p>
            </div>
            <div className="donation-container__information-container">
              <div className="donation-container__number">
                {detail.account}
                {copiedIndex === index ? (
                  <CheckIcon className="donation-container__mobile-check-icon" />
                ) : (
                  <LinkIcon
                    className="donation-container__mobile-copy-icon"
                    onClick={() => handleCopy(detail.account, index)}
                  />
                )}
              </div>
              <div className="donation-container__btn-container">
                <button
                  className="donation-container__copy-btn"
                  onClick={() => handleCopy(detail.account, index)}
                >
                  {copiedIndex === index ? (
                    <span className="donation-container__copied">
                      Скопійовано
                      <CheckIcon className="donation-container__copy-icon" />
                    </span>
                  ) : (
                    <p className="donation-container__copy">
                      Скопіювати
                      <LinkIcon className="donation-container__copy-icon" />
                    </p>
                  )}
                </button>
                <button className="donation-container__information-btn">
                  Детальніше
                  <ArrowOutwardIcon className="donation-container__copy-icon" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DonationDetails
