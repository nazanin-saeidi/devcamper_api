const express = require('express');
const router = express.Router();

const {
	getBootcamps,
	getBootcamp,
	createBootcamp,
	putBootcamp,
	deleteBootcamp,
} = require('../controllers/bootcamps');

router.route('/').get(getBootcamps).post(createBootcamp);
router.route('/:id').get(getBootcamp).put(putBootcamp).delete(deleteBootcamp);

module.exports = router;
