import axios from "axios"

export const getOurTeamCards = async () => {
  try {
    const { data } = await axios.get(`/api/ourTeams`)
    return data
  } catch (err) {
    return err
  }
}

export const addNewOurTeamCard = async (ourTeam) => {
  try {
    const { data } = await axios.post("/api/ourTeam", ourTeam)
    return data
  } catch (err) {
    return err
  }
}

export const updateOurTeamCard = async (ourTeam, id) => {
  try {
    const { data } = await axios.put(`/api/ourTeam/${id}`, ourTeam)
    return data
  } catch (err) {
    return err
  }
}

export const deleteOurTeamCard = async (id) => {
  try {
    const { data } = await axios.delete(`/api/ourTeam/${id}`)
    return data
  } catch (err) {
    return err
  }
}
