const router = require('express').Router();
const ingredients = require('./ingredients');
const dishes = require('./dishes');
const recipes = require('./recipes');

router.use('/ingredients', ingredients);
router.use('/dishes', dishes);
router.use('/recipes', recipes);

module.exports = router;