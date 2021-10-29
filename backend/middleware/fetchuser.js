const jwt = require('jsonwebtoken');
const JWTSECRET_KEY = 'philanthropyblockchainproject';

const fetchuser = (req,res,next) =>{
    const JWTtoken = req.header('auth-token');
    if(!JWTtoken)
    {
        return res.status(401).send('please autheticate using a valid token');

    }
    try{
        const data = jwt.verify(JWTtoken,JWTSECRET_KEY);
        req.user = data.user;
        next();
    } catch(err){
        console.error(err.message);
        return res.status(401).send('please autheticate using a valid token');
    }
}

module.exports = fetchuser;