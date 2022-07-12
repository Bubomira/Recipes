const router = require('express').Router();

const authRouter = require('./controlls/authControlls');
const recipeRouter = require('./controlls/recipeControlls');

router.use('/user',authRouter)
router.use('/recipe',recipeRouter)

module.exports  =router;