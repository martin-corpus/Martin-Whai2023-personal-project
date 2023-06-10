exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('password').notNullable()
      table.string('email').notNullable().unique()
      table.binary('image')
    })
}
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
}
  