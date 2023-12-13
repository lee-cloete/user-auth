// pages/api/register.js
import mysql from 'mysql2/promise'; // Import mysql2 library

// Database configuration
const dbConfig = {
    host: '154.0.169.111',
    user: 'leeclesd_local_usr',
    password: 'xo$G9&f3-#Vj',
    database: 'leeclesd_local'
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const formData = req.body; // Get form data from the request

      // Establish a database connection
      const connection = await mysql.createConnection(dbConfig);

      // Insert user data into the database (replace with your table structure)
      const [result] = await connection.execute(
        'INSERT INTO users (username) VALUES (?)',
        [formData.username]
      );

      connection.end(); // Close the database connection

      // Respond with success message or data
      res.status(200).json({ message: 'Registration successful', insertedId: result.insertId });
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ message: 'Registration failed' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
