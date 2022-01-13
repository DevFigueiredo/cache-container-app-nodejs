import { Knex } from 'knex'

export function addDelete<T> (
  object: T
): (query: Knex.QueryBuilder) => Knex.QueryBuilder {
  return (query: Knex.QueryBuilder): Knex.QueryBuilder => {
    return query.delete()
  }
}
