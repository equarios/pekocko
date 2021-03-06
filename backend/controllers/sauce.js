//creating controller for sauces adding update delete modify and matching data with database

const Sauce = require('../models/Sauce');
const fs = require('fs');

exports.createSauce = (req,res,next) => {
    const sauceObjet = JSON.parse(req.body.sauce);
    delete sauceObjet._id;
    const sauce = new Sauce({
        ...sauceObjet,
        likes: 0,
        dislikes: 0,
        usersLiked: [],
        usersDisliked: [],
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    if(!req.body.errorMessage) {
        sauce.save()
        .then(() => { 
            res.status(201).json({ message: 'sausce is created' }); 
        })
        .catch(error => { 
            if(error.message.indexOf("name needs to be uniq")>0) {
                req.body.errorMessage = "sauce name already exists";
            }
            next();
        })
    } else {
        next();
    }
};

exports.getAllSauces = (req,res,next) => {
    Sauce.find()
    .then(sauces => {
        res.status(200).json(sauces);
    })
    .catch(error => {
        res.status(400).json({ message: error });
    });
};

exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({_id: req.params.id})
    .then(sauce => {
        res.status(200).json(sauce);
    })
    .catch( error => {
        res.status(404).json({ error: error });
    });
};

exports.modifyOneSauce = (req, res, next) => {
    const sauceObject = req.file ?
    {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    if(!req.body.errorMessage) {
        Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
        .then(() => {
            if(!req.file) {
                res.status(200).json({ message: "sausce have been modified"})
            } else {
                next();
            }
        })
        .catch(error => { 
            if(error.message.indexOf("exists sause")>0) {
                req.body.errorMessage = "sauce name already exists";
            }
            next();
        })
    } else {
        next();
    }
};

exports.deleteSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
    .then(sauce => {
        const filename = sauce.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
            Sauce.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'sauce has been deleted'}))
            .catch(error => res.status(400).json({ error }));
        });
      })
      .catch(error => res.status(500).json({ error }));
};

exports.likeOneSauce = (req, res, next) => {
    const sauceObjet = req.body.sauce;
    Sauce.updateOne({ _id: req.params.id },{$set: {
        likes: sauceObjet.likes,
        dislikes: sauceObjet.dislikes,
        usersDisliked: sauceObjet.usersDisliked,
        usersLiked: sauceObjet.usersLiked },
        _id: req.params.id
    })
    .then(() => res.status(200).json({ message: req.body.message}))
    .catch(error => res.status(400).json({ error: req.body.message }));
};