import { Knex } from 'knex'

export function addOrderBy (field: string, order?: string): (query: Knex.QueryBuilder) => Knex.QueryBuilder {
  return (query: Knex.QueryBuilder): Knex.QueryBuilder => {
    const orderDirection = order && order === 'desc' ? order : 'asc'
    if (!field) {
      return query
    }
    return query.orderBy(field, orderDirection)
  }
}
