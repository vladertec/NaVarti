import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    roles: [{ type: String, ref: "role" }],
  },
  { versionKey: false }
)

const User = mongoose.model("user", userSchema)

export default User
