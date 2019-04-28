const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    let diagnosis_summary = req.body
    console.log( diagnosis_summary );
    const sqlText = `INSERT INTO "diagnosis_summary" ("date", "problem", "pcm_codes", "diag_performed", "findings", "status")
    VALUES ($1, $2, $3, $4, $5, $6);`;
    pool.query(sqlText,
    [ diagnosis_summary.date, diagnosis_summary.problem, diagnosis_summary.pcm_codes, diagnosis_summary.diag_performed,
        diagnosis_summary.findings, diagnosis_summary.status ]
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