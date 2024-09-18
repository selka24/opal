export const pages = [
    {name: 'Home', path: '/'},
    {name: 'About us', path: '/about'},
    {name: 'Portfolio', path: '/portfolio'},
    {name: 'Contact', path: '/contact'},
]

export const sharkInfo = {
    email: 'admin@shark-technologies.com',
    location: 'Rr. Ali Pashe Gucia, <br> Pallati Aurora, H.1, <br>Tirane, Albania',
    phone: '+355 69 619 55 44',
    time: '9:00 AM to 6:00 PM (CEST)'
}

export const socialNetworks= [
    { link: 'www.linkedin.com', name: 'linkedin'},
    { link: 'www.instagram.com', name: 'instagram'},
]

export const members = [
    {fullName: 'Developer Name', job: 'Software Engineer', image: '', socialLinks: null},
    {fullName: 'Developer Name', job: 'Software Engineer', image: '', socialLinks: null},
    {fullName: 'Developer Name', job: 'Software Engineer', image: '', socialLinks: null},
]

export const productServices= [
    {title: 'All limited links', included: true},
    {title: 'Own analytics platform', included: true},
    {title: 'Chat support', included: true},
    {title: 'Optimize hashtags', included: true},
    {title: 'Unlimited users', included: true},
    {title: 'Free domain', included: false},
    {title: '10gb storage', included: false},
]

export const pricingOptions = [
    {
        title: 'Starter',
        description: 'For most businesses that want to the otpimize web queries',
        price: {monthly: '100', yearly: '999'},
        services: [
            ...productServices
        ]
    },
    {
        title: 'Medium',
        description: 'For most businesses that want to the otpimize web queries',
        price: {monthly: '500', yearly: '5499'},
        services: [
            ...productServices
        ]
    },
    {
        title: 'Advance',
        description: 'For most businesses that want to the otpimize web queries',
        price: {monthly: '800', yearly: '8999'},
        services: [
            ...productServices
        ]
    },
]


export const projects = [
    {title: 'Web Analytics', description : 'Web Design', image: ''},
    {title: 'Cyber Secure', description : 'Cyber Security Core', image: ''},
    {title: 'Mobile info', description : 'Upcoming Phone', image: ''},
]

export const aboutCards = [
    { icon: 'laptop-code-solid', title: 'Software Development', description: 'Delivering scalable and efficient software solutions tailored to client needs.' },
    { icon: 'globe-solid', title: 'Web Development', description: 'Crafting responsive and dynamic websites that drive engagement and user experience.' },
    { icon: 'chart-line-solid', title: 'Microsoft D365 F&O', description: 'Streamlining business operations with Microsoft Dynamics 365 for Finance and Operations.' },
    { icon: 'pen-ruler-solid', title: 'UI / UX Design', description: 'Designing intuitive and aesthetically pleasing interfaces to enhance user interaction.' },
    { icon: 'shield-halved-solid', title: 'Cyber Security', description: 'Ensuring robust protection and security for digital assets against cyber threats.' },
    { icon: 'cloud-solid', title: 'Cloud Infrastructure Developments', description: 'Building and optimizing scalable cloud infrastructures.' }
];

export const coreValues = [
    {
        icon: 'circle-check-solid',
        title: 'Quality-Driven Results',
        description: 'We pride ourselves on delivering top-tier, high-quality web solutions that meet the highest industry standards, rigorously tested for flawless performance.'
    },
    {
        icon: 'users-solid',
        title: 'Expertise',
        description: 'Our team of seasoned developers, designers, and strategists brings years of experience and in-depth technical knowledge to every project, offering cutting-edge solutions.'
    },
    {
        icon: 'handshake-solid',
        title: 'Client-Centric Approach',
        description: 'We believe in true collaboration, prioritizing understanding your business needs to create custom solutions that drive measurable results.'
    },
    {
        icon: 'lightbulb-solid',
        title: 'Innovation & Creativity',
        description: 'We push the boundaries of creativity and innovation by blending imaginative design with the latest technologies for stunning, highly functional digital experiences.'
    },
    {
        icon: 'life-ring-solid',
        title: 'Continuous Support',
        description: 'Our commitment doesn’t end at launch; we offer ongoing support and maintenance to keep your digital presence secure, up-to-date, and optimized for performance.'
    },
    {
        icon: 'chart-line-solid',
        title: 'Proven Track Record',
        description: 'Our portfolio speaks for itself, showcasing our history of delivering powerful web solutions that help businesses succeed online.'
    }
];

export const termsOfService = [
    {
        title: 'Acceptance of Terms',
        description: 'By using our website or services, you agree to these Terms of Service. If not, please refrain from using our site.'
    },
    {
        title: 'Services Provided',
        description: '<b>Shark Technologies</b> offers customized web development services through direct collaboration; no products are sold or subscribed to through our website.'
    },
    {
        title: 'Intellectual Property',
        description: 'All website content is owned by <b>Shark Technologies</b> or its suppliers and is protected by intellectual property laws. Unauthorized use is prohibited.'
    },
    {
        title: 'User Responsibilities',
        description: 'You agree to provide accurate information when communicating with us and not to engage in unlawful or harmful activities on our site.'
    },
    {
        title: 'Third-Party Links',
        description: 'Our website may contain links to third-party sites. We are not responsible for the content or privacy practices of these external sites.'
    },
    {
        title: 'Limitation of Liability',
        description: '<b>Shark Technologies</b> is not liable for any damages arising from the use of the website or services, and we make no warranties about the content’s accuracy.'
    },
    {
        title: 'Termination',
        description: 'We reserve the right to terminate or suspend your access to the website at any time, without notice, for violations of these Terms of Service.'
    },
    {
        title: 'Governing Law',
        description: 'These Terms of Service are governed by the laws of [State/Country], without regard to its conflict of law principles.'
    },
    {
        title: 'Changes to Terms',
        description: 'We may modify these Terms of Service at any time. Continued use of the website constitutes acceptance of the updated terms.'
    },
    {
        title: 'Contact Us',
        description: 'For any questions about this Privacy Policy, contact us at: &nbsp;&nbsp; <a href="mailto:compliance@shark-technologies.com">compliance@shark-technologies.com</a>'
    }
];

export const projectPortfolio = [
    {
        title: 'D365 F&O Custom A-Z',
        industry: 'Enterprise Resource Planning (ERP)',
        projectType: 'Full-Scale Implementation & Maintenance',
        overview: 'We provided an end-to-end custom solution for a client using Dynamics 365 Finance & Operations (D365 F&O), encompassing everything from system architecture to ongoing maintenance, development, and release management. This project involved a complete A-Z solution that streamlined the client’s operations across multiple departments.',
        keyFeatures: [
            'Architecture design for scalable ERP operations',
            'Continuous development and release management',
            'System integration with existing technologies',
            'Full maintenance and support services'
        ]
    },
    {
        title: 'E-Commerce Solutions Integrated with SAP & Other Tier 1 ERPs',
        industry: 'Retail & E-Commerce',
        projectType: 'E-Commerce Platform Development',
        overview: 'We developed a sophisticated e-commerce platform that integrates with SAP and other Tier 1 ERPs, enabling real-time inventory management, order processing, and customer service automation. This solution optimized the client’s supply chain and improved customer experience.',
        keyFeatures: [
            'SAP and ERP integration for real-time data syncing',
            'Automated order fulfillment and tracking',
            'Secure payment gateway integration',
            'Mobile-responsive design and user-friendly interface'
        ]
    },
    {
        title: 'CRM Solutions Integrated with Third-Party Systems',
        industry: 'Customer Relationship Management (CRM)',
        projectType: 'CRM Integration & Customization',
        overview: 'We implemented a custom CRM solution integrated with Microsoft Dynamics, Salesforce, and Government Gateway, providing a unified customer management system that improved data access and client communication across departments.',
        keyFeatures: [
            'Integration with Microsoft Dynamics, Salesforce & Government Gateway',
            'Streamlined client data management and reporting',
            'Custom workflows and automation',
            'Enhanced security and compliance features'
        ]
    },
    {
        title: 'Custom SQL Developments',
        industry: 'Data Management & Analytics',
        projectType: 'Database Development',
        overview: 'We delivered custom SQL development solutions for clients, working with SQL, MySQL, and PostgreSQL to create optimized database systems designed for high performance and scalability, ensuring efficient data handling and reporting.',
        keyFeatures: [
            'Custom database architecture using SQL, MySQL, and PostgreSQL',
            'Optimization for high-volume data transactions',
            'Scalable design to accommodate growing data needs',
            'Advanced reporting and data analysis tools'
        ]
    },
    {
        title: 'Comprehensive Cybersecurity Solution for Enterprise Client',
        industry: 'Cybersecurity',
        projectType: 'Security Assessment and Strategic Planning',
        overview: 'We partnered with a large enterprise client to enhance their cybersecurity through a multi-phase project involving assessment, strategic planning, and security testing, optimizing their security framework against modern threats.',
        keyFeatures: [
            'Cybersecurity Maturity Assessment',
            'Cybersecurity Strategy Planning',
            'Vulnerability Scanning',
            'Web Application Security Testing',
            'Infrastructure Security Testing'
        ]
    }
];
