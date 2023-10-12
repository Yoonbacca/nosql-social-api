const router = require("express").Router();
const {
  getAllThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController.js");

// GET/POST - /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// GET/PUT/DELETE - /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

// POST - /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

module.exports = router;
