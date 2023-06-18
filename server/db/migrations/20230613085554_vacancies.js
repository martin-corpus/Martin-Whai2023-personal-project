exports.up = (knex) => {
  return knex.schema.createTable('vacancies', (table) => {
    table.increments('id').primary()
    table.integer('companyId')
    table.string('position')
    table.string('salary')
    table.string('jobDescription')
    table.string('requirements')
    table.string('deadline')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('vacancies')
}
