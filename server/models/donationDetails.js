import mongoose from "mongoose"

const donationDetailsSchema = new mongoose.Schema(
  {
    description: String,
    account: String,
  },
  { versionKey: false }
)
const DonationDetails = mongoose.model("donationDetails", donationDetailsSchema)

export default DonationDetails
