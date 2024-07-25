const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

require('dotenv').config();


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const query = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.execute(sql, params, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

const createUser = async (username, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    return query(sql, [username, email, hashedPassword]);
};

const findUserByEmail = async (email) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    const results = await query(sql, [email]);
    return results[0];
};

const findUserById = async (id) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    const results = await query(sql, [id]);
    return results[0];
};

module.exports = {
    createUser,
    findUserByEmail,
    findUserById
};
