var db = require('../../models');
var passport = require('../../config/passport');

module.exports = function (app) {
  app.post('/api/login', passport.authenticate('local'), function (req, res) {
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  app.post('/api/signup', function (req, res) {
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      camperFirstName: req.body.camperFirstName,
      camperLastName: req.body.camperLastName,
      birthday: req.body.birthday,
      grade: req.body.grade,

      saved: req.body.saved,
    })
      .then(function () {
        res.redirect(307, '/api/login');
      })
      .catch(function () {
        res.status(401).json(err);
      });
  });

  app.get('/logout', function (req, res) {
    req.logout();
    req.redirect('/');
  });

  app.get('/api/user_data', function (req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });
};
