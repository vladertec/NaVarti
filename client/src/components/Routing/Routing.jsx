import { Route, Routes } from "react-router-dom"
import Home from "../../views/Home/Home"
import Error from "../../views/Error/Error"
import Login from "../../views/Login/Login"
import AdminPage from "../../views/AdminPage/AdminPage"

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/adminPage" element={<AdminPage />} />
    </Routes>
  )
}

export default Routing
