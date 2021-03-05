// Dependencies
// =============================================================
var db = require("../models");
const path = require("path");
const router = require("express").Router();
const expenseController = require("../controllers/expenseController");
const verifySignUp = require("../config/middleware/verifySignUp");
const authController = require("../controllers/auth.controller");

// API Routes
router
  .route("/api/expenses")
  .post(expenseController.add)
  .get(expenseController.findAll);

  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

router
  .route("/api/auth/signup")
  .post(
  [
    verifySignUp.checkDuplicateUsernameOrEmail
  ],
  authController.signup);

router
  .route("/api/auth/signin")
  .post(authController.signin);





// send react app
// we need to send the client the compiled index.html file
if (process.env.NODE_ENV === "production") {
    router.use(function (req, res) {
      res.sendFile(path.join(__dirname, "../client/build/index.html"))
    })
}
  
module.exports = router;