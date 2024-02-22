import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Formik, Field, ErrorMessage, Form } from "formik"
import * as Yup from "yup"
import {
  addNewMakeRequestCard,
  deleteMakeRequestCard,
  getMakeRequestCards,
} from "../../api/makeRequest"
import Error from "../Error/Error"

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Введіть імʼя"),
  text: Yup.string().required("Введіть опис"),
  photoUrl: Yup.string().required("Введіть посилання на фото"),
  // .url("Введите коректне посилання"),
})

const initialValues = {
  photoUrl: "",
  title: "",
  text: "",
}

const EditMakeRequest = () => {
  const navigate = useNavigate()
  const [makeRequestCards, setMakeRequestCards] = useState([])
  const [refreshPage, setRefreshPage] = useState(false)

  useEffect(() => {
    const makeRequestCardsInformation = async () => {
      try {
        const result = await getMakeRequestCards(
          localStorage.getItem("accessToken")
        )
        setMakeRequestCards(result)
      } catch (error) {
        console.error("Error fetching user appointment history:", error)
      }
    }
    makeRequestCardsInformation()
  }, [refreshPage])

  const deleteAppointment = async (event, id) => {
    setRefreshPage(false)
    event.preventDefault()
    const result = await deleteMakeRequestCard(
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
    console.log(values)
    await addNewMakeRequestCard(localStorage.getItem("accessToken"), values)
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
          <p className="team-form__title">Додавання запиту</p>

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
              Назва запиту
            </label>
            <Field
              type="text"
              id="title"
              name="title"
              placeholder="Назва запиту"
              className="team-form__input"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="team-form__error"
            />
          </div>

          <div className="team-form__group">
            <label htmlFor="text" className="team-form__label">
              Опис запиту
            </label>
            <Field
              as="textarea"
              id="text"
              name="text"
              placeholder="Опис запиту"
              className="team-form__textarea"
            />
            <ErrorMessage
              name="text"
              component="div"
              className="team-form__error"
            />
          </div>

          <button type="submit" className="team-form__btn">
            Додати запит
          </button>
        </Form>
      </Formik>

      <div className="edit-information__cards-wrapper cards-container">
        <p className="cards-container__title">Список діючих запитів</p>
        {makeRequestCards.map((item, index) => (
          <div className="cards-container__card" key={index}>
            <h2 className="cards-container__card-text">{item.title}</h2>
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

export default EditMakeRequest
