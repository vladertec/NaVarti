import mongoose from "mongoose"
import CurrentReport from "../models/currentReport.js"

const addOne = async (req, res) => {
  const { photoUrl, positionNumber, title, text } = req.body
  const currentReport = await CurrentReport.create({
    photoUrl,
    positionNumber,
    title,
    text,
  })
  res.json(currentReport)
}

const getAll = async (req, res) => {
  const currentReport = await CurrentReport.find()
  res.json(currentReport)
}

const deleteOne = async (req, res) => {
  const { currentReportId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(currentReportId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  try {
    await CurrentReport.deleteOne({ _id: currentReportId })
    res.sendStatus(200)
  } catch {
    res.sendStatus(500)
  }
}

export default { addOne, getAll, deleteOne }
