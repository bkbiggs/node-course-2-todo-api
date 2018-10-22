// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

// deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(( result )=> {
  //   console.log(result);
  // });

// deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(( result )=> {
  //   console.log(result);
  // });

// findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //     console.log(result);
  // });

  // db.collection('Users')
  // .findOneAndDelete({
  //   _id: new ObjectID('5bccdf85639233f6a6a6c8f9')
  // })
  // .then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users')
  // .deleteMany({name: 'Brian'})
  // .then ( (result) => {
  //   console.log(result);
  // });

  // db.close();
});
