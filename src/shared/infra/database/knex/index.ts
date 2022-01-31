import knex from "knex";
export const connectKnexDatabase = knex({
    client: 'sqlite3',
    connection: {
      filename: './src/shared/infra/database/knex/dev.sqlite3'
    },
    useNullAsDefault: true
});
