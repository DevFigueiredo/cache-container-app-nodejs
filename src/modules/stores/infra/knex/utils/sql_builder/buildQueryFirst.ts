import { Knex } from 'knex'

export function buildQueryFirst (query: Knex.QueryBuilder, ...fn: Array<(query: Knex.QueryBuilder) => Knex.QueryBuilder>): Knex.QueryBuilder {
  return fn.reduce((acc, cb) => cb(acc), query.first())
}
