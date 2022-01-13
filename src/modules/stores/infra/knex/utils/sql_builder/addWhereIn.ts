import { Knex } from 'knex'

export function addWhereIn (field: string, values: string[]): (query: Knex.QueryBuilder) => Knex.QueryBuilder {
  return (query: Knex.QueryBuilder): Knex.QueryBuilder => {
    if (!field || !values || values.length === 0) {
      return query
    }
    if (!Array.isArray(values)) values = [values]

    return query.whereIn(field, values)
  }
}
