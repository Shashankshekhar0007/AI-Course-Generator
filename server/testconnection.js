import sequelize from './db.js';

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connection to Supabase successful!');
  } catch (error) {
    console.error('❌ Unable to connect:', error);
  }
})();
