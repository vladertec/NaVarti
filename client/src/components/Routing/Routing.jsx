import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../../views/Home/Home"
import Error from "../../views/Error/Error"
import Login from "../../views/Login/Login"
import AdminPage from "../../views/AdminPage/AdminPage"
import Question from "../Question/Question"
import Registration from "../../views/Registration/Registration"
import EditOurTeam from "../../views/EditOurTeam/EditOurTeam"

function Routing() {
  const isAdminLoggedIn = localStorage.getItem("accessToken")

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
   
      <Route
        path="/login/adminPage"
        element={isAdminLoggedIn ? <AdminPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/login/adminPage/ourTeam"
        element={isAdminLoggedIn ? <EditOurTeam /> : <Navigate to="/login" />}
      />
      {/* <Route path="/login/adminPage/currentReport" element={isAdminLoggedIn ? <CurrentReport /> : <Navigate to="/login" />} />
    <Route path="/login/adminPage/makeRequest" element={isAdminLoggedIn ? <EditMakeRequest /> : <Navigate to="/login" />} /> */}
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Routing
