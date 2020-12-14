module.exports = router => {
  require('./routes/users')(router);
  require('./routes/sessions')(router);
  require('./routes/articles')(router);
  return router;
};