import axios from "axios"

export const getMakeRequestCards = async () => {
  try {
    const { data } = await axios.get(`/api/makeRequests`)
    return data
  } catch (err) {
    return err
  }
}

export const addNewMakeRequestCard = async (makeRequest) => {
  try {
    const { data } = await axios.post("/api/makeRequest", makeRequest)
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

export const deleteMakeRequestCard = async (id) => {
  try {
    const { data } = await axios.delete(`/api/makeRequest/${id}`)
    return data
  } catch (err) {
    return err
  }
}
