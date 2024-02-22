import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Formik, Field, ErrorMessage, Form } from "formik"
import * as Yup from "yup"
import {
  addNewOurTeamCard,
  deleteOurTeamCard,
  getOurTeamCards,
} from "../../api/ourTeam"
import Error from "../Error/Error"

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Введіть імʼя"),
  position: Yup.string().required("Введіть посаду"),
  text: Yup.string().required("Введіть опис"),
  photoUrl: Yup.string().required("Введіть посилання на фото"),
  // .url("Введите коректне посилання"),
})

const initialValues = {
  photoUrl: "",
  title: "",
  position: "",
  text: "",
}

const EditOurTeam = () => {
  const navigate = useNavigate()
  const [teamCards, setTeamCards] = useState([])
  const [refreshPage, setRefreshPage] = useState(false)

  useEffect(() => {
    const teamCardsInformation = async () => {
      try {
        const result = await getOurTeamCards(
          localStorage.getItem("accessToken")
        )
        setTeamCards(result)
      } catch (error) {
        console.error("Error fetching user appointment history:", error)
      }
    }
    teamCardsInformation()
  }, [refreshPage])

  const deleteAppointment = async (event, id) => {
    setRefreshPage(false)
    event.preventDefault()
    const result = await deleteOurTeamCard(
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
    await addNewOurTeamCard(localStorage.getItem("accessToken"), values)
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
          <p className="team-form__title">Додавання учасників команди</p>

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
              ПІБ учасника
            </label>
            <Field
              type="text"
              id="title"
              name="title"
              placeholder="ПІБ учасника"
              className="team-form__input"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="team-form__error"
            />
          </div>

          <div className="team-form__group">
            <label htmlFor="position" className="team-form__label">
              Посада учасника
            </label>
            <Field
              type="text"
              id="position"
              name="position"
              placeholder="Посада учасника"
              className="team-form__input"
            />
            <ErrorMessage
              name="position"
              component="div"
              className="team-form__error"
            />
          </div>

          <div className="team-form__group">
            <label htmlFor="text" className="team-form__label">
              Опис учасника:
            </label>
            <Field
              as="textarea"
              id="text"
              name="text"
              placeholder="Опис учасника"
              className="team-form__textarea"
            />
            <ErrorMessage
              name="text"
              component="div"
              className="team-form__error"
            />
          </div>

          <button type="submit" className="team-form__btn">
            Додати учасника
          </button>
        </Form>
      </Formik>

      <div className="edit-team__cards-wrapper cards-container">
        <p className="cards-container__title">
          Список діючих учасників команди
        </p>
        {teamCards.map((item, index) => (
          <div className="cards-container__card" key={index}>
            <h2 className="cards-container__card-text">{item.title}</h2>
            <p className="cards-container__card-text">{item.position}</p>
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

export default EditOurTeam
