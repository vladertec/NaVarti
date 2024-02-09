import mongoose from "mongoose"

const questionSchema = new mongoose.Schema(
  {
    question: String,
    answer: String,
  },
  { versionKey: false }
)
const Question = mongoose.model("question", questionSchema)

export default Question
