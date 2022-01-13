import { Knex } from 'knex'

export function addWhereIsNull (field: string): (query: Knex.QueryBuilder) => Knex.QueryBuilder {
  return (query: Knex.QueryBuilder): Knex.QueryBuilder => {
    return query.whereNull(field)
  }
}
