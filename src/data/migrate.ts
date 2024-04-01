import { db } from '../auth'
import { migrate } from 'drizzle-orm/libsql/migrator';

migrate(db, { migrationsFolder: 'src/data/migrations' })
  .then(() => {
    console.log('Migrations completed!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Migrations failed!', err);
    process.exit(1);
  });
