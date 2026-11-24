require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,

  ssl: {
    rejectUnauthorized: false
  },

  connectionTimeoutMillis: 15000
});

pool.query("SELECT 1")
  .then(() => console.log("✅ Supabase conectado!"))
  .catch((err) =>
    console.error("❌ Erro Supabase:", err.message)
  );

module.exports = pool;
