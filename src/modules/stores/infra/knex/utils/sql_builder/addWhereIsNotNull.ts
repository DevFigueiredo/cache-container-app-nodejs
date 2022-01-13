import { Knex } from 'knex'

export function addWhereIsNotNull (field: string): (query: Knex.QueryBuilder) => Knex.QueryBuilder {
  return (query: Knex.QueryBuilder): Knex.QueryBuilder => {
    return query.whereNotNull(field)
  }
}
