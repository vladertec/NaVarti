import React, { useEffect } from "react"
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
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/login/adminPage"
        element={<ProtectedRoute component={AdminPage} />}
      />
      <Route
        path="/login/adminPage/ourTeam"
        element={<ProtectedRoute component={EditOurTeam} />}
      />
      <Route
        path="/login/adminPage/question"
        element={<ProtectedRoute component={EditQuestion} />}
      />
      <Route
        path="/login/adminPage/donationDetails"
        element={<ProtectedRoute component={EditDonationDetails} />}
      />
      <Route
        path="/login/adminPage/currentReport"
        element={<ProtectedRoute component={EditCurrentReport} />}
      />
      <Route
        path="/login/adminPage/currentFee"
        element={<ProtectedRoute component={EditCurrentFee} />}
      />
      <Route
        path="/login/adminPage/transferredThings"
        element={<ProtectedRoute component={EditTransferredThings} />}
      />
      <Route
        path="/login/adminPage/makeRequest"
        element={<ProtectedRoute component={EditMakeRequest} />}
      />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

const ProtectedRoute = ({ component: Component }) => {
  const accessToken = localStorage.getItem("accessToken")
  return accessToken ? <Component /> : <Navigate to="/login" />
}

export default Routing
