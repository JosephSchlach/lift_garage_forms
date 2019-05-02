const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    let prepurchase = req.body
    console.log( prepurchase );
    const sqlText = `INSERT INTO "prepurchase" ("date", "mileage", "urgent_repairs", "repairs_that_can_wait", "status", "job_id")
    VALUES ($1, $2, $3, $4, $5, $6);`;
    pool.query(sqlText,
    [ prepurchase.date, prepurchase.mileage, prepurchase.urgent_repairs, prepurchase.repairs_that_can_wait, prepurchase.status, prepurchase.job_id ]
    )
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`ERROR in POST`, error);
        res.sendStatus(500);
    });
    });


    module.exports = router;