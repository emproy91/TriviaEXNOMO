const { Router } = require('express')
const router = Router();

 const { renderForm, renderQuestion } = require('../controllers/quiz.controller');
 const { isAuthenticated } = require('../helpers/auth');

router.get('/quiz', isAuthenticated, renderForm );

router.get('/quiz/question', isAuthenticated, renderQuestion);




module.exports = router; //se exporta para usarse en server.js