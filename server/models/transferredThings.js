import mongoose from "mongoose"

const transferredThingsSchema = new mongoose.Schema(
  {
    name: String,
    quantity: Number,
  },
  { versionKey: false }
)
const TransferredThings = mongoose.model(
  "transferredThings",
  transferredThingsSchema
)

export default TransferredThings
