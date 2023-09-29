require('ts-node/register');

const config = {
  client: 'sqlite3',
  connection: {
    filename: ':memory:',
  },
  useNullAsDefault: false,
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
}

export { config }
