import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Routing from "../Routing/Routing"
import ScrollToTop from "react-scroll-to-top"

function WebsiteBody() {
  return (
    <div className="website-body">
      <Header />
      <div className="website-body__content">
        <Routing />
      </div>
      <Footer />
      <ScrollToTop
        className="website-body__scroll-top"
        smooth
        style={{
          backgroundColor: "rgb(73, 155, 193)",
          borderRadius: "10px",
          width: "6vw",
          height: "7vh",
        }}
      />
    </div>
  )
}

export default WebsiteBody
