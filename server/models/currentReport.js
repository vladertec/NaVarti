import mongoose from "mongoose"

const currentReportSchema = new mongoose.Schema(
  {
    positionNumber: Number,
    title: String,
    content: String,
    photoUrl: String,
  },
  { versionKey: false }
)
const CurrentReport = mongoose.model("currentReport", currentReportSchema)

export default CurrentReport
