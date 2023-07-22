// imported dependency

const express = require("express");
const mysql2 = require("mysql2");
const { connectionInfo } = require("./config");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//* imported routs

const tableRoute = require("./Routes/createTableR.js");
const Register = require("./Routes/RigesterR.js");
const emailCheck = require("./Routes/getEmailR.js");
const loginRoute = require("./Routes/LoginR.js");
const forPasswordChange = require("./Routes/ForNewPassword.js");
const ForConfirmOTPR = require("./Routes/ForConfirmOTPR.js");
const setNewPassWord = require("./Routes/SetNewPassWord.js");
const userProfileUpdate = require("./Routes/updateUserProfileR.js");
const DeleteRoute = require("./Routes/DeleteR.js");
const notification = require("./Routes/notificationR.js");
const forSingleNotfification = require("./Routes/notificationR.js");
const getStudentInformation = require("./Routes/getStudentInfoR.js");
const deleteNotification = require("./Routes/notificationR.js");
const phdFileUploadR = require("./Routes/phdFileUploadR.js");
const MtechFileUplaodR = require("./Routes/MtechFileUploadR.js");
const BtechFileUplaodR = require("./Routes/BtechFileUpladR.js");
const getAllEduDocR = require("./Routes/getAllEducationalR.js");
const goodsFileUploadR = require("./Routes/uploadGoodsR.js");
const goodsShowerR = require("./Routes/getAllGoodsR.js");
const phdPdfDawnloader = require("./Routes/phdPdfDawnloaderR.js");
const userProfile = require("./Routes/getProfileR.js");
const getYourSingleGoods = require("./Routes/uploadGoodsR.js");
const deleteGoods = require("./Routes/uploadGoodsR.js");
const adminRouter = require("./Routes/Admin.js");
const adminPhdDelete = require("./Routes/adminDeleteR.js");
const updateNotificationA = require("./Routes/adminUpdate.js");
const updateUserProfileAdmin = require("./Routes/updateUserInfoByAdmin.js");

//* initializing express
let app = express();
// initializing dotenv
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://ethiopiansatiitroorkee.com"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "POST, GET, PUT, DELETE, PATCH"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });
app.use(
  cors({
    origin: ["http://localhost:3000", "https://ethiopiansatiitroorkee.com"],
    // origin: "https://ethiopiansatiitroorkee.com",
    credentials: true,
  })
);
// * static for image
app.use(express.static("Resources/fileFromBtech/"));
app.use(express.static("Resources/fileFromMtech/"));
app.use(express.static("Resources/fileFromPhd/"));
app.use(express.static("Resources/goodsPicture/"));

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success !",
    message: "Welcome to Ethipian Students Student platform of IIT Roorkee",
  });
});

app.use("/user", setNewPassWord);
app.use("/user", userProfile);
app.use("/admin", tableRoute);
app.use("/admin", emailCheck);
app.use("/admin", adminRouter);
app.use("/admin", adminPhdDelete);
app.use("/user", Register);
app.use("/user", loginRoute);
app.use("/user", forPasswordChange);
app.use("/user", ForConfirmOTPR);
app.use("/user", userProfileUpdate);
app.use("/user", DeleteRoute);
app.use("/user", notification);
app.use("/user", forSingleNotfification);
app.use("/user", getStudentInformation);
app.use("/user", deleteNotification);
app.use("/user", phdFileUploadR);
app.use("/user", MtechFileUplaodR);
app.use("/user", BtechFileUplaodR);
app.use("/user", getAllEduDocR);
app.use("/user", goodsFileUploadR);
app.use("/user", goodsShowerR);
app.use("/user", phdPdfDawnloader);
app.use("/user", deleteGoods);
app.use("/user", getYourSingleGoods);
app.use("/admin", updateNotificationA);
app.use("/admin", updateUserProfileAdmin);

app.use((err, req, res, next) => {
  console.log("Something went wrong");
  res.send("Something Went wrong");
});

//* connection info for database

let port = process.env.PORT;
async function connectionHierarchy() {
  try {
    //* connection with database
    await connectionInfo.connect((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("successfully connected to database");
        //* server
        app.listen(port, () => {
          console.log(`server is listening to port ${port}`);
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
}

//* initializing function
connectionHierarchy();
