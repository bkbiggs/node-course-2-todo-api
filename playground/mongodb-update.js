// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bcdf371276258b4916b03bb')
  // }, {
  //   $set : {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // })
  // .then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bcbdf471cffdfef54064daa')
  }, {
    $set : {
      name: 'Brian',
    },
    $inc : {
      age: 1
    }
  }, {
    returnOriginal: false
  })
  .then((result) => {
    console.log(result);
  });


  // db.close();
});
