const {verifyToken}=require('../services/authServices')

module.exports = ()=>async(req,res,next)=>{
    const token  = req.headers['x-authorization']
    if(token){
        try{
            const decodedToken = await verifyToken(token);
            req.user = {
                _id:decodedToken._id,
                username:decodedToken.username,
                token
            }
        }catch(err){
            res.status(400).json({'message':'Invalid access token!'})
        }
    }

    next();
}