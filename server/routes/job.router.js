const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    let user_id = req.user.id
    console.log(req.body.vinId)
    console.log(user_id)
    
    const sqlText = `INSERT INTO "job" ("user_id", "vehicle_id") VALUES ($1, $2);`;
    pool.query(sqlText,
    [ user_id, req.body.vinId])
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`ERROR in POST`, error);
        res.sendStatus(500);
    });
    });

    module.exports = router;