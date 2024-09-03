export const pages = [
    {name: 'Home', path: '/'},
    {name: 'About us', path: '/about'},
    {name: 'Portfolio', path: '/portfolio'},
    {name: 'Contact', path: '/contact'},
]

export const opalInfo = {
    email: 'opal@email.com',
    location: 'Lake View Residences, <br> Tirana, Albania',
    phone: '+355 44 55 667',
    time: '10AM - 11:30PM'
}

export const socialNetworks= [
    { link: 'www.facebook.com', name: 'facebook'},
    { link: 'www.twitter.com', name: 'twitter'},
    { link: 'www.instagram.com', name: 'instagram'},
    { link: 'www.youtube.com', name: 'youtube'},
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
