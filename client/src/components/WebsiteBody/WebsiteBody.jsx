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
      <ScrollUp
        showUnder={160}
        easing="easeInOutQuint"
        duration={2000}
        style={{
          bottom: 60,
          right: 45,
        }}
      >
        <ArrowUpwardRoundedIcon className="website-body__scroll-top-icon" />
      </ScrollUp>
    </div>
  )
}

export default WebsiteBody
