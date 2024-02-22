import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Formik, Field, ErrorMessage, Form } from "formik"
import * as Yup from "yup"
import Error from "../Error/Error"
import {
  addNewDonationDetailCard,
  deleteDonationDetailCard,
  getDonationDetailCards,
} from "../../api/donationDetails"

const validationSchema = Yup.object().shape({
  description: Yup.string().required("Введіть назву реквізиту"),
  account: Yup.string().required("Введіть номер реквізиту"),
})

const initialValues = {
  description: "",
  account: "",
}

const EditDonationDetails = () => {
  const navigate = useNavigate()
  const [donationDetailCards, setDonationDetailCards] = useState([])
  const [refreshPage, setRefreshPage] = useState(false)

  useEffect(() => {
    const donationDetailInformation = async () => {
      try {
        const result = await getDonationDetailCards(
          localStorage.getItem("accessToken")
        )
        setDonationDetailCards(result)
      } catch (error) {
        console.error("Error fetching user appointment history:", error)
      }
    }
    donationDetailInformation()
  }, [refreshPage])

  const deleteAppointment = async (event, id) => {
    setRefreshPage(false)
    event.preventDefault()
    const result = await deleteDonationDetailCard(
      localStorage.getItem("accessToken"),
      id
    )
    console.log(result)
    if (result === "OK") {
      setRefreshPage(true)
    } else {
      ;<Error />
    }
  }

  const handleSubmit = async (values) => {
    await addNewDonationDetailCard(localStorage.getItem("accessToken"), values)
    navigate("/login/adminPage")
  }
  return (
    <div className="edit-team">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="edit-team__form team-form">
          <p className="team-form__title">Додавання реквізиту</p>

          <div className="team-form__group">
            <label htmlFor="description" className="team-form__label">
              Назва реквізиту
            </label>
            <Field
              type="text"
              id="description"
              name="description"
              placeholder="Назва реквізиту"
              className="team-form__input"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="team-form__error"
            />
          </div>

          <div className="team-form__group">
            <label htmlFor="account" className="team-form__label">
              Номер реквізиту
            </label>
            <Field
              as="textarea"
              id="account"
              name="account"
              placeholder="Номер реквізиту"
              className="team-form__textarea"
            />
            <ErrorMessage
              name="account"
              component="div"
              className="team-form__error"
            />
          </div>

          <button type="submit" className="team-form__btn">
            Додати реквізит
          </button>
        </Form>
      </Formik>

      <div className="edit-team__cards-wrapper cards-container">
        <p className="cards-container__title">Список активних реквізитів:</p>
        {donationDetailCards.map((item, index) => (
          <div className="cards-container__card" key={index}>
            <p className="cards-container__card-text">{item.description}</p>
            <p className="cards-container__card-text">{item.account}</p>
            <button
              className="cards-container__card-btn"
              onClick={(event) => deleteAppointment(event, item._id)}
            >
              Видалити
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EditDonationDetails
