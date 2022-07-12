const router = require('express').Router();

const userRouter = require('./controlls/userControlls');
const recipeRouter = require('./controlls/recipeControlls');

const {getFirstThreeRecipies} = require('./services/recipeServices')

router.get('/',async(req,res)=>{
   res.json(await getFirstThreeRecipies)
})

router.use('/user',userRouter)
router.use('/recipe',recipeRouter)

module.exports  =router;