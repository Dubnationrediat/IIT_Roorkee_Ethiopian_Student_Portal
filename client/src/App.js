import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Login from "./Pages/LoginPage/Login.js";
import SignUp from "./Pages/SignupPage/SignUp.js";
import ForgotPassword from "./Pages/ForgotPasword/ForgotPassword.js";
import PageNotFound from "./Pages/PageNotFound/PageNotFound.js";
import ForNewPassword from "./Pages/NewPassword/NewPassword.js";
import NewPassword from "./Pages/NewPassword/NewPassword.js"
import ToUploadForPhd from "./Pages/PhdSectionFileUpload/PhdSectionFileUpload.js";
import ToUploadForMtech from "./Pages/MtechSecitonFileUpload/MtechSecitonFileUpload.js";
import ToUploadForBTech from "./Pages/BtechSectionFileUpload/BtechSectionFileUpload.js";

import ToDisplayForBTech from "./Pages/BtechSectionFileDisplay/BtechSectionFileDisplay.js";
import ToDisplayForPhd from "./Pages/PhdSecitonFileDisplay/PhdSecitonFileDisplay.js";
import ToDisplayMtech from "./Pages/MtechSecitonFileDisplay/MtechSecitonFileDisplay.js";

import Contribution from "./Pages/Contribute/Contribute";
import HowItWorks from "./Pages/howItWorks/HowItWorks";

import BuyOrSell from "./Pages/Products/BuyOrSell.js";
import DashBord from "./Pages/dashBordComponents/DashBoard.js";
import UpdateUserProfile from "./Pages/updateProfile/UpdateUserProfile.js";
import DeleteUserPage from "./Pages/DeleteUserProfile/DeletePage.js";
import UplaodNotifcations from "./Pages/UploadNotifications/UplaodNotifcations";
import StudentInfo from "./Pages/StudentInfo/StudentInfo";
import SellingGoods from "./Pages/uplaodSellGoods/UploadSellGoods.js";
import YemishetuCollection from "./Pages/EkaZirzir/YemishetuCollection.jsx";
import Otp from "./Pages/OTP/Otp";
import PotectRoute from "./components/Protect/PotectRoute";
import { axiosInstance } from "./Utility/axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./components/Redux/Reducers/authSlice";
function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getUser());
  }, []);
  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/home" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />

          <Route exact path="/contribution" element={<Contribution />} />
          <Route exact path="/howitworks" element={<HowItWorks />} />
          <Route exact path="/forgotPass" element={<ForgotPassword />} />
          <Route exact path="/forgotPass/:email" element={<Otp />} />
          <Route exact path="/ForNewPasswordOTP" element={<ForNewPassword />} />
          <Route exact path="/setNewPassword" element={<NewPassword />} />
          <Route
            exact
            path="/btechSectionUpload"
            element={
              <PotectRoute>
             
                <ToUploadForBTech />
              </PotectRoute>
            }
          />
          <Route
            exact
            path="/mtechSectioUpload"
            element={
              <PotectRoute>
                <ToUploadForMtech />
              </PotectRoute>
            }
          />
          <Route
            exact
            path="/phdSectionUpload"
            element={
              <PotectRoute>
                <ToUploadForPhd />
              </PotectRoute>
            }
          />
          <Route
            exact
            path="/btechSectionDisplay"
            element={
              <PotectRoute>
                <ToDisplayForBTech />
              </PotectRoute>
            }
          />
          <Route
            exact
            path="/mtechSectioDisplay"
            element={
              <PotectRoute>
                <ToDisplayMtech />
              </PotectRoute>
            }
          />
          <Route
            exact
            path="/phdSectionDisplay"
            element={
              <PotectRoute>
                <ToDisplayForPhd />
              </PotectRoute>
            }
          />
          <Route
            exact
            path="/buyorsell"
            element={
              <PotectRoute>
                <BuyOrSell />
              </PotectRoute>
            }
          />
          <Route
            exact
            path="/dashbord"
            element={
              <PotectRoute>
                <DashBord />
              </PotectRoute>
            }
          />
          <Route
            exact
            path="/updateProfile"
            element={
              <PotectRoute>
                <UpdateUserProfile />
              </PotectRoute>
            }
          />
          <Route
            exact
            path="/deleteProfile"
            element={
              <PotectRoute>
                <DeleteUserPage />
              </PotectRoute>
            }
          />
          <Route
            exact
            path="/uploadNotification"
            element={
              <PotectRoute>
                <UplaodNotifcations />
              </PotectRoute>
            }
          />
          <Route
            exact
            path="/studentInfo"
            element={
              <PotectRoute>
                <StudentInfo />
              </PotectRoute>
            }
          />
          <Route
            exact
            path="/buyGoods"
            element={
              <PotectRoute>
                <YemishetuCollection />
              </PotectRoute>
            }
          />
          <Route
            exact
            path="/sellGoods"
            element={
              <PotectRoute>
                <SellingGoods />
              </PotectRoute>
            }
          />
          <Route
            exact
            path="*"
            element={
              <PotectRoute>
                <PageNotFound />
              </PotectRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
