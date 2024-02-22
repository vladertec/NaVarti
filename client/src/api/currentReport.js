import axios from "axios"

export const getCurrentReportCards = async (token) => {
  try {
    const { data } = await axios.get(`/api/currentReports`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const addNewCurrentReportCard = async (token, currentReport) => {
  try {
    const { data } = await axios.post("/api/currentReport", currentReport, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const deleteCurrentReportCard = async (token, id) => {
  try {
    const { data } = await axios.delete(`/api/currentReport/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (err) {
    return err
  }
}
