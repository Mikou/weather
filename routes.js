const utils = require('./utils');

module.exports = app => {
  app.get(`/api/weather/:city`, (req, res) => {
    utils.getWeather(req.params.city).then(
      result => res.send(result)
    );
  });

  app.get('/', (req, res) => {
    const city = req.query.city || 'copenhagen';
    utils.getWeather(city).then(result => {
      res.render('index', { data:result });
    })
  });

};
