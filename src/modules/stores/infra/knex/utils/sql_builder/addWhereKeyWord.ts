import { Knex } from 'knex'

export function addWhereKeyWord (columnsNames: string[], valueKeyWord: string): (query: Knex.QueryBuilder) => Knex.QueryBuilder {
  return (query: Knex.QueryBuilder): Knex.QueryBuilder => {
    if (
      !columnsNames ||
            columnsNames.length === 0 ||
            valueKeyWord === '%' ||
            valueKeyWord === '%%' ||
            valueKeyWord === null ||
            valueKeyWord === undefined ||
            valueKeyWord === ''
    ) {
      return query
    }

    return query.andWhere(builder => {
      columnsNames.forEach(column => {
        void builder.orWhere(column, 'like', `%${valueKeyWord}%`)
      })
    })
  }
}
