const { connectionInfo } = require("../config");
const jwt = require("jsonwebtoken");

// *protect middleware : this middleware will run before all routing except signup and login
const protect = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  if (token) {
    //   let tokenRecieved = req.cookies?.token;
    let decodedEmail = jwt.verify(token, "IITadmin@524334");
    if (!decodedEmail?.email) {
      return res.json({
        successMessage: "Your Are Not Logged In",
        redirect: "/login",
        message: "click here to go to login page",
      });
    }
    let emailFinder = `SELECT * FROM userinfo WHERE user_email ="${decodedEmail.email}"`;
    connectionInfo.query(emailFinder, (err, result) => {
      if (err) {
        // console.log(err.message)
      } else {
        if (result.length === 0) {
          return res.json({
            successMessage: "Your Are Not Logged In",
            redirect: "/login",
            message: "click here to go to login page",
          });
        } else {
          req.user = result[0];
          next();
        }
      }
    });
  } else {
    return res.json({
      successMessage: "Your Are Not Logged In",
      redirect: "/login",
      message: "click here to go to login page",
    });
  }
};

// routes("/admin",protect, restrictTo([1]),manageControler)

// * restrictTo: will allow the access based on the user role
const restrictTo = (...roles) => {
  return (req, res, next) => {
    let role = req.user.role;
    if (roles.includes(role)) {
      next();
    } else {
      return res.json({
        successMessage: "Your Are Not Allowed To Access This Page",
        redirect: "/dashboard",
        message: "click here to go to Dash Board ",
      });
    }
  };
};

module.exports = { restrictTo, protect };
