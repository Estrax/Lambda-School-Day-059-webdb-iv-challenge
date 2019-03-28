const router = require('express').Router();
const db = require('../database/helpers/helpers');

router.route('/')
    .get(async (req, res) => {
        await db.getDishes()
            .then(dishes => res.status(200).json(dishes))
            .catch(err => res.status(500).json({ error: "Dishes could not be retrieved."}));
    })
    .post(async (req, res) => {
        
    });

router.route('/:id')
    .get(async (req, res) => {
        
    })
    .put(async (req, res) => {
        
    })
    .delete(async (req, res) => {
        
    });

module.exports = router;