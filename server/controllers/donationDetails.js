import mongoose from "mongoose"
import DonationDetails from "../models/donationDetails.js"

const addOne = async (req, res) => {
  const { description, account } = req.body
  const donationDetail = await DonationDetails.create({
    description,
    account,
  })
  res.json(donationDetail)
}

const getAll = async (req, res) => {
  const donationDetail = await DonationDetails.find()
  res.json(donationDetail)
}

const deleteOne = async (req, res) => {
  const { donationDetailId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(donationDetailId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  try {
    await DonationDetails.deleteOne({ _id: donationDetailId })
    res.sendStatus(200)
  } catch {
    res.sendStatus(500)
  }
}

export default { addOne, getAll, deleteOne }
