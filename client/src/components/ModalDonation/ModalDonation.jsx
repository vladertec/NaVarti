import React, { useState } from "react"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import CheckIcon from "@mui/icons-material/Check"
import LinkIcon from "@mui/icons-material/Link"

const ModalDonation = ({ onClose }) => {
  const [isCopiedUkraine, setIsCopiedUkraine] = useState(false)
  const [isCopiedAbroadEuro, setIsCopiedAbroadEuro] = useState(false)
  const [isCopiedAbroadDollar, setIsCopiedAbroadDollar] = useState(false)
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
          <p className="additional-info__text">
            Назва підприємства/company Name: БО БФ "НА ВАРТІ ЖИТТЯ"{" "}
          </p>
          <p className="additional-info__text">
            Призначення платежу/purpose of payment: Благодійний внесок
          </p>
          <p className="additional-info__text">Код одержувача: 45258405</p>
          <p className="additional-info__text-iban">
            IBAN CODE:
            <span className="additional-info__text-iban-number">
              UA833052990000026002020128082
            </span>
            <span className="additional-info__icon-container">
              {isCopiedUkraine ? (
                <CheckIcon className="additional-info__icon" />
              ) : (
                <LinkIcon
                  className="additional-info__icon"
                  onClick={() =>
                    handleCopyCardNumber(
                      "UA833052990000026002020128082",
                      setIsCopiedUkraine
                    )
                  }
                />
              )}
            </span>
          </p>
          <p className="additional-info__bank-text">
            Назва банку/Name of the bank: АТ КБ "ПриватБанк"
          </p>
        </div>
      )
    } else if (paymentMethod === "abroad") {
      return (
        <div className="additional-info">
          <p className="additional-info__text">
            Назва підприємства/company Name: BF "Na Varty Zhyttya"
          </p>
          <p className="additional-info__text">
            Призначення платежу/purpose of payment: Charitable contribution
          </p>
          <p className="additional-info__text">Код одержувача: 45258405</p>
          <div className="additional-info__text-iban">
            For Euro IBAN Code:
            <p className="additional-info__text-iban-number">
              UA223052990000026005040126016
            </p>
            <div className="additional-info__icon-container">
              {isCopiedAbroadEuro ? (
                <CheckIcon className="additional-info__icon" />
              ) : (
                <LinkIcon
                  className="additional-info__icon"
                  onClick={() =>
                    handleCopyCardNumber(
                      "UA223052990000026005040126016",
                      setIsCopiedAbroadEuro
                    )
                  }
                />
              )}
            </div>
          </div>

          <div className="additional-info__text-iban">
            For Dollar IBAN Code:
            <p className="additional-info__text-iban-number">
              UA223052990000026002020124718
            </p>
            <div className="additional-info__icon-container">
              {isCopiedAbroadDollar ? (
                <CheckIcon className="additional-info__icon" />
              ) : (
                <LinkIcon
                  className="additional-info__icon"
                  onClick={() =>
                    handleCopyCardNumber(
                      "UA223052990000026002020124718",
                      setIsCopiedAbroadDollar
                    )
                  }
                />
              )}
            </div>
          </div>

          <p className="additional-info__bank-text">
            Назва банку/Name of the bank: JSC CB "PRIVATBANK" 1D HRUSHEVSKOHO
            STR., KYIV, UKRAINE
          </p>
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
          <button
            className="btn-container__btn-mono"
            onClick={() =>
              window.open("https://send.monobank.ua/jar/3iDPWEskZm", "_blank")
            }
          >
            MONOBANK
          </button>
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
          </p>
          <div className="card-number-container__icon-container">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalDonation
