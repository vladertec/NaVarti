import mongoose from "mongoose"

const makeRequestSchema = new mongoose.Schema(
  {
    positionNumber: Number,
    title: String,
    text: String,
  },
  { versionKey: false }
)
const MakeRequest = mongoose.model("makeRequest", makeRequestSchema)

export default MakeRequest
