// imported dependency

const express = require("express")
const mysql2 = require("mysql2")
const dotenv = require("dotenv")
const cors  = require("cors")
const cookieParser= require("cookie-parser")

//* imported routs

const tableRoute = require("./Routes/createTableR.js")
const Register = require("./Routes/RigesterR.js")
const emailCheck = require("./Routes/getEmailR.js")
const loginRoute = require("./Routes/LoginR.js")
const forPasswordChange = require("./Routes/ForNewPassword.js")
const ForConfirmOTPR = require("./Routes/ForConfirmOTPR.js")
const setNewPassWord = require("./Routes/SetNewPassWord.js")
const userProfileUpdate = require("./Routes/updateUserProfileR.js")
const DeleteRoute = require("./Routes/DeleteR.js")
const notification = require("./Routes/notificationR.js")
const forSingleNotfification = require("./Routes/notificationR.js")
const getStudentInformation= require("./Routes/getStudentInfoR.js")
const deleteNotification= require("./Routes/notificationR.js")
const phdFileUploadR = require("./Routes/phdFileUploadR.js")
const MtechFileUplaodR = require("./Routes/MtechFileUploadR.js")
const BtechFileUplaodR = require("./Routes/BtechFileUpladR.js")
const getAllEduDocR = require("./Routes/getAllEducationalR.js")
const goodsFileUploadR= require("./Routes/uploadGoodsR.js")
const goodsShowerR = require("./Routes/getAllGoodsR.js")
const phdPdfDawnloader = require("./Routes/phdPdfDawnloaderR.js")
const userProfile = require("./Routes/getProfileR.js")
const getYourSingleGoods = require("./Routes/uploadGoodsR.js")
const deleteGoods = require("./Routes/uploadGoodsR.js")
const adminRouter = require("./Routes/Admin.js")
const adminPhdDelete = require("./Routes/adminDeleteR.js")
const updateNotificationA = require("./Routes/adminUpdate.js")
const updateUserProfileAdmin = require("./Routes/updateUserInfoByAdmin.js")

//* initializing express
let app = express();
// initializing dotenv
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// * static for image
app.use(express.static("Resources/fileFromBtech/"));
app.use(express.static("Resources/fileFromMtech/"));
app.use(express.static("Resources/fileFromPhd/"));
app.use(express.static("Resources/goodsPicture/"));

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

//* connection info for database
let connectionInfo = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

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



module.exports = connectionInfo