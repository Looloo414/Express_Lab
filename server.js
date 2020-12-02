
const express = require('express')
const path = require('path')
const goalDb = require('./data/goal-db');

const app = express()   //create express app

// Configure the app (app.set)
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

// Mount middleware (app.use)


// Mount routes
app.get('/', function (req, res) {
  res.redirect('/goals')
})

// Define a "root" route directly on app
app.get('/', function (req, res) {
  res.redirect('/home')
  res.send('<h1>Alexas Goals</h1>');
});

app.get('/home', function (req, res) {
  res.render('home')
})

app.get('/goals', function (req, res) {
  res.render('goals/index', {
    goals: goalDb.getAll()
  });
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});


