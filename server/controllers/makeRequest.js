import mongoose from "mongoose"
import MakeRequest from "../models/makeRequest.js"

const addOne = async (req, res) => {
  const { photoUrl, title, text } = req.body
  const makeRequest = await MakeRequest.create({
    photoUrl,
    title,
    text,
  })
  res.json(makeRequest)
}

const getAll = async (req, res) => {
  const makeRequest = await MakeRequest.find()
  res.json(makeRequest)
}

const deleteOne = async (req, res) => {
  const { makeRequestId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(makeRequestId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  try {
    await MakeRequest.deleteOne({ _id: makeRequestId })
    res.sendStatus(200)
  } catch {
    res.sendStatus(500)
  }
}

export default { addOne, getAll, deleteOne }
