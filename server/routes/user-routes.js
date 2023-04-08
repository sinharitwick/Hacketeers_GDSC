const express = require("express")
var myFunctions = require('../controllers/user-controller');

const router = express.Router();

router.get('/', myFunctions.getAllUsers);
router.post('/signup', myFunctions.signup);
router.post('/login', myFunctions.login);
router.get('/getuser/:id', myFunctions.getUserById);

module.exports = router;