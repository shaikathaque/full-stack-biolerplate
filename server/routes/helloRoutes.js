const { getHelloWorld } = require('../services/hello');

module.exports = (app) => {
  app.get('/hello', (req, res) => {
    try {
      res.send(getHelloWorld());
    } catch (err) {
      console.log('Error getting Hello World', err);
      res.sendStatus(500);
    }
  });
};
