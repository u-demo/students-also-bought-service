// require express
var express = require('express');
var app = express();
var morgan = require('morgan');
var db = require('../database/index.js');


var bodyParser = require('body-parser');
app.use(morgan('dev'));
app.use(bodyParser.json());


// send index.html when a GET request is sent to '/'
app.use(express.static('public'));



// GET method route
app.get('/Courses/:courseId/similarcourses', function (req, res) {
	console.log(req.params)
  db.arrayOfPurchasesForStudents(req.params.courseId, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
});


// POST method route
// app.post('/input', function (req, res) {

//   console.log('body', req.body);
//   db.inputNewCourses(req.body.name, req.body.average_rating, req.body.regular_price, req.body.sales_price, (err, results) => {
//     if (err) {
//       res.status(500).send(err, null);
//     } else {
//       res.status(201).send(null, results);
//     }
//   })
// })

app.listen(3004, () => { console.log('listening on port', 3004); });