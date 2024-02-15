import mongoose from "mongoose"
import OurTeam from "../models/ourTeam.js"

const addOne = async (req, res) => {
  const { photoUrl, title, position, text } = req.body
  const ourTeam = await OurTeam.create({
    photoUrl,
    title,
    position,
    text,
  })
  res.json(ourTeam)
}

const getAll = async (req, res) => {
  const ourTeam = await OurTeam.find()
  res.json(ourTeam)
}

const deleteOne = async (req, res) => {
  const { ourTeamId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(ourTeamId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  try {
    await OurTeam.deleteOne({ _id: ourTeamId })
    res.sendStatus(200)
  } catch {
    res.sendStatus(500)
  }
}

export default { addOne, getAll, deleteOne }
