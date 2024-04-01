import { integer, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core';

import { sql } from 'drizzle-orm';

export const userTable = sqliteTable('user', {
  id: text('id').notNull().primaryKey(),
  first_name: text('first_name'),
  last_name: text('last_name'),
  email: text('email').notNull().unique(),
  hashed_password: text('hashed_password').notNull(),
  created_at: integer('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updated_at: integer('updated_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  completedAt: integer('completed_at', {
    mode: 'timestamp',
  }),
  role: text('roles', { enum: ['User', 'Admin', 'Dev'] }).notNull().default('User'),
},
(user) => ({
    emailIdx: uniqueIndex('emailIdx').on(user.email),
  })
);

export const sessionTable = sqliteTable('session', {
  id: text('id').notNull().primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.id),
  expiresAt: integer('expires_at').notNull(),
});
