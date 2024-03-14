import React, { useState } from "react"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import CheckIcon from "@mui/icons-material/Check"
import LinkIcon from "@mui/icons-material/Link"

const DonationDetails = ({ donationDetailsItems }) => {
  const [copiedIndex, setCopiedIndex] = useState(null)
  const [showDetails, setShowDetails] = useState(
    Array(donationDetailsItems.length).fill(false)
  )

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 5000)
    })
  }

  const toggleDetails = (index) => {
    const updatedShowDetails = [...showDetails]
    updatedShowDetails[index] = !updatedShowDetails[index]
    setShowDetails(updatedShowDetails)
  }

  if (donationDetailsItems.length === 0) {
    return null
  }

  return (
    <div className="donation-details">
      <p className="donation-details__title">Реквізити фонду</p>
      <div className="donation-details__container">
        {donationDetailsItems.map((detail, index) => (
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
                    <span className="donation-container__copy">
                      Скопіювати
                      <LinkIcon className="donation-container__copy-icon" />
                    </span>
                  )}
                </button>
                {!showDetails[index] ? (
                  <button
                    className="donation-container__information-btn"
                    onClick={() => toggleDetails(index)}
                  >
                    Детальніше
                    <ArrowOutwardIcon className="donation-container__copy-icon" />
                  </button>
                ) : (
                  <button
                    className="donation-container__information-btn donation-container__information-btn--close"
                    onClick={() => toggleDetails(index)}
                  >
                    Згорнути
                  </button>
                )}
              </div>
            </div>

            {showDetails[index] && (
              <div className="donation-container__additional-info-container">
                <p className="donation-container__additional-text">
                  {detail.description}
                </p>
                <p className="donation-container__additional-text">
                  Назва підприємства/company Name:
                </p>
                <p className="donation-container__additional-text">
                  {detail.companyName}
                </p>
                {detail.recipientCode && (
                  <p className="donation-container__additional-text">
                    Код одержувача: {detail.recipientCode}
                  </p>
                )}
                <p className="donation-container__additional-text">
                  IBAN Code: {detail.account}
                </p>
                <p className="donation-container__additional-text">
                  Назва банку/Name of the bank:
                </p>
                <p className="donation-container__additional-text">
                  {detail.bankName}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DonationDetails
