import mongoose from "mongoose"
import CurrentFee from "../models/currentFee.js"

const addOne = async (req, res) => {
  const { photoUrl, title, description } = req.body
  const currentFee = await CurrentFee.create({ photoUrl, title, description })
  res.json(currentFee)
}

const getAll = async (req, res) => {
  const currentFee = await CurrentFee.find()
  res.json(currentFee)
}

const deleteOne = async (req, res) => {
  const { currentFeeId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(currentFeeId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  try {
    await CurrentFee.deleteOne({ _id: currentFeeId })
    res.sendStatus(200)
  } catch {
    res.sendStatus(500)
  }
}

export default { addOne, getAll, deleteOne }
