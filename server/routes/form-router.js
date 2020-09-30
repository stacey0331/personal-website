const express = require('express');

const FormCtrl = require('../controllers/form-ctrl.js');

const router = express.Router();

router.post('/newResponse', FormCtrl.createResponse);
router.get('/responses', FormCtrl.getResponses);

module.exports = router;