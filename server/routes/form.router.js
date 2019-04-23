const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
 const sqlText = `SELECT "damage_notation"."id" AS "damage_form", "damage_notation"."description",
    "damage_notation"."fixable", "damage_notation"."status","damage_notation"."user_id", "user"."username" FROM "damage_notation"
    JOIN "user" ON "user"."id" = "damage_notation"."user_id";`;

pool.query(sqlText)
    .then(response => {
        res.send(response.rows);
    })
    .catch(error => {
        console.log('Something went wrong getting forms', error);
    });
});


/**
 * POST route template
 */
router.post('/', (req, res) => {
let damage_notation = req.body
console.log( damage_notation );
const sqlText = `INSERT INTO "damage_notation" ("description", "fixable", "status", "user_id") VALUES ($1, $2, $3, $4);`;
pool.query(sqlText,
[ damage_notation.description, damage_notation.fixable, damage_notation.status, damage_notation.user_id ]
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