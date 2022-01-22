import { Knex } from 'knex'

export function addDelete (
): (query: Knex.QueryBuilder) => Knex.QueryBuilder {
  return (query: Knex.QueryBuilder): Knex.QueryBuilder => {
    return query.delete()
  }
}
