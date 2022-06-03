import pg from 'pg';

export const pool = new pg.Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "todo_tutorial"
});
