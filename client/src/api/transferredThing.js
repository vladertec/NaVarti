import axios from "axios"

export const getTransferredThingCards = async () => {
  try {
    const { data } = await axios.get(`/api/transferredThings`)
    return data
  } catch (err) {
    return err
  }
}

export const addNewTransferredThingCard = async (token, transferredThing) => {
  try {
    const { data } = await axios.post(
      "/api/transferredThing",
      transferredThing,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return data
  } catch (err) {
    return err
  }
}

export const deleteTransferredThingCard = async (token, id) => {
  try {
    const { data } = await axios.delete(`/api/transferredThing/${id}`,  {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}
