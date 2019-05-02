const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    let checkout = req.body
    console.log( checkout );
    const sqlText = `INSERT INTO "checkout" ("date", "inspection_complete", "fluid_levels", "tires_torqued",
    "torque_spec", "hubcap_repaced", "lugnut_socket", "engine_cover", "final_mileage", "final_walkaround",
    "unnecessary_parts", "test_drive_notes", "ready_for_customer", "status", "job_id")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15);`;
    pool.query(sqlText,
    [ checkout.date, checkout.inspection_complete, checkout.fluid_levels, checkout.tires_torqued,
        checkout.torque_spec, checkout.hubcap_repaced, checkout.lugnut_socket, checkout.engine_cover,
        checkout.final_mileage, checkout.final_walkaround, checkout.unnecessary_parts, checkout.test_drive_notes, checkout.ready_for_customer, checkout.status, checkout.job_id ]
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
