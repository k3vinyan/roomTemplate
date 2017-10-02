const mongoose = require('mongoose');


const app = require('./app');
require('dotenv').config({ path: 'secrets.env'});

const mongoDB = process.env.DATABASE;
mongoose.connect(mongoDB, {
  useMongoClient: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.set('port', process.env.PORT || 9001);
const server = app.listen(app.get('port'), ()=> {
  console.log(`Listening on port: ${server.address().port}`);
});
