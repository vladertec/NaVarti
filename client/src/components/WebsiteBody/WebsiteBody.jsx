import React, { useState, useEffect } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Routing from "../Routing/Routing"
import ScrollToTop from "react-scroll-to-top"

function WebsiteBody() {
  const [hideHeader, setHideHeader] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHideHeader(true)
      } else {
        setHideHeader(false)
      }
      lastScrollY = window.scrollY
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="website-body">
      <Header hidden={hideHeader} />
      <div className="website-body__content">
        <Routing />
      </div>
      <Footer />
      <ScrollToTop
        smooth
        style={{
          backgroundColor: "rgb(73, 155, 193)",
          borderRadius: "10px",
        }}
      />
    </div>
  )
}

export default WebsiteBody
