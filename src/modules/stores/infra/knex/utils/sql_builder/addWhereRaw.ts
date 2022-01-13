import { Knex } from 'knex'

export function addWhereRaw (
  sqlField: string,
  value: string | boolean,
  condition = '='
): (query: Knex.QueryBuilder) => Knex.QueryBuilder {
  return (query: Knex.QueryBuilder): Knex.QueryBuilder => {
    if (
      !sqlField ||
            value === '%' ||
            value === '%%' ||
            value === null ||
            value === undefined ||
            value === '' ||
            value.toString().includes('undefined')
    ) {
      return query
    }

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return query.whereRaw(`${sqlField} ${condition} ${value}`)
  }
}
