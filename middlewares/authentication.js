const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const models = require('../models');
const teachers = models.Teacher;

function passwordsMatch(passwordSubmitted, storedPassword) {
  return bcrypt.compareSync(passwordSubmitted, storedPassword);
}

passport.use(new LocalStrategy({
    usernameField: 'email',
  },
  (email, password, done) => {
    teachers.findOne({
      where: { email },
    }).then((teacher) => {

      if(!teacher) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (passwordsMatch(password, teacher.dataValues.password) === false) {
        console.log('\n\nerror\n\n')
        return done(null, false, { message: 'Incorrect password.' });
      }

      console.log('\nsuccess\n')
      return done(null, teacher, { message: 'Successfully Logged In!' });
    });
  })
);

passport.serializeUser((teacher, done) => {
  done(null, teacher.id);
});

passport.deserializeUser((id, done) => {
  teachers.findById(id).then((teacher) => {
    if (!teacher) {
      return done(null, false);
    }

    return done(null, teacher);
  });
});

passport.redirectIfLoggedIn = (route) =>
  (req, res, next) => (req.user ? res.redirect(route) : next());

passport.redirectIfNotLoggedIn = (route) =>
  (req, res, next) => (req.user ? next() : res.redirect(route));

module.exports = passport;
