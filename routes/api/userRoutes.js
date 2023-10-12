const router = require("express").Router();
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// GET/POST - /api/users
router.route("/").get(getAllUsers).post(createUser);

// GET/PUT/DELETE - api/users/:userId
router.route("/:userId").get(getUser).delete(deleteUser).put(updateUser);

// POST/DELETE - /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
