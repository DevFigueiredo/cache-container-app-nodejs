import { Knex } from 'knex'

export function addWhere (
  field: string,
  value: string | boolean | Date,
  condition = '='
): (query: Knex.QueryBuilder) => Knex.QueryBuilder {
  return (query: Knex.QueryBuilder): Knex.QueryBuilder => {
    if (
      !field ||
            value === '%' ||
            value === '%%' ||
            value === null ||
            value === undefined ||
            value === '' ||
            value === '%undefined%'
    ) {
      return query
    }
    return query.andWhere(field, condition, value)
  }
}
