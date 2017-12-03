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
            res.render('events', {events: body, moment: moment});
        }).catch(function (err) {
        res.render('events', {events: [], moment: moment});
    });


});

module.exports = router;
