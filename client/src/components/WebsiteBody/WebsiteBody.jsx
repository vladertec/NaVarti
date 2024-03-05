import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Routing from "../Routing/Routing"
import ScrollUp from "react-scroll-up"
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded"

function WebsiteBody() {
  return (
    <div className="website-body">
      <Header />
      <div className="website-body__content">
        <Routing />
      </div>
      <Footer />
      <ScrollUp showUnder={160} className="website-body__scroll-top">
        <ArrowUpwardRoundedIcon className="website-body__scroll-top-icon" />
      </ScrollUp>
    </div>
  )
}

export default WebsiteBody
