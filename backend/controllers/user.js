const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken');
const User = require('../models/User');

exports.signup = (req,res,next) => { 
    bcrypt.hash(req.body.password,16)
    .then(hash => {
        const user = new User ({
            email: req.body.email,
            password: hash
        });
        user.save()
        .then(() => res.status(201).json({message: "account have been regestered"}))
        .catch(error => res.status(400).json({ error: error, message: "This is an existing email. Please try another one!" }))
    })
    .catch(error => res.status(500).json({message:error}));
};

exports.login = (req,res,next) => {
    User.findOne({email:req.body.email})
    .then(user => {
        if(!user) {
            return res.status(401).json({message:"can't find email"})
        }
        bcrypt.compare(req.body.password,user.password)
        .then(valid => {
            if(!valid) {
                return res.status(401).json({message:"incorrect password"})
            }
            return res.status(200).json({
                userId: user._id,
                token: jsonWebToken.sign(
                    { userId: user._id },
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '2400s' }
                )
            });
        })
        .catch(error => res.status(500).json({message:"error accour: "+error}));
    })
    .catch(error => res.status(500).json({message:"email not exists in database: "+error}));  
};