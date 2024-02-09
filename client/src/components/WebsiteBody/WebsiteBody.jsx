import React, { useState, useEffect } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Routing from "../Routing/Routing"
import ScrollUpButton from "react-scroll-up-button"

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
      <div
        className={`website-body__header ${
          hideHeader ? "website-body__header-hidden" : ""
        }`}
      >
        <Header />
      </div>
      <div>
        <Routing />
      </div>
      <div>
        <Footer className="website-body__footer" />
      </div>
      <ScrollUpButton />
    </div>
  )
}

export default WebsiteBody
