import axios from "axios"

export const getCurrentFeeCards = async () => {
  try {
    const { data } = await axios.get(`/api/currentFees`)
    return data
  } catch (err) {
    return err
  }
}

export const addNewCurrentFeeCard = async (currentFee) => {
  try {
    const { data } = await axios.post("/api/currentFee", currentFee)
    return data
  } catch (err) {
    return err
  }
}

export const updateCurrentFeeCard = async (currentFee, id) => {
  try {
    const { data } = await axios.put(`/api/currentFee/${id}`, currentFee)
    return data
  } catch (err) {
    return err
  }
}

export const deleteCurrentFeeCard = async (id) => {
  try {
    const { data } = await axios.delete(`/api/currentFee/${id}`)
    return data
  } catch (err) {
    return err
  }
}
