import axios from "axios"

export const getDonationDetailCards = async (token) => {
  try {
    const { data } = await axios.get(`/api/donationDetails`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const addNewDonationDetailCard = async (token, donationDetail) => {
  try {
    const { data } = await axios.post("/api/donationDetail", donationDetail, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
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

export const deleteDonationDetailCard = async (token, id) => {
  try {
    const { data } = await axios.delete(`/api/donationDetail/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}
