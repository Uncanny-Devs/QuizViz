import pg, { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pgPool = pg.Pool;

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
PGPASSWORD = decodeURIComponent(PGPASSWORD ?? '');

const pool: Pool = new pgPool({
  user: PGUSER,
  host: PGHOST,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: 5432,
});

export default pool;