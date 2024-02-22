import mongoose from "mongoose"

const makeRequestSchema = new mongoose.Schema(
  {
    photoUrl: String,
    title: String,
    text: String,
  },
  { versionKey: false }
)
const MakeRequest = mongoose.model("makeRequest", makeRequestSchema)

export default MakeRequest
