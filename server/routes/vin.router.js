const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:vin', (req, res) => {
    let vin = req.params.vin;
    const sqlText = `SELECT * FROM "vehicle" WHERE "vehicle"."vin" = $1`;
     pool.query(sqlText, [vin])
       .then(response => {
           res.send(response.rows[0]);
       })
       .catch(error => {
           console.log('Something went wrong getting vehicle', error);
       });
   });

module.exports = router;