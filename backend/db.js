// import {Pool} from 'pg';
// import dotenv from 'dotenv';
// dotenv.config();

// const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGCHANNELBINDIND} = process.env;

// export const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: { rejectUnauthorized: false }
// });

// db.js

import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;
const poolConfig = {
  connectionString,
  // If NODE_ENV isn't development, enable SSL for Neon
  ssl: process.env.NODE_ENV === 'development' ? false : { rejectUnauthorized: false }
};

const pool = new Pool(poolConfig);

pool.on('error', (err) => {
  console.error('Unexpected PG client error', err);
  process.exit(-1);
});

export default pool;
