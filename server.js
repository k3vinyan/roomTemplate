const app = require('./app');
require('dotenv').config({ path: 'secrets.env'});

app.set('port', process.env.PORT || 9001);
const server = app.listen(app.get('port'), ()=> {
  console.log(`Listening on port: ${server.address().port}`);
});
