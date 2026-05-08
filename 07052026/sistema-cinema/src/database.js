const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS sessao (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      horario TEXT,
      publico INTEGER DEFAULT 0,
      capacidade INTEGER
    )
  `);
});

module.exports = db;