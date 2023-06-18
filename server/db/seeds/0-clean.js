exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('companies')
    .del()
    .then(() => knex('users').del())
}
