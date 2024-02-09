import mongoose from "mongoose"

const roleSchema = new mongoose.Schema(
  {
    value: { type: String, unique: true, default: "user" },
  },
  { versionKey: false }
)

const Role = mongoose.model("role", roleSchema)

export default Role
