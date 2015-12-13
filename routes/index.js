var express = require('express');
var router = express.Router();

var path = require('path');
var fs = require('fs');

var hash = "";
fs.readFile(path.join(__dirname, '..', '.git', 'refs', 'heads', 'master'), 'utf-8', function(error, data){
    if(error) throw error;
    hash = data.toString();
});

router.get('/', function(req, res, next){
    res.render('index', {
        title: 'Cesium beta',
        hash: hash
    });
});

module.exports = router;
