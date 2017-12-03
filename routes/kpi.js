var express = require('express');
var router = express.Router();
var request = require('request-promise');
var moment = require('moment');

router.get('/average-time', function (req, res, next) {
    res.render('kpi/average-time', {events: [], moment: moment});
});

router.get('/quantity', function (req, res, next) {
    res.render('kpi/quantity', {events: [], moment: moment});
});

router.get('/presence', function (req, res, next) {
    res.render('kpi/presence', {events: [], moment: moment});
});

router.get('/productivity', function (req, res, next) {
    res.render('kpi/productivity', {events: [], moment: moment});
});

module.exports = router;
