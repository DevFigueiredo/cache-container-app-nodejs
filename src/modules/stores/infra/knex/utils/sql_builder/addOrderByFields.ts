import { Knex } from 'knex'

export function addOrderByFields (fields: any, order?: string): (query: Knex.QueryBuilder) => Knex.QueryBuilder {
  return (query: Knex.QueryBuilder): Knex.QueryBuilder => {
    if (fields?.length) {
      const _sortField = fields.split(',').length > 0 ? fields.split(',') : []
      const orderDirection = order && order === 'desc' ? order : 'asc'
      _sortField.forEach((field: string) => {
        void query.orderByRaw(`${field.replace(/\s/g, '')} ${orderDirection}`)
      })
    }
    return query
  }
}
