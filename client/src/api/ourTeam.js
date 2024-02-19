import axios from "axios"

export const getOurTeamCards = async (token) => {
  try {
    const { data } = await axios.get(`/api/ourTeams`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const addNewOurTeamCard = async (token, ourTeam) => {
  try {
    const { data } = await axios.post("/api/ourTeam", ourTeam, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const deleteOurTeamCard = async (token, id) => {
  try {
    const { data } = await axios.delete(`/api/ourTeam/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}
