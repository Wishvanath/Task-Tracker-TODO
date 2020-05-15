// post_gress connection
const{Client} = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'testdemo',
    password: 'admin',
    port: 5432,
});
client.connect((err) => {
  if (err) {
    console.error('Database connection error', err.stack)
  } else {
    console.log("Database is connected");
  }
})
module.exports = {
  query: (text, params, callback) => {
    return client.query(text, params, callback)
  }
}

