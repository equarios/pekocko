//middleware for users authorization file type by userid using jwt

const jsonWebToken = require('jsonwebtoken');

module.exports = (req,res,next) => {
    try { 
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jsonWebToken.verify(token,'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        if(req.body.userId&&req.body.userId!==userId) {
            throw "not a authentic file type";
        } else {
            next();
        }
    } catch {
        res.status(401).json({error: 'Invalid request'});
    }
}