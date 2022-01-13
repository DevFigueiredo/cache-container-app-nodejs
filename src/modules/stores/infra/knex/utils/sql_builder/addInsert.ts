import { Knex } from 'knex'

export function addInsert<T> (
  object: T
): (query: Knex.QueryBuilder) => Knex.QueryBuilder {
  return (query: Knex.QueryBuilder): Knex.QueryBuilder => {
    return query.insert(object)
  }
}
