import { Knex } from 'knex'

export function addPagination (offset?: number, pageSize?: number): (query: Knex.QueryBuilder) => Knex.QueryBuilder {
  return (query: Knex.QueryBuilder): Knex.QueryBuilder => {
    if (!pageSize || offset === null || offset === undefined || pageSize === null || pageSize === undefined) {
      return query
    }

    return query.offset(offset).limit(pageSize)
  }
}
