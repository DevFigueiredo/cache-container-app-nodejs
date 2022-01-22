import { Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  return await knex.schema.createTable('stores', table => {
    table.string('id').primary().unique()
    table.string('name')
    table.string('officialName')
    table.string('socialName')
    table.string('type', 50)
    table.text('description')
    table.string('email')
    table.string('phoneNumber')
    table.string('website')
    table.string('openDate', 10)
    table.string('closeDate', 10)
    table.text('keywords')
    table.string('segment')
    table.string('cnpj')
    table.string('imageURL')
    table.dateTime('createdAt').defaultTo(knex.fn.now()).notNullable()
    table.dateTime('updatedAt').defaultTo(knex.fn.now()).notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
}
