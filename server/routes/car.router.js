const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// router.get('/', (req, res) => {
//  const sqlText = `SELECT "damage_notation"."id" AS "damage_form", "damage_notation"."description",
//     "damage_notation"."fixable", "damage_notation"."status","damage_notation"."user_id", "user"."username" FROM "damage_notation"
//     JOIN "user" ON "user"."id" = "damage_notation"."user_id";`;

// pool.query(sqlText)
//     .then(response => {
//         res.send(response.rows);
//     })
//     .catch(error => {
//         console.log('Something went wrong getting forms', error);
//     });
// });

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

    router.post('/job', (req, res) => {
        let job = req.body
        console.log( job );
        const sqlText = `INSERT INTO "job_id" ("vehicle_id", "tech_id") VALUES ($1, $2);`;
        pool.query(sqlText,
        [ job.vehicle_id, req.user.id ]
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