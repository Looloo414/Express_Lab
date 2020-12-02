
const express = require('express')
const path = require('path')
const todoDb = require('./data/todo-db');

const app = express()   //create express app

// Configure the app (app.set)
app.set('view engine', 'ejs');›4›
app.set('views', path.join(__dirname, 'views'));
	
// Mount middleware (app.use)
	
	
// Mount routes
app.get('/', function(req, res) {
    res.redirect('/todos')
})

// Define a "root" route directly on app
app.get('/', function (req, res) {
    // res.redirect('/home')
    res.send('<h1>Hello Express!</h1>');
  });

  app.get('/home', function (req, res){
    res.render('home')
})

app.get('/todos', function(req, res) {
    res.render('todos/index', {
      todos: todoDb.getAll()
    });
  });
  
  // Tell the app to listen on port 3000
  // for HTTP requests from clients
  app.listen(3000, function () {
    console.log('Listening on port 3000');
  });


