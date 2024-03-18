import { Routes, Route } from "react-router-dom"
import Home from "../../views/Home/Home"
import Error from "../../views/Error/Error"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Routing
