const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

/**
 * App Routes 
*/
router.get('/', mainController.homepage);
router.get('/about', mainController.aboutPage);
router.get('/contact', mainController.contactPage)
router.get('/project', mainController.showProjects);

module.exports = router;