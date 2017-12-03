var express = require('express');
var router = express.Router();
var request = require('request-promise');
var moment = require('moment');

/* GET home page. */
router.get('/', function (req, res, next) {
    request.get({
        uri: 'http://ubuntugroup4.brazilsouth.cloudapp.azure.com:3000/events',
        json: true
    })
        .then(function (body) {
            res.render('events/list', {events: body, moment: moment});
        }).catch(function (err) {
        res.render('events/list', {events: [], moment: moment});
    });
});
router.get('/:id', function (req, res, next) {
    request.get({
        uri: 'http://ubuntugroup4.brazilsouth.cloudapp.azure.com:3000/event/' + req.params.id,
        json: true
    })
        .then(function (body) {
            res.render('events/event', {participants: body.participants, moment: moment});
        }).catch(function (err) {
        console.log(err);
        res.render('events/event', {participants: [], moment: moment});
    });
});

module.exports = router;
