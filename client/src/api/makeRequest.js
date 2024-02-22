import axios from "axios"

export const getMakeRequestCards = async (token) => {
  try {
    const { data } = await axios.get(`/api/makeRequests`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const addNewMakeRequestCard = async (token, makeRequest) => {
  try {
    const { data } = await axios.post("/api/makeRequest", makeRequest, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const updateMakeRequestCard = async (makeRequest, id) => {
  try {
    const { data } = await axios.put(`/api/makeRequest/${id}`, makeRequest)
    return data
  } catch (err) {
    return err
  }
}

export const deleteMakeRequestCard = async (token, id) => {
  try {
    const { data } = await axios.delete(`/api/makeRequest/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}
