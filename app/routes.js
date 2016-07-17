//var User = require('../app/models/user');
//var Question = require('../app/models/question');
//var Student = require('../app/models/student');



module.exports = function (app, passport) {
    app.get('/', function (req, res) {
        res.render('cv');
    });

};
