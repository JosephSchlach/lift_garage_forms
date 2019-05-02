const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
console.log(req.body)
    let user_id = req.user.id
    job_name=req.body.job_name
    car_id=req.body.car_id
    console.log(user_id,job_name)

    const sqlText = `INSERT INTO "job" ("job_name", "user_id", "car_id") VALUES ($1, $2, $3) RETURNING id;`;

    pool.query(sqlText,
    [ job_name, user_id, car_id ]).then((result) => {

        res.send(result.rows[0]);
    }).catch((error) => {
        console.log(`ERROR in POST`, error);
        res.sendStatus(500);
    });
    });
router.get('/', (req, res)=>{
    console.log(req.query)
    const sqlGet = `SELECT "job"."`
})
    module.exports = router;