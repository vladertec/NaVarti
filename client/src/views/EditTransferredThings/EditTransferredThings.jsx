import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Formik, Field, ErrorMessage, Form } from "formik"
import * as Yup from "yup"
import Error from "../Error/Error"
import {
  addNewTransferredThingCard,
  deleteTransferredThingCard,
  getTransferredThingCards,
} from "../../api/transferredThing"

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Введіть назву звіту"),
  quantity: Yup.number().required("Введіть номер порядку карточки звіту"),
})

const initialValues = {
  name: "",
  quantity: "",
}

const EditTransferredThings = () => {
  const navigate = useNavigate()
  const [transferredThingCards, setTransferredThingCards] = useState([])
  const [refreshPage, setRefreshPage] = useState(false)

  useEffect(() => {
    const transferredThingCardsInformation = async () => {
      try {
        const result = await getTransferredThingCards(
          localStorage.getItem("accessToken")
        )
        setTransferredThingCards(result)
      } catch (error) {
        console.error("Error fetching user appointment history:", error)
      }
    }
    transferredThingCardsInformation()
  }, [refreshPage])

  const deleteAppointment = async (event, id) => {
    setRefreshPage(false)
    event.preventDefault()
    const result = await deleteTransferredThingCard(
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
    await addNewTransferredThingCard(
      localStorage.getItem("accessToken"),
      values
    )
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
          <p className="team-form__title">Додавання переданих речей</p>

          <div className="team-form__group">
            <label htmlFor="name" className="team-form__label">
              Назва переданої речі
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Назва переданої речі"
              className="team-form__input"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="team-form__error"
            />
          </div>

          <div className="team-form__group">
            <label htmlFor="quantity" className="team-form__label">
              Кількість переданого
            </label>
            <Field
              type="text"
              id="quantity"
              name="quantity"
              placeholder="Кількість переданого"
              className="team-form__input"
            />
            <ErrorMessage
              name="quantity"
              component="div"
              className="team-form__error"
            />
          </div>

          <button type="submit" className="team-form__btn">
            Додати передану річ
          </button>
        </Form>
      </Formik>

      <div className="edit-information__cards-wrapper cards-container">
        <p className="cards-container__title">Список переданих речей</p>
        {transferredThingCards.map((item, index) => (
          <div className="cards-container__card" key={index}>
            <p className="cards-container__card-text">{item.name}</p>
            <p className="cards-container__card-text">{item.quantity}</p>
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

export default EditTransferredThings
