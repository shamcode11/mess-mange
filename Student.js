const db = require('./db');

const Student = {
    create: (studentId, name, callback) => {
        db.run(`INSERT INTO students (studentId, name) VALUES (?, ?)`, [studentId, name], function(err) {
            callback(err, this.lastID);
        });
    },
    findAll: (callback) => {
        db.all(`SELECT * FROM students`, [], (err, rows) => {
            callback(err, rows);
        });
    },
    findById: (id, callback) => {
        db.get(`SELECT * FROM students WHERE id = ?`, [id], (err, row) => {
            callback(err, row);
        });
    },
    updateFees: (id, fees, callback) => {
        db.run(`UPDATE students SET fees = ? WHERE id = ?`, [fees, id], function(err) {
            callback(err);
        });
    },
    addTransaction: (id, transaction, callback) => {
        db.get(`SELECT transactions FROM students WHERE id = ?`, [id], (err, row) => {
            const transactions = row.transactions ? JSON.parse(row.transactions) : [];
            transactions.push(transaction);
            db.run(`UPDATE students SET transactions = ? WHERE id = ?`, [JSON.stringify(transactions), id], callback);
        });
    }
};

module.exports = Student;
