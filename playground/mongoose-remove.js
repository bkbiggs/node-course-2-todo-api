const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove

// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5bd07d93a83a25a0566148b4').then((todo) => {
  console.log(todo);
});
