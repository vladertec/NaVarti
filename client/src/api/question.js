import axios from "axios"

export const getQuestionCards = async () => {
  try {
    const { data } = await axios.get(`/api/questions`)
    return data
  } catch (err) {
    return err
  }
}

export const addNewQuestionCard = async (question) => {
  try {
    const { data } = await axios.post("/api/question", question)
    return data
  } catch (err) {
    return err
  }
}

export const updateQuestionCard = async (question, id) => {
  try {
    const { data } = await axios.put(`/api/question/${id}`, question)
    return data
  } catch (err) {
    return err
  }
}

export const deleteQuestionCard = async (id) => {
  try {
    const { data } = await axios.delete(`/api/question/${id}`)
    return data
  } catch (err) {
    return err
  }
}
