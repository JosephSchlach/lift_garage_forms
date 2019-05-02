const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
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

/**
 * POST route template
 */
router.post('/', (req, res) => {
let damage_notation = req.body
console.log( 'form:', damage_notation );
const sqlText = `INSERT INTO "damage_notation" ("date", "abs", "ac", "four_wheel_disc", "drive_type", "fuel_level", "drivable", "hubcaps", "dash_lights", "vehicle_damage_notes", "misc_notes", "status", "job_id")
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);`;
pool.query(sqlText,
[ damage_notation.date, damage_notation.abs, damage_notation.ac, damage_notation.four_wheel_disc,
    damage_notation.drive_type, damage_notation.fuel_level, damage_notation.drivable, damage_notation.hubcaps,
    damage_notation.dash_lights, damage_notation.vehicle_damage_notes, damage_notation.misc_notes, damage_notation.status, damage_notation.job_id]
)
.then((result) => {
    res.sendStatus(201);
})
.catch((error) => {
    console.log(`ERROR in POST`, error);
    res.sendStatus(500);
});
});


/**
 * Delete an damage_notation form if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const sqlText = `DELETE FROM "damage_notation" WHERE "damage_notation"."id" = $1`;
    pool.query(sqlText, [id])
        .then(() => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('error deleting form:', error);
            res.sendStatus(500);
        })
});


/**
 * Update an damage_notation form if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});

module.exports = router;