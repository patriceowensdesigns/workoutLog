let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');
const Log = require('../db').import('../models/log');

router.get('/practice', validateSession, function(req, res)
{
    res.send ('Hey!! This is a practice route!')
});

router.post('/create', validateSession, (req, res) => {
    const logEntry = {
        description: req.body.log.description, 
        definition: req.body.log.definition,
        result: req.body.log.result, 
        owner_id: req.user.id
    }
    Log.create(logEntry)
    .then(log => res.status(200).json(log))
    .catch(err => res.status(500).json({error: err}))
});


module.exports = router;