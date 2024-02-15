import mongoose from "mongoose"

const ourTeamSchema = new mongoose.Schema(
  {
    photoUrl: String,
    title: String,
    position: String,
    text: String,
  },
  { versionKey: false }
)
const OurTeam = mongoose.model("ourTeam", ourTeamSchema)

export default OurTeam
