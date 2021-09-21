module.exports = {
  siteTitle: 'CV',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Onur YILMAZ',
  twitterUsername: 'onur_ylmaz_',
  githubUsername: 'onuryilmaz10',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Developer, passionate about what I do. Always interested in how the sites were made, I started to study HTML by hobby. <br />
    In 2012 I started working as a support technician and I approached the developers.
    In 2015, I started to study C # and started to contribute with the team giving maintenance in an application in C # and .NET. <br />
    I currently work as a frontend developer and mainly work with <strong>Javascript, NodeJS e React.</strong>`,
  skills: [
    {
      name: 'CAD & CAM',
      level: 70
    },
    {
      name: 'PCB Design & Prototyping',
      level: 60
    },
    {
      name: 'Circuit Design',
      level: 50
    },
    {
      name: 'Algorithms & Coding',
      level: 40
    },
    {
      name: 'Content Production',
      level: 60
    },
    {
      name: 'Endustrial Designing',
      level: 70
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Freelancer",
      begin: {
        month: 'sep',
        year: '2019'
      },
      duration: '2019-2020',
      occupation: "3D Designer",
      description: "I am part of the Corporate team, responsible for the development and maintenance of the employee management platform, giving more and more autonomy to partner companies."
  
    },  {
      company: "Modonex",
      begin: {
        month: 'apr',
        year: '2018'
      },
      duration: null,
      occupation: "PROJECT ENGINEER",
      description: "I integrate the Frontend team responsible for developing and maintaining the online lending platform."
  
    }, {
      company: "Tokyay Kereste",
      begin: {
        month: 'dec',
        year: '2016'
      },
      duration: null,
      occupation: "Electronics Designer",
      description: "Development and maintenance, corrective and preventive, of web applications for the real estate market."
    }, {
      company: "Uyar Ajans",
      begin: {
        month: 'set',
        year: '2012'
      },
      duration: '4 yrs e 3 mos',
      occupation: "Support Technician",
      description: "Responsible for the implementation and parameterization of the system, training and customer support. Acting also in person in real estate launches guaranteeing the success and good use of the tool."
  
    },
  ],
  works: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Gatsby starter CV template",
      url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Responsive grid for ReactJS",
      url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
    },
    /* more works items here */
  ],

  social: {
    twitter: "https://twitter.com/onur_ylmaz_",
    linkedin: "https://www.linkedin.com/in/onur-ylmaz",
    github: "https://github.com/onuryilmaz10",
    email: "info@onur-yilmaz.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'CV',
      url: '/',
    },
    {
      label: 'Works',
      url: '/works',
    }
  ]
}