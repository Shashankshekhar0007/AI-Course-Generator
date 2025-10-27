// db.js
import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';

// Connect using the Supabase connection URL
const sequelize = new Sequelize(process.env.SUPABASE_DB_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Supabase requires SSL
    },
  },
  pool: { max: 10, min: 0, acquire: 30000, idle: 10000 },
});

export default sequelize;
