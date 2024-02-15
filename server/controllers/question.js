import mongoose from "mongoose"
import Question from "../models/question.js"

const addOne = async (req, res) => {
  const { question, answer } = req.body
  const questionComponent = await Question.create({ question, answer })
  res.json(questionComponent)
}

const getAll = async (req, res) => {
  const questionComponent = await Question.find()
  res.json(questionComponent)
}

const deleteOne = async (req, res) => {
  const { questionId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(questionId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  try {
    await Question.deleteOne({ _id: questionId })
    res.sendStatus(200)
  } catch {
    res.sendStatus(500)
  }
}

export default { addOne, getAll, deleteOne }
