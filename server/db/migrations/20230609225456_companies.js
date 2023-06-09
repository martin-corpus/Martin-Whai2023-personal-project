
exports.up = (knex) => {
    return knex.schema.createTable('companies', (table) => {
      table.increments('id').primary()
      table.binary('image')
      table.string('name')
      table.string('field')
      table.string('location')
      table.string('description')
      table.boolean('vacancies').defaultTo(false)
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('companies')
  }