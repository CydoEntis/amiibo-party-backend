const express = require('express');

const {
	saveAmiibo,
	getAmiibos,
	updateAmiibo,
	getCollected,
	getWishlisted,
} = require('../controllers/amiibo.controller.js');

const router = express.Router();

router.route('/all').get(getAmiibos);
router.route('/collected').get(getCollected);
router.route('/wishlisted').get(getWishlisted);
router.route('/save').post(saveAmiibo);
router.route('/update').post(updateAmiibo);

module.exports = router;
