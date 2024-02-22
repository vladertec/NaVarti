import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Formik, Field, ErrorMessage, Form } from "formik"
import * as Yup from "yup"
import Error from "../Error/Error"
import {
  addNewCurrentFeeCard,
  deleteCurrentFeeCard,
  getCurrentFeeCards,
} from "../../api/currentFee"

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Введіть імʼя"),
  positionNumber: Yup.string().required("Введіть посаду"),
  description: Yup.string().required("Введіть опис"),
  photoUrl: Yup.string().required("Введіть посилання на фото"),
  // .url("Введите коректне посилання"),
})

const initialValues = {
  photoUrl: "",
  title: "",
  positionNumber: "",
  description: "",
}

const EditCurrentFee = () => {
  const navigate = useNavigate()
  const [currentFeeCards, setCurrentFeeCards] = useState([])
  const [refreshPage, setRefreshPage] = useState(false)

  useEffect(() => {
    const currentFeeCardsInformation = async () => {
      try {
        const result = await getCurrentFeeCards(
          localStorage.getItem("accessToken")
        )
        setCurrentFeeCards(result)
      } catch (error) {
        console.error("Error fetching user appointment history:", error)
      }
    }
    currentFeeCardsInformation()
  }, [refreshPage])

  const deleteAppointment = async (event, id) => {
    setRefreshPage(false)
    event.preventDefault()
    const result = await deleteCurrentFeeCard(
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
    await addNewCurrentFeeCard(localStorage.getItem("accessToken"), values)
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
          <p className="team-form__title">Додавання актуальних зборів</p>

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
              Назва збору
            </label>
            <Field
              type="text"
              id="title"
              name="title"
              placeholder="Назва збору"
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
              Номер порядку карточки збору
            </label>
            <Field
              type="text"
              id="positionNumber"
              name="positionNumber"
              placeholder="Номер порядку збору"
              className="team-form__input"
            />
            <ErrorMessage
              name="positionNumber"
              component="div"
              className="team-form__error"
            />
          </div>

          <div className="team-form__group">
            <label htmlFor="description" className="team-form__label">
              Опис збору
            </label>
            <Field
              as="textarea"
              id="description"
              name="description"
              placeholder="Опис збору"
              className="team-form__textarea"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="team-form__error"
            />
          </div>

          <button type="submit" className="team-form__btn">
            Додати збір
          </button>
        </Form>
      </Formik>

      <div className="edit-information__cards-wrapper cards-container">
        <p className="cards-container__title">Список діючих зборів</p>
        {currentFeeCards.map((item, index) => (
          <div className="cards-container__card" key={index}>
            <p className="cards-container__card-text">{item.positionNumber}</p>
            <h2 className="cards-container__card-text">{item.title}</h2>
            <p className="cards-container__card-text">{item.description}</p>
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

export default EditCurrentFee
