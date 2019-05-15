const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// matches with "/api/books"
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// matches with "/api/books/:id"
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;
