import { Knex } from 'knex'

export function addUpdate<Object, TypeWhere> (
  object: Object,
  where: Partial<TypeWhere>
): (query: Knex.QueryBuilder) => Knex.QueryBuilder {
  return (query: Knex.QueryBuilder): Knex.QueryBuilder => {
    if (!where) { return query }

    return query.update(object)
  }
}
