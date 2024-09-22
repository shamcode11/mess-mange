const db = require('./db');

const User = {
    create: (username, password, callback) => {
        db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, password], function(err) {
            callback(err, this.lastID);
        });
    },
    findByUsername: (username, callback) => {
        db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, row) => {
            callback(err, row);
        });
    }
};

module.exports = User;
