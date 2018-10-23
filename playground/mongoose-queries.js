const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5bce260b75da1d921efee974';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}
// Todo.find( {
//   _id: id
// }).then( (todos) => {
//   console.log('Todos find', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then( (todo) => {
//   console.log('Todo findOne', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

// Query the users collection.
User.findById(id).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log('User by Id', user);
}).catch((e) => console.log(e));
