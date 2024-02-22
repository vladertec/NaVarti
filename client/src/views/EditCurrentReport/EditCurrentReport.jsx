import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Formik, Field, ErrorMessage, Form } from "formik"
import * as Yup from "yup"
import Error from "../Error/Error"
import {
  addNewCurrentReportCard,
  deleteCurrentReportCard,
  getCurrentReportCards,
} from "../../api/currentReport"

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Введіть назву звіту"),
  positionNumber: Yup.number().required("Введіть номер порядку карточки звіту"),
  text: Yup.string().required("Введіть опис звіту"),
  photoUrl: Yup.string().required("Введіть посилання на фото"),
  // .url("Введите коректне посилання"),
})

const initialValues = {
  photoUrl: "",
  title: "",
  positionNumber: "",
  text: "",
}

const EditCurrentReport = () => {
  const navigate = useNavigate()
  const [currentReportCards, setCurrentReportCards] = useState([])
  const [refreshPage, setRefreshPage] = useState(false)

  useEffect(() => {
    const currentReportCardsInformation = async () => {
      try {
        const result = await getCurrentReportCards(
          localStorage.getItem("accessToken")
        )
        setCurrentReportCards(result)
      } catch (error) {
        console.error("Error fetching user appointment history:", error)
      }
    }
    currentReportCardsInformation()
  }, [refreshPage])

  const deleteAppointment = async (event, id) => {
    setRefreshPage(false)
    event.preventDefault()
    const result = await deleteCurrentReportCard(
      localStorage.getItem("accessToken"),
      id
    )
    console.log(result)
    if (result === "OK") {
      setRefreshPage(true)
    } else {
      <Error />
    }
  }

  const handleSubmit = async (values) => {
    console.log(values)
    await addNewCurrentReportCard(localStorage.getItem("accessToken"), values)
    navigate("/login/adminPage")
  }
  return (
    <div className="edit-information">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="edit-information__form team-form">
          <p className="team-form__title">Додавання звітів</p>

          <div className="team-form__group">
            <label htmlFor="photoUrl" className="team-form__label">
              Посилання на фото
            </label>
            <Field
              type="text"
              id="photoUrl"
              name="photoUrl"
              placeholder="Посилання на фото"
              className="team-form__input"
            />
            <ErrorMessage
              name="photoUrl"
              component="div"
              className="team-form__error"
            />
          </div>

          <div className="team-form__group">
            <label htmlFor="title" className="team-form__label">
              Назва звіту
            </label>
            <Field
              type="text"
              id="title"
              name="title"
              placeholder="Назва звіту"
              className="team-form__input"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="team-form__error"
            />
          </div>

          <div className="team-form__group">
            <label htmlFor="positionNumber" className="team-form__label">
              Номер порядку карточки звіту
            </label>
            <Field
              type="text"
              id="positionNumber"
              name="positionNumber"
              placeholder="Номер карточки"
              className="team-form__input"
            />
            <ErrorMessage
              name="positionNumber"
              component="div"
              className="team-form__error"
            />
          </div>

          <div className="team-form__group">
            <label htmlFor="text" className="team-form__label">
              Опис звіту
            </label>
            <Field
              as="textarea"
              id="text"
              name="text"
              placeholder="Опис звіту"
              className="team-form__textarea"
            />
            <ErrorMessage
              name="text"
              component="div"
              className="team-form__error"
            />
          </div>

          <button type="submit" className="team-form__btn">
            Додати звіт
          </button>
        </Form>
      </Formik>

      <div className="edit-information__cards-wrapper cards-container">
        <p className="cards-container__title">Список діючих звітів</p>
        {currentReportCards.map((item, index) => (
          <div className="cards-container__card" key={index}>
            <h2 className="cards-container__card-text">
              {item.positionNumber}
            </h2>
            <p className="cards-container__card-text">{item.title}</p>
            <p className="cards-container__card-text">{item.text}</p>
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

export default EditCurrentReport
