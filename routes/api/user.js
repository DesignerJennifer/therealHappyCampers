const router = require("express").Router();
const userController = require("../../controllers/user_controller");

// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(userController.findById)

module.exports = router;
