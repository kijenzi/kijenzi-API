const request = require('supertest');
const app = require('../app/app.js');

request(app)
.post('/uploadStaticFile')
.attach('gcode', __dirname + '/test1.gcode')
.expect(200)
.end(function(err, res) {
    if (err) throw err;
});
