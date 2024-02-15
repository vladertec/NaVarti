import axios from "axios"

export const getDonationDetailCards = async () => {
  try {
    const { data } = await axios.get(`/api/donationDetails`)
    return data
  } catch (err) {
    return err
  }
}

export const addNewDonationDetailCard = async (donationDetail) => {
  try {
    const { data } = await axios.post("/api/donationDetail", donationDetail)
    return data
  } catch (err) {
    return err
  }
}

export const updateDonationDetailCard = async (donationDetail, id) => {
  try {
    const { data } = await axios.put(
      `/api/donationDetail/${id}`,
      donationDetail
    )
    return data
  } catch (err) {
    return err
  }
}

export const deleteDonationDetailCard = async (id) => {
  try {
    const { data } = await axios.delete(`/api/donationDetail/${id}`)
    return data
  } catch (err) {
    return err
  }
}
