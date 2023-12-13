const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: '154.0.169.111',
  user: 'leeclesd_local_usr',
  password: 'xo$G9&f3-#Vj',
  database: 'leeclesd_local'
});
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to the MySQL database!');
});
module.exports = connection;
