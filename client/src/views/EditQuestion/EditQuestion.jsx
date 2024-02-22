import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Formik, Field, ErrorMessage, Form } from "formik"
import * as Yup from "yup"
import Error from "../Error/Error"
import {
  addNewQuestionCard,
  deleteQuestionCard,
  getQuestionCards,
} from "../../api/question"

const validationSchema = Yup.object().shape({
  question: Yup.string().required("Введіть питання"),
  answer: Yup.string().required("Введіть відповідь"),
})

const initialValues = {
  question: "",
  answer: "",
}

const EditOurTeam = () => {
  const navigate = useNavigate()
  const [questionCards, setQuestionCards] = useState([])
  const [refreshPage, setRefreshPage] = useState(false)

  useEffect(() => {
    const questionInformation = async () => {
      try {
        const result = await getQuestionCards(
          localStorage.getItem("accessToken")
        )
        setQuestionCards(result)
      } catch (error) {
        console.error("Error fetching user appointment history:", error)
      }
    }
    questionInformation()
  }, [refreshPage])

  const deleteAppointment = async (event, id) => {
    setRefreshPage(false)
    event.preventDefault()
    const result = await deleteQuestionCard(
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
    await addNewQuestionCard(localStorage.getItem("accessToken"), values)
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
          <p className="team-form__title">Додавання питання та відповіді</p>

          <div className="team-form__group">
            <label htmlFor="question" className="team-form__label">
              Питання:
            </label>
            <Field
              as="textarea"
              id="question"
              name="question"
              placeholder="Питання"
              className="team-form__textarea"
            />
            <ErrorMessage
              name="question"
              component="div"
              className="team-form__error"
            />
          </div>

          <div className="team-form__group">
            <label htmlFor="answer" className="team-form__label">
              Відповідь:
            </label>
            <Field
              as="textarea"
              id="answer"
              name="answer"
              placeholder="Відповідь"
              className="team-form__textarea"
            />
            <ErrorMessage
              name="answer"
              component="div"
              className="team-form__error"
            />
          </div>

          <button type="submit" className="team-form__btn">
            Додати питання
          </button>
        </Form>
      </Formik>

      <div className="edit-team__cards-wrapper cards-container">
        <p className="cards-container__title">
          Список діючих питань та відповідей:
        </p>
        {questionCards.map((item, index) => (
          <div className="cards-container__card" key={index}>
            <p className="cards-container__card-text">{item.question}</p>
            <p className="cards-container__card-text">{item.answer}</p>
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
