const { connectionInfo } = require("../config");
const jwt = require("jsonwebtoken");

let getUserProfile = (req, res) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    // let tokenFromFront = req.cookies.token;
    res.send({
      message: "Please LogIn First",
      redirect: "/login",
      redirectMessage: "Click here to Login",
    });
  } else {
    let { email, user_id } = jwt.verify(token, "IITadmin@524334");
    // console.log(user_id,email)
    let userProfile = `SELECT userInfo_ID,user_role, user_last_name,user_first_name,user_email_forProfile,user_Department,user_whatsapp_number,user_Indian_number,user_study_section,date_of_registration FROM userinfo WHERE userInfo_ID='${user_id}'`;
    connectionInfo.query(userProfile, (err, data, field) => {
      if (err) {
        // console.log(err);
      } else {
        res.json({
          data: data,
        });
      }
    });
  }
};

// export default getUserProfile;
module.exports = getUserProfile;
