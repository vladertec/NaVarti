import axios from "axios"

export const getQuestionCards = async (token) => {
  try {
    const { data } = await axios.get(`/api/questions`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const addNewQuestionCard = async (token, question) => {
  try {
    const { data } = await axios.post("/api/question", question, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const deleteQuestionCard = async (token, id) => {
  try {
    const { data } = await axios.delete(`/api/question/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}
