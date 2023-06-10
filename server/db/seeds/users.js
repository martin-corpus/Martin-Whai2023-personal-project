exports.seed = (knex) => {
    // Deletes ALL existing entries
    return knex('users')
      .del()
      .then(() => {
        // Inserts seed entries
        return knex('users').insert([
          {
            id: 1,
            name: 'John Doe',
            password: 'password123',
            email: 'john@example.com',
            image: '/images/users/john_doe.jpg',
          },
          {
            id: 2,
            name: 'Jane Smith',
            password: 'pass456',
            email: 'jane@example.com',
            image: '/images/users/jane_smith.webp',
          },
        ])
      })
  }