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
          field: 'Software Development and Engineering',
          location: 'North Island - North',
          description:
            'CodeCraft Solutions is a cutting-edge software development company specializing in crafting robust and scalable solutions for businesses. With their deep expertise in coding and programming languages, they deliver tailored software products that meet the unique needs of their clients.',
          vacancies: false,
        },
        {
          id: 2,
          image: '/images/companies/techgenius_software.png',
          name: 'TechGenius Software',
          field: 'Software Development and Engineering',
          location: 'South Island - South',
          description:
            'TechGenius Software is a dynamic software engineering firm known for their innovative approach and technical expertise. They excel in developing intuitive user interfaces, optimizing performance, and integrating advanced technologies to create seamless software solutions that drive business growth.',
          vacancies: false,
        },
        {
          id: 3,
          image: '/images/companies/bytemasters_development.png',
          name: 'ByteMasters Development',
          field: 'Software Development and Engineering',
          location: 'South Island - Central',
          description:
            'ByteMasters Development is a software engineering company that combines creativity and technical proficiency to deliver high-quality software products. Their skilled team of developers focuses on efficient coding practices and collaborates closely with clients to ensure the development process aligns with their business objectives.',
          vacancies: true,
        },
        {
          id: 4,
          image: '/images/companies/datasense_labs.png',
          name: 'DataSense Labs',
          field: 'Data Science and Analytics',
          location: 'South Island - Central',
          description:
            'DataSense Labs is a data science company that leverages advanced analytics and machine learning algorithms to extract valuable insights from complex data sets. Their expertise in statistical modeling and predictive analytics enables businesses to make data-driven decisions and gain a competitive edge in their respective industries.',
          vacancies: false,
        },
        {
          id: 5,
          image: '/images/companies/analytix_solutions.png',
          name: 'Analytix Solutions',
          field: 'Data Science and Analytics',
          location: 'North Island - South',
          description:
            'Analytix Solutions offers comprehensive data analytics services, helping organizations harness the power of data to drive growth and innovation. Their team of skilled data scientists and analysts excels in data visualization, predictive modeling, and data-driven strategy formulation, empowering businesses to unlock the full potential of their data assets.',
          vacancies: false,
        },
        {
          id: 6,
          image: '/images/companies/insightful_data_systems.png',
          name: 'Insightful Data Systems',
          field: 'Data Science and Analytics',
          location: 'South Island - North',
          description:
            'Insightful Data Systems specializes in developing robust data management systems and analytics platforms. With their expertise in data integration, data warehousing, and data governance, they enable organizations to centralize and analyze their data effectively, leading to enhanced business intelligence and informed decision-making.',
          vacancies: false,
        },
        {
          id: 7,
          image: '/images/companies/shieldguard_cybersecurity.png',
          name: 'ShieldGuard Cybersecurity',
          field: 'Cybersecurity',
          location: 'North Island - North',
          description:
            'ShieldGuard Cybersecurity provides top-notch cybersecurity solutions, ensuring that businesses digital assets and sensitive information are protected from cyber threats. Their comprehensive security strategies, advanced threat detection systems, and proactive incident response capabilities help businesses safeguard their networks, systems, and data from evolving cyber risks.',
          vacancies: false,
        },
        {
          id: 8,
          image: '/images/companies/cyberdefenders_inc.png',
          name: 'CyberDefenders Inc.',
          field: 'Cybersecurity',
          location: 'South Island - South',
          description:
            'CyberDefenders Inc. is a trusted cybersecurity firm that focuses on proactive defense measures and cutting-edge security technologies. They offer comprehensive vulnerability assessments, penetration testing, and security audits to identify potential vulnerabilities and implement robust security measures, providing businesses with peace of mind in an increasingly digital world.',
          vacancies: false,
        },
        {
          id: 9,
          image: '/images/companies/securenet_technologies.png',
          name: 'SecureNet Technologies',
          field: 'Cybersecurity',
          location: 'South Island - North',
          description:
            'SecureNet Technologies specializes in providing end-to-end cybersecurity solutions tailored to meet the unique needs of businesses. Their team of cybersecurity experts offers a range of services, including network security, data encryption, and secure cloud solutions, ensuring that businesses can operate securely in the face of ever-evolving cyber threats.',
          vacancies: true,
        },
        {
          id: 10,
          image: '/images/companies/netconnect_solutions.png',
          name: 'NetConnect Solutions',
          field: 'Network Engineering',
          location: 'North Island - South',
          description:
            'NetConnect Solutions is a network engineering company that designs and implements reliable and scalable network infrastructure solutions. Their team of skilled engineers ensures seamless connectivity, optimal performance, and enhanced network security, empowering businesses to efficiently communicate, collaborate, and access critical resources.',
          vacancies: false,
        },
        {
          id: 11,
          image: '/images/companies/linktech_networks.png',
          name: 'LinkTech Networks',
          field: 'Network Engineering',
          location: 'South Island - South',
          description:
            'LinkTech Networks is a trusted provider of networking solutions, delivering high-performance network architectures and robust connectivity options. Their expertise in network design, configuration, and optimization enables businesses to achieve seamless connectivity, efficient data transfer, and secure network operations.',
          vacancies: false,
        },
        {
          id: 12,
          image: '/images/companies/connectedge_systems.png',
          name: 'ConnectEdge Systems',
          field: 'Network Engineering',
          location: 'South Island - North',
          description:
            'ConnectEdge Systems specializes in comprehensive network engineering services, including network planning, implementation, and maintenance. With their deep knowledge of network protocols, hardware, and security, they ensure businesses have reliable, high-speed networks that support their day-to-day operations and future growth.',
          vacancies: false,
        },
        {
          id: 13,
          image: '/images/companies/cloudworks_technologies.png',
          name: 'CloudWorks Technologies',
          field: 'Cloud Computing',
          location: 'North Island - North',
          description:
            'CloudWorks Technologies is a leading provider of cloud computing solutions, helping businesses leverage the power of the cloud for enhanced scalability, flexibility, and cost-efficiency. Their expertise in cloud architecture, migration, and optimization enables businesses to embrace cloud technologies seamlessly and unlock the full potential of cloud computing.',
          vacancies: false,
        },
        {
          id: 14,
          image: '/images/companies/skynet_cloud_solutions.png',
          name: 'SkyNet Cloud Solutions',
          field: 'Cloud Computing',
          location: 'South Island - North',
          description:
            'SkyNet Cloud Solutions offers secure and reliable cloud computing services tailored to meet the evolving needs of businesses. Their expertise in cloud infrastructure management, data storage, and disaster recovery ensures that businesses can leverage the cloud to scale their operations, enhance data security, and achieve higher levels of efficiency.',
          vacancies: false,
        },
        {
          id: 15,
          image: '/images/companies/cloudsphere_innovations.png',
          name: 'CloudSphere Innovations',
          field: 'Cloud Computing',
          location: 'South Island - North',
          description:
            'CloudSphere Innovations specializes in providing innovative cloud solutions that enable businesses to streamline their operations and maximize their productivity. With their comprehensive suite of cloud services, including cloud migration, infrastructure optimization, and workload management, they empower businesses to harness the full potential of cloud computing and stay ahead in a competitive digital landscape.',
          vacancies: false,
        },
        {
          id: 16,
          image: '/images/companies/synapse_technologies.png',
          name: 'Synapse AI Technologies',
          field: 'Artificial Intelligence (AI) and Machine Learning (ML)',
          location: 'South Island - North',
          description:
            'Synapse AI Technologies is a leading provider of AI and ML solutions, driving innovation and automation across various industries. Their team of AI experts develops intelligent algorithms, machine learning models, and data-driven applications that enable businesses to extract valuable insights, automate processes, and make informed decisions.',
          vacancies: true,
        },
        {
          id: 17,
          image: '/images/companies/intelligenix_labs.png',
          name: 'IntelliGenix Labs',
          field: 'Artificial Intelligence (AI) and Machine Learning (ML)',
          location: 'North Island - South',
          description:
            'IntelliGenix Labs specializes in developing advanced AI and ML solutions that transform businesses data into actionable intelligence. Their expertise in natural language processing, computer vision, and predictive modeling empowers businesses to leverage AI-driven insights, optimize operations, and deliver personalized customer experiences.',
          vacancies: false,
        },
        {
          id: 18,
          image: '/images/companies/mindbot_solutions.png',
          name: 'MindBot Solutions',
          field: 'Artificial Intelligence (AI) and Machine Learning (ML)',
          location: 'South Island - Central',
          description:
            'MindBot Solutions is an AI and ML company that focuses on developing intelligent chatbot solutions and virtual assistants. Leveraging AI technologies, they create conversational interfaces that enhance customer engagement, automate customer support, and improve overall user experiences, enabling businesses to deliver personalized and efficient interactions.',
          vacancies: true,
        },
      ])
    })
}
