import axios from "axios"

export const getCurrentFeeCards = async (token) => {
  try {
    const { data } = await axios.get(`/api/currentFees`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const addNewCurrentFeeCard = async (token, currentFee) => {
  try {
    const { data } = await axios.post("/api/currentFee", currentFee, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
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

export const deleteCurrentFeeCard = async (token, id) => {
  try {
    const { data } = await axios.delete(`/api/currentFee/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}
