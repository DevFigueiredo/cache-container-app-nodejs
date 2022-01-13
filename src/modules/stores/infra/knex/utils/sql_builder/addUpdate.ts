import { Knex } from 'knex'

export function addUpdate<T> (
  object: T
): (query: Knex.QueryBuilder) => Knex.QueryBuilder {
  return (query: Knex.QueryBuilder): Knex.QueryBuilder => {
    return query.update(object)
  }
}
