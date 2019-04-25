const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    let vehicle = req.body
    console.log( vehicle );
    const sqlText = `INSERT INTO "vehicle" ("vin", "year", "make", "model", "license_plate", "customer_name") VALUES ($1, $2, $3, $4, $5, $6);`;
    pool.query(sqlText,
    [ vehicle.vin, vehicle.year, vehicle.make, vehicle.model, vehicle.license_plate, vehicle.customer_name ]
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