exports.seed = (knex) => {
    // Deletes ALL existing entries
    return knex('vacancies')
      .del()
      .then(() => {
        // Inserts seed entries
        return knex('vacancies').insert([
          {
            id: 1,
            companyId: 3,
            position: 'Software Engineer',
            salary: '$70,000 - $90,000 per year',
            jobDescription: 'ByteMasters Development is seeking a skilled Software Engineer to join our team. In this role, you will be responsible for developing high-quality software products, collaborating with clients to understand their requirements, and implementing efficient coding practices. We value creativity, technical proficiency, and a strong focus on delivering exceptional results.',
            requirements: `The ideal candidate should have the following qualifications and skills:\n
            - Bachelor's degree in Computer Science or related field\n
            - Proficiency in at least one programming language (e.g., Java, Python, C++)\n
            - Experience with software development methodologies and tools\n
            - Strong problem-solving and communication skills\n
            - Ability to work collaboratively in a team environment`,
            deadline: 'August 31, 2023',
          },
          {
            id: 2,
            companyId: 9,
            position: 'Cybersecurity Analyst',
            salary: '$80,000 - $100,000 per year',
            jobDescription: 'SecureNet Technologies is seeking a highly skilled Cybersecurity Analyst to join our team. In this role, you will be responsible for analyzing and identifying potential cybersecurity risks, implementing effective security measures, and ensuring the protection of our clients sensitive information. You will work closely with our clients to understand their security needs and develop customized solutions to mitigate risks and enhance overall cybersecurity posture.',
            requirements: `
            - Bachelor's degree in Computer Science, Cybersecurity, or a related field\n
            - Proven experience in cybersecurity analysis and risk assessment\n
            - In-depth knowledge of cybersecurity frameworks and best practices\n
            - Familiarity with security tools and technologies (e.g., SIEM, IDS/IPS, firewalls)\n
            - Strong problem-solving and analytical skills\n
            - Excellent communication and collaboration abilities`,
            deadline: 'August 15, 2023',
          },
          {
            id: 3,
            companyId: 9,
            position: 'Cloud Security Engineer',
            salary: '$90,000 - $120,000 per year',
            jobDescription: 'SecureNet Technologies is looking for a talented Cloud Security Engineer to join our team. As a Cloud Security Engineer, you will be responsible for designing and implementing secure cloud infrastructure, developing cloud security policies and procedures, and conducting regular security audits and assessments. You will collaborate with cross-functional teams to ensure the confidentiality, integrity, and availability of cloud-based systems and data.',
            requirements: `
            - Bachelor's degree in Computer Science, Information Technology, or a related field\n
            - Extensive experience with cloud platforms (e.g., AWS, Azure, Google Cloud)\n
            - Strong understanding of cloud security principles and best practices\n
            - Hands-on experience with cloud security tools and services\n
            - Knowledge of compliance frameworks (e.g., PCI DSS, GDPR) and their application in cloud environments\n
            - Excellent problem-solving and troubleshooting skills\n
            - Effective communication and teamwork abilities`,
            deadline: 'July 09, 2023',
          },
          {
            id: 4,
            companyId: 18,
            position: 'AI Chatbot Developer',
            salary: '$70,000 - $90,000 per year',
            jobDescription: 'MindBot Solutions is seeking a skilled AI Chatbot Developer to join our dynamic team. In this role, you will be responsible for designing, developing, and deploying intelligent chatbot solutions and virtual assistants using AI and ML technologies. You will collaborate with cross-functional teams to understand client requirements, implement natural language processing algorithms, and continuously enhance the chatbots conversational abilities. Your work will contribute to delivering personalized and efficient interactions for our clients, improving customer engagement and automating customer support processes.',
            requirements: `
            - Bachelor's degree in Computer Science, Artificial Intelligence, or a related field\n
            - Strong programming skills in languages such as Python, Java, or JavaScript\n
            - Experience with AI and ML frameworks and libraries (e.g., TensorFlow, PyTorch, scikit-learn)\n
            - Familiarity with natural language processing techniques and conversational AI platforms\n
            - Knowledge of chatbot development methodologies and best practices\n
            - Strong problem-solving and analytical skills\n
            - Excellent communication and teamwork abilities`,
            deadline: 'June 27, 2023',
          },
          {
            id: 5,
            companyId: 16,
            position: 'Machine Learning Engineer',
            salary: '$80,000 - $100,000 per year',
            jobDescription: 'Synapse AI Technologies is seeking a skilled Machine Learning Engineer to join our innovative team. In this role, you will be responsible for designing, developing, and deploying machine learning models and algorithms. You will work closely with cross-functional teams to understand business requirements, analyze data, and build predictive models that extract valuable insights. Your work will contribute to driving innovation, automation, and data-driven decision-making for our clients.',
            requirements: `
            - Master's degree or Ph.D. in Computer Science, Artificial Intelligence, or a related field\n
            - Proficiency in machine learning techniques, algorithms, and frameworks\n
            - Strong programming skills in languages such as Python, R, or Java\n
            - Experience with data preprocessing, feature engineering, and model evaluation\n
            - Knowledge of deep learning architectures and frameworks (e.g., TensorFlow, PyTorch)\n
            - Familiarity with data visualization and analysis tools (e.g., Matplotlib, Pandas)\n
            - Strong problem-solving and analytical abilities\n
            - Excellent communication and collaboration skills`,
            deadline: 'July 23, 2023',
          },
          {
            id: 6,
            companyId: 16,
            position: 'Data Scientist',
            salary: '$75,000 - $95,000 per year',
            jobDescription: 'Synapse AI Technologies is looking for a talented Data Scientist to join our dynamic team. In this role, you will work on extracting insights from complex data sets, developing statistical models, and generating actionable recommendations. You will collaborate with stakeholders to identify business problems, design experiments, and leverage AI and ML techniques to provide data-driven solutions. Your work will play a crucial role in helping businesses make informed decisions and drive strategic growth.',
            requirements: `
            - Bachelor's or Master's degree in Data Science, Statistics, or a related field\n
            - Proficiency in programming languages such as Python or R\n
            - Strong knowledge of statistical analysis, machine learning algorithms, and predictive modeling\n
            - Experience with data wrangling, data visualization, and exploratory data analysis\n
            - Familiarity with SQL and database querying\n
            - Strong problem-solving and critical-thinking skills\n
            - Excellent communication and presentation abilities`,
            deadline: 'July 12, 2023',
          },
          {
            id: 7,
            companyId: 16,
            position: 'AI Solutions Architect',
            salary: '$90,000 - $120,000 per year',
            jobDescription: 'Synapse AI Technologies is seeking an experienced AI Solutions Architect to lead the design and implementation of AI-driven solutions. In this role, you will collaborate with clients to understand their business objectives, assess technical requirements, and develop scalable AI architectures. You will oversee the end-to-end development process, including data collection, model training, and deployment. Your expertise will drive innovation, ensure technical feasibility, and deliver successful AI projects for our clients.',
            requirements: `
            - Bachelor's or Master's degree in Computer Science, Artificial Intelligence, or a related field\n
            - Proven experience in designing and implementing AI solutions\n
            - Strong knowledge of AI technologies, including machine learning, deep learning, and natural language processing\n
            - Proficiency in programming languages such as Python, Java, or C++\n
            - Familiarity with cloud platforms and services (e.g., AWS, Azure, GCP)\n
            - Excellent problem-solving and analytical skills\n
            - Strong communication and leadership abilities`,
            deadline: 'August 01, 2023',
          },
        ])
      })
  }