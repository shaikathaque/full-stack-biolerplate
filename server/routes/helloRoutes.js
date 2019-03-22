const { getHelloWorld } = require('../services/hello');

module.exports = (app) => {
  app.get('/api/name/:name', (req, res) => {
    const { name } = req.params;
    if (!name) {
      res.send(400);
    }
    try {
      res.send(getHelloWorld(name));
    } catch (err) {
      console.log('Error getting Hello World', err);
      res.sendStatus(500);
    }
  });
};
