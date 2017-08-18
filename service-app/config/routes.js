const KoaRouter = require('koa-router');

const User = require('../controllers/user');

let router = new KoaRouter({
  prefix: '/api'
});

// user
router.post('/signup', User.signup);

module.exports = router;
