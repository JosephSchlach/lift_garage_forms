const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

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


    start here!!