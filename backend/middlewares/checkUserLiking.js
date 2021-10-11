//middleware for checking user is authorised or not by using jwt token


const jsonWebToken = require('jsonwebtoken');

module.exports = (req,res,next) => {
    try { 
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jsonWebToken.verify(token,'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        if(req.body.sauce.userId!==userId) {
            next();
        } else {
            res.status(403).json({error: 'you are not allowed to like'});
        }
    } catch {
        res.status(400).json({error: new Error('Invalid request!')});
    }
}