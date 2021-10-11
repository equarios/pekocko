//creating routes for sauce

const express = require('express');
const router = express.Router();
const sauceController = require('../controllers/sauce');

const auth = require('../middlewares/authentification');
const multer = require('../middlewares/multer-config');
const likingAlgo = require('../middlewares/likingSystem');
const getOldPicture = require('../middlewares/getOldPictureAfterUpdate');
const checkLike = require('../middlewares/checkUserLiking');
const checkCreateForm = require('../middlewares/checkingCreateSauceForm');
const deletePictureNoValidForm = require('../middlewares/deletePictureNoValidForm');

//used middleware for protecting data while posting, getting, putting, delete, data to sauce used auth,multer,

router.post('/', auth, multer, checkCreateForm, sauceController.createSauce, deletePictureNoValidForm);
router.get('/', auth, sauceController.getAllSauces);
router.get('/:id', auth, sauceController.getOneSauce);
router.post('/:id/like', auth, likingAlgo, sauceController.likeOneSauce);
router.put('/:id', auth, multer, getOldPicture, checkCreateForm, sauceController.modifyOneSauce, deletePictureNoValidForm);
router.delete('/:id', auth, sauceController.deleteSauce);


module.exports = router;

