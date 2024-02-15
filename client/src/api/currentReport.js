import axios from "axios"

export const getCurrentReportCards = async () => {
  try {
    const { data } = await axios.get(`/api/currentReports`)
    return data
  } catch (err) {
    return err
  }
}

export const addNewCurrentReportCard = async (currentReport) => {
  try {
    const { data } = await axios.post("/api/currentReport", currentReport)
    return data
  } catch (err) {
    return err
  }
}

export const updateCurrentReportCard = async (currentReport, id) => {
  try {
    const { data } = await axios.put(`/api/currentReport/${id}`, currentReport)
    return data
  } catch (err) {
    return err
  }
}

export const deleteCurrentReportCard = async (id) => {
  try {
    const { data } = await axios.delete(`/api/currentReport/${id}`)
    return data
  } catch (err) {
    return err
  }
}
