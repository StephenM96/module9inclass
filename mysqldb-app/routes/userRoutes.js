const express = require("express")
const router = express.Router();
const Controllers = require("../controllers")

// matches GET requests sent to /api/users
// (the prefix from server.js)
// http://localhost:8081/api/users
// GET all users
router.get('/', (req, res) => {
    Controllers.userController.getUsers(res)
})

// http://localhost:8081/api/users/create
// POST to create a new user
router.post('/create', (req, res) => {
    Controllers.userController.createUser(req.body, res)
})

// http://localhost:8081/api/users/:id
// PUT updates user by ID
router.put('/:id', (req, res) => {
    Controllers.userController.updateUser(req, res)
})

// http://localhost:8081/api/users/:id
// DELETE destroys user by ID
router.delete('/:id', (req, res) => {
    Controllers.userController.deleteUser(req, res)
})

module.exports = router