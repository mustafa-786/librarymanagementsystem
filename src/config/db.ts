import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  connectionLimit: 5,
});

try {
  pool
    .getConnection()
    .then(() => console.log("Db connected"))
    .catch((e) => console.log("something went wrong", e));
} catch (e) {
  console.log(e);
}

export default pool;
