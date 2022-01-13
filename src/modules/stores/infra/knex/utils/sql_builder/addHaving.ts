import { Knex } from 'knex'

export function addHaving (
  field: string,
  value: number | boolean,
  condition = '='
): (query: Knex.QueryBuilder) => Knex.QueryBuilder {
  return (query: Knex.QueryBuilder): Knex.QueryBuilder => {
    if (!field || value === null || value === undefined || !value) {
      return query
    }

    return query.andHaving(field, condition, value)
  }
}
