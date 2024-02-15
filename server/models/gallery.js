import mongoose from "mongoose"

const gallerySchema = new mongoose.Schema(
  {
    photoUrl: String,
  },
  { versionKey: false }
)
const Gallery = mongoose.model("gallery", gallerySchema)

export default Gallery
