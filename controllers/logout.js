const passport = require('../middlewares/authentication');
const router = require('express').Router();

router.get('/', (req, res) => {
  req.session.destroy(function (err) {
      res.redirect('/login'); 
    });
});


module.exports = router;
