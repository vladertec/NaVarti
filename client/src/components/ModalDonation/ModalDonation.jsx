import React, { useState } from "react"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import CheckIcon from "@mui/icons-material/Check"
import LinkIcon from "@mui/icons-material/Link"

const ModalDonation = ({ onClose }) => {
  const [isCopiedUkraine, setIsCopiedUkraine] = useState(false)
  const [isCopiedAbroad, setIsCopiedAbroad] = useState(false)
  const [isCopiedCard, setIsCopiedCard] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState(null)

  const handleCopyCardNumber = (text, setIsCopied) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    })
  }

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method)
  }

  const renderAdditionalInfo = () => {
    if (paymentMethod === "ukraine") {
      return (
        <div className="additional-info">
          <p>Назва підприємства/company Name: БО БФ "НА ВАРТІ ЖИТТЯ" </p>
          <p>Призначення платежу/purpose of payment: Благодійний внесок</p>
          <p>Код одержувача: 45258405</p>
          <p>
            IBAN Code: UA833052990000026002020128082
            {isCopiedUkraine ? (
              <CheckIcon className="card-number-container__check-icon" />
            ) : (
              <LinkIcon
                className="card-number-container__copy-icon"
                onClick={() =>
                  handleCopyCardNumber(
                    "UA833052990000026002020128082 ",
                    setIsCopiedUkraine
                  )
                }
              />
            )}
          </p>
          <p>Назва банку/Name of the bank: АТ КБ "ПриватБанк"</p>
        </div>
      )
    } else if (paymentMethod === "abroad") {
      return (
        <div className="additional-info">
          <p>БО БФ НА ВАРТІ ЖИТТЯ</p>
          <p>Код одержувача: 45258405</p>
          <p>
            Рахунок отримувача у форматі відповідно до стандарту IBAN:
            UA833052990000026002020128082
            {isCopiedAbroad ? (
              <CheckIcon className="card-number-container__check-icon" />
            ) : (
              <LinkIcon
                className="card-number-container__copy-icon"
                onClick={() =>
                  handleCopyCardNumber(
                    "UA833052990000026002020128082",
                    setIsCopiedAbroad
                  )
                }
              />
            )}
          </p>
          <p>Назва банку: АТ КБ «ПриватБанк»</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="modal-donation">
      <div className="modal-donation__header-wrapper header-container">
        <p className="header-container__header-title">
          Зробити внесок на фонд “На Варті Життя”
        </p>
        <CloseRoundedIcon
          className="header-container__close-icon"
          onClick={onClose}
        />
      </div>

      <div className="modal-donation__line"></div>

      <div className="modal-donation__btn-wrapper btn-container">
        <div className="btn-container__props">
          <p className="btn-container__prop-title">
            Оберіть спосіб платежу за реквізитами
          </p>
          <div className="btn-container__prop-container">
            <button
              className="btn-container__prop-btn"
              onClick={() => handlePaymentMethod("ukraine")}
            >
              ПЕРЕКАЗИ ПО УКРАЇНІ
            </button>
            <button
              className="btn-container__prop-btn"
              onClick={() => handlePaymentMethod("abroad")}
            >
              ПЕРЕКАЗИ З-ЗА КОРДОНУ
            </button>
          </div>
        </div>
        <div className="btn-container__delimiter">Або</div>

        <div className="btn-container__btn-mono-container">
          <p className="btn-container__prop-mono-title">Через банку Monobank</p>
          <button className="btn-container__btn-mono">MONOBANK</button>
        </div>
      </div>

      {renderAdditionalInfo()}

      <div className="modal-donation__line"></div>

      <div className="modal-donation__card-wrapper card-number-container">
        <p className="card-number-container__title">
          Або на офіційну карту БФ “На Варті Життя” (UAH)
        </p>
        <div className="card-number-container__card-copy">
          <p className="card-number-container__copy-number">
            0000 0000 0000 0000
            {isCopiedCard ? (
              <CheckIcon className="card-number-container__icon" />
            ) : (
              <LinkIcon
                className="card-number-container__icon"
                onClick={() =>
                  handleCopyCardNumber("0000 0000 0000 0000", setIsCopiedCard)
                }
              />
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ModalDonation
