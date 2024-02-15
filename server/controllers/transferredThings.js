import mongoose from "mongoose"
import TransferredThings from "../models/transferredThings.js"

const addOne = async (req, res) => {
  const { name, quantity } = req.body
  const transferredThing = await TransferredThings.create({ name, quantity })
  res.json(transferredThing)
}

const getAll = async (req, res) => {
  const transferredThing = await TransferredThings.find()
  res.json(transferredThing)
}

const deleteOne = async (req, res) => {
  const { transferredThingId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(transferredThingId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  try {
    await TransferredThings.deleteOne({ _id: transferredThingId })
    res.sendStatus(200)
  } catch {
    res.sendStatus(500)
  }
}

export default { addOne, getAll, deleteOne }
