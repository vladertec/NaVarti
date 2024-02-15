import axios from "axios"

export const getTransferredThingCards = async () => {
  try {
    const { data } = await axios.get(`/api/transferredThings`)
    return data
  } catch (err) {
    return err
  }
}

export const addNewTransferredThingCard = async (transferredThing) => {
  try {
    const { data } = await axios.post("/api/transferredThing", transferredThing)
    return data
  } catch (err) {
    return err
  }
}

export const updateTransferredThingCard = async (transferredThing, id) => {
  try {
    const { data } = await axios.put(
      `/api/transferredThing/${id}`,
      transferredThing
    )
    return data
  } catch (err) {
    return err
  }
}

export const deleteTransferredThingCard = async (id) => {
  try {
    const { data } = await axios.delete(`/api/transferredThing/${id}`)
    return data
  } catch (err) {
    return err
  }
}
