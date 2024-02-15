import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../../views/Home/Home"
import Error from "../../views/Error/Error"
import Login from "../../views/Login/Login"
import AdminPage from "../../views/AdminPage/AdminPage"
import Question from "../Question/Question"
import Registration from "../../views/Registration/Registration"

function Routing() {
  const isAdminLoggedIn = localStorage.getItem("adminToken")

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      {isAdminLoggedIn ? (
        <Route path="/login/adminPage" element={<AdminPage />}>
          {/* <Route path="currentFee" element={<CurrentFee />} />
          <Route path="ourTeam" element={<OurTeam />} />
          <Route path="currentReport" element={<CurrentReport />} />
          <Route path="makeRequest" element={<MakeRequest />} />
          <Route path="transferredThings" element={<TransferredThings />} />
          <Route path="donationDetails" element={<DonationDetails />} />
          <Route path="gallery" element={<Gallery />} /> */}
          <Route path="question" element={<Question />} />
        </Route>
      ) : (
        <Route path="/login" element={<Navigate to="/login" />} />
      )}
    </Routes>
  )
}

export default Routing
