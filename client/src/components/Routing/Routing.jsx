import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../../views/Home/Home"
import Error from "../../views/Error/Error"
import Login from "../../views/Login/Login"
import AdminPage from "../../views/AdminPage/AdminPage"
import Registration from "../../views/Registration/Registration"
import EditOurTeam from "../../views/EditOurTeam/EditOurTeam"
import EditQuestion from "../../views/EditQuestion/EditQuestion"
import EditDonationDetails from "../../views/EditDonationDetails/EditDonationDetails"
import EditCurrentReport from "../../views/EditCurrentReport/EditCurrentReport"
import EditCurrentFee from "../../views/EditCurrentFee/EditCurrentFee"
import EditTransferredThings from "../../views/EditTransferredThings/EditTransferredThings"
import EditMakeRequest from "../../views/EditMakeRequest/EditMakeRequest"

const Routing = () => {
  const isAdminLoggedIn = localStorage.getItem("accessToken")

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route
        path="/login"
        element={
          isAdminLoggedIn ? <Navigate to="/login/adminPage" /> : <Login />
        }
      />
      {isAdminLoggedIn ? (
        <>
          <Route path="/login/adminPage" element={<AdminPage />} />
          <Route path="/login/adminPage/ourTeam" element={<EditOurTeam />} />
          <Route path="/login/adminPage/question" element={<EditQuestion />} />
          <Route
            path="/login/adminPage/donationDetails"
            element={<EditDonationDetails />}
          />
          <Route
            path="/login/adminPage/currentReport"
            element={<EditCurrentReport />}
          />
          <Route
            path="/login/adminPage/currentFee"
            element={<EditCurrentFee />}
          />
          <Route
            path="/login/adminPage/transferredThings"
            element={<EditTransferredThings />}
          />
          <Route
            path="/login/adminPage/makeRequest"
            element={<EditMakeRequest />}
          />
        </>
      ) : (
        <Navigate to="/login" />
      )}
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Routing
