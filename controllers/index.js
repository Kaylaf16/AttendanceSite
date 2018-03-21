const express = require("express");
const router = express.Router();

router.use('/login', require('./login'));
router.use('/logout', require('./logout'));
router.use('/signup', require('./signup'));
router.use('/profile', require('./profile'));
module.exports=router;
