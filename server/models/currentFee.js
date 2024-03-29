import mongoose from "mongoose"

const currentFeeSchema = new mongoose.Schema(
  {
    photoUrl: String,
    title: String,
    description: String,
    positionNumber: Number,
    link: String,
  },
  { versionKey: false }
)
const CurrentFee = mongoose.model("currentFee", currentFeeSchema)

export default CurrentFee
