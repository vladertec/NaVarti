import mongoose from "mongoose"
import Gallery from "../models/gallery.js"

const addOne = async (req, res) => {
  const { photoUrl } = req.body
  const gallery = await Gallery.create({
    photoUrl,
  })
  res.json(gallery)
}

const getAll = async (req, res) => {
  const gallery = await Gallery.find()
  res.json(gallery)
}

const deleteOne = async (req, res) => {
  const { galleryId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(galleryId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  try {
    await Gallery.deleteOne({ _id: galleryId })
    res.sendStatus(200)
  } catch {
    res.sendStatus(500)
  }
}

export default { addOne, getAll, deleteOne }
