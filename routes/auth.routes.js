const express = require('express');
const {
	register,
	login,
	updateUser,
} = require('../controllers/auth.controller.js');

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/update-user').patch(updateUser);

module.exports = router;
