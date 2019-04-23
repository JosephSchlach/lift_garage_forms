const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
 const sqlText = `SELECT "item"."id" AS "item_id", "item"."description",
    "item"."fixable", "item"."status","item"."user_id", "user"."username" FROM "item"
    JOIN "user" ON "user"."id" = "item"."user_id";`;

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
let item = req.body
console.log( item );
const sqlText = `INSERT INTO "item" ("description", "fixable", "status", "user_id") VALUES ($1, $2, $3, $4);`;
pool.query(sqlText,
[ item.description, item.fixable, item.status, item.user_id ]
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
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const sqlText = `DELETE FROM "item" WHERE "item"."id" = $1`;
    pool.query(sqlText, [id])
        .then(() => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('error deleting item:', error);
            res.sendStatus(500);
        })
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});

module.exports = router;