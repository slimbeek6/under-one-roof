// Dependencies
// =============================================================
var db = require("../models");
const path = require("path");
const router = require("express").Router();

// API Routes
router.route("/route")
.get(controller.action);




// send react app
// we need to send the client the compiled index.html file
if (process.env.NODE_ENV === "production") {
    router.use(function (req, res) {
      res.sendFile(path.join(__dirname, "../client/build/index.html"))
    })
}
  
module.exports = router;