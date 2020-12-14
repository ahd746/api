const {
  index,
  show,
  create,
  update,
  destroy
} = require('../controllers/articles');
const passport = require('passport');

module.exports = router => {
  // localhost:4000/articles
  router.get('/articles', index);

  // localhost:4000/articles/12345
  router.get('/articles/:id', show);

  // localhost:4000/articles
  router.post('/articles', passport.authenticate('jwt', { session: false }), create);

  // localhost:4000/articles/update
  router.post('/articles/update', passport.authenticate('jwt', { session: false }), update);

  // localhost:4000/articles/destroy/12345
  //router.post('/articles/destroy/:id', passport.authenticate('jwt', { session: false }), destroy);
  router.post('/articles/destroy/:id', destroy);
};