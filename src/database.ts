import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
export const initDatabase = async () => {
const db = await open({
filename: './database.sqlite',
driver: sqlite3.Database,
});
await db.exec(`
CREATE TABLE IF NOT EXISTS users (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
cpf TEXT UNIQUE NOT NULL,
email TEXT UNIQUE NOT NULL,
password TEXT NOT NULL
);
`);
return db;
};