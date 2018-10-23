const {ObjectID} = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    //console.log(req.body);
    var todo = new Todo({
      text: req.body.text
    });

    todo.save().then ((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/1234324

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;


  if (!ObjectID.isValid(id)) {
    res.status(404).send();
//    return console.log('ID not valid');
  }

  Todo.findById(id).then((todos) => {
    if (!todos) {
      return res.status(404).send();
//      return console.log('ID not found');
    }

    res.send({todos});
//    console.log('ID found!');
  }).catch((e) => {
    res.status(400).send();
//    console.log('ID request failed');
  });


});

app.listen(port, () => {
  console.log(`Started up on port ${port}`);
});

module.exports = {app};
