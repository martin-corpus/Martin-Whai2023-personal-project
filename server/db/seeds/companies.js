exports.seed = (knex) => {
    // Deletes ALL existing entries
    return knex('companies')
      .del()
      .then(() => {
        // Inserts seed entries
        return knex('companies').insert([
          {
            id: 1,
            image: '/images/companies/codecraft_solutions.png', 
            name: 'CodeCraft Solutions',
            field: 'Software Development/Engineering',
            location: 'North Island - North',
            description: 'CodeCraft Solutions is a cutting-edge software development company specializing in crafting robust and scalable solutions for businesses. With their deep expertise in coding and programming languages, they deliver tailored software products that meet the unique needs of their clients.',
            vacancies: false,
          },
          {
            id: 2,
            image: '/images/companies/techgenius_software.png', 
            name: 'TechGenius Software',
            field: 'Software Development/Engineering',
            location: 'South Island - South',
            description: 'TechGenius Software is a dynamic software engineering firm known for their innovative approach and technical expertise. They excel in developing intuitive user interfaces, optimizing performance, and integrating advanced technologies to create seamless software solutions that drive business growth.',
            vacancies: false,
          },
          {
            id: 3,
            image: '/images/companies/bytemasters_development.png', 
            name: 'ByteMasters Development',
            field: 'Software Development/Engineering',
            location: 'South Island - Central',
            description: 'ByteMasters Development is a software engineering company that combines creativity and technical proficiency to deliver high-quality software products. Their skilled team of developers focuses on efficient coding practices and collaborates closely with clients to ensure the development process aligns with their business objectives.',
            vacancies: false,
          },
        ])
      })
  }