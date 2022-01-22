import knex from "knex";
export const connectDatabase = knex({
    client: 'sqlite3', // or 'better-sqlite3'
    connection: {
      filename: "./dev.sqlite3"
    },
    useNullAsDefault: true
});
