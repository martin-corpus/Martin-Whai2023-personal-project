exports.up = (knex) => {
  return knex.schema.createTable('applications', (table) => {
    table.increments('id').primary()
    table.integer('vacancyId')
    table.string('name')
    table.string('email')
    table.string('companyName')
    table.binary('companyImage')
    table.binary('coverLetter')
    table.binary('cv')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('applications')
}
