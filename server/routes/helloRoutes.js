const { getHelloWorld } = require('../services/hello');

module.exports = (app) => {
  app.get('/api/name', (req, res) => {
    try {
      res.send(getHelloWorld());
    } catch (err) {
      console.log('Error getting Hello World', err);
      res.sendStatus(500);
    }
  });
};
