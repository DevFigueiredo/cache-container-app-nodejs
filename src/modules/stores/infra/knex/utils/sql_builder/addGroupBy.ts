import { Knex } from 'knex'

export function addGroupBy (fields: string[]): (query: Knex.QueryBuilder) => Knex.QueryBuilder {
  return (query: Knex.QueryBuilder): Knex.QueryBuilder => {
    if (!fields) {
      return query
    }
    return query.groupBy(fields)
  }
}
