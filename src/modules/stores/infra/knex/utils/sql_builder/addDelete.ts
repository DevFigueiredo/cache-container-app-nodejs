
import { Knex } from 'knex'
import { Builder } from '../../../../../../shared/protocols/repositories/builder'

export function addDelete<TypeWhere> (
  objectBuilderWhere: Builder<TypeWhere>
): (query: Knex.QueryBuilder) => Knex.QueryBuilder {
  return (query: Knex.QueryBuilder): Knex.QueryBuilder => {
    void query.delete()

    if (!objectBuilderWhere.where) { return query }
    const keys = Object.keys(objectBuilderWhere.where)
    keys.forEach(key => {
      if (objectBuilderWhere.where) { void query.andWhere(key, '=', Reflect.get(objectBuilderWhere.where, key)) }
    })
    return query
  }
}
