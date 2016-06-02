//                    __________   NODE _____________


// var http = require('http'),
//  fs = require('fs');
//
// http.createServer(function(req, res) {
//
//   res.writeHead(200, {
//     'Content-Type': 'text/html',
//     'Access-Control-Allow-Origin' : '*'
// });
//
// var readStream = fs.createReadStream(__dirname + '/index.html');
//
//
//  readStream.pipe(res);
// }).listen(1337);
//
// console.log('Visit me at http://localhost:1337');



//           __________________ EXPRESS ___________________


var express = require('express'),
app  = express(),
path = require('path');

app.get('/', function(req, res) {
res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(1337);

var adminRouter = express.Router();
 adminRouter.get('/admin', function(req, res) {
   res.send('I am the dashboard!');
 });
 adminRouter.get('/users/:name', function(req, res) {
   res.send('Hello ' + req.params.name + ' !');
 });
 adminRouter.get('/posts', function(req, res) {
   res.send('I show all the posts!');
 });

 app.use('/admin', adminRouter);

console.log('1337 is the magic port!');