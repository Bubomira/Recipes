const router = require('express').Router();

const userRouter = require('./controlls/userControlls');
const recipeRouter = require('./controlls/recipeControlls');

router.use('/user',userRouter)
router.use('/recipe',recipeRouter)

module.exports  =router;