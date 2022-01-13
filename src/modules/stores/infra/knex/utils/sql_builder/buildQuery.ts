import { Knex } from 'knex'

export function buildQuery (query: Knex.QueryBuilder, ...fn: Array<(query: Knex.QueryBuilder) => Knex.QueryBuilder>): Knex.QueryBuilder {
  return fn.reduce((acc, cb) => cb(acc), query)
}
