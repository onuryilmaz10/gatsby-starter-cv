module.exports = {
  siteTitle: 'Onur YILMAZ',
  siteDescription: `SAUEEE`,
  keyWords: ['onur', 'yilmaz', 'ieee'],
  authorName: 'Onur YILMAZ',
  twitterUsername: 'onur_ylmaz_',
  githubUsername: 'onuryilmaz10',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Hello, I'm student in <strong> Electrical and Electronics Engineering </strong> at Sakarya University.<br /> I have also been working on digital content production and industrial electronic product design for more than 5 years .<br />
  Briefly, I can turn the idea into a project, plan and manage the production process, and advertise the product that comes out at the end of the process. <br />
  `,
  skills: [
    {
      name: 'CAD/CAM',
      level: 75
    },
    {
      name: 'Electronic Design & Prototyping',
      level: 70
    },
    {
      name: 'Algorithms & Coding',
      level: 70
    },
    {
      name: 'Visual Content Production',
      level: 80
    },
    {
      name: 'Project Management',
      level: 75
    }
    
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
      duration: null,
      occupation: "3D Designer",
      description: "Printable functional parts design. (STL files are shown on the works page.)"
  
    },  {
      company: "Modonex",
      begin: {
        month: 'apr',
        year: '2019'
      },
      duration: null,
      occupation: "PROJECT ENGINEER",
      description: "Electronic & Mechanical design in agricultural projects. Circuit & PCB design, prototyping via 3d print technologies, graphic design."
  
    }, {
      company: "Tokyay Kereste",
      begin: {
        month: 'dec',
        year: '2017'
      },
      duration: null,
      occupation: "Electronics Designer",
      description: "Control and automation projects for wood production. Circuit & PCB design, control panel design."
    }, {
      company: "Uyar Ajans",
      begin: {
        month: 'sep',
        year: '2016'
      },
      duration: '3 yrs',
      occupation: "Support Technician",
      description: "Corporate Advertising. Photography."
  
    },
  ],
  works: [
    {
      image: "/images/3dprinter.jpg",
      description: "Printable 3D Designs",
      url: "https://github.com/onuryilmaz10/3d-design"
    },
    {
      image: "/images/videos.jpg",
      description: "Videos",
      url: "https://youtube.com/playlist?list=PLN2WVmce1BZNZqx29W4l8rqA9Twmu5RCu"
    },
    {
      image: "/images/tokyaybahce.png",
      description: "Tokyay Bahce Advertisement",
      url: "https://www.instagram.com/tokyaybahce/"
    },
    {
      image: "/images/modonex.png",
      description: "Modonex Advertisement",
      url: "https://www.modonex.com/"
    },
    {
      image: "/images/usbpowercontroller.png",
      description: "USB-Port Power Controller",
      url: "https://github.com/onuryilmaz10/usbport_power_controller"
    },
    /* more works items here */
  ],

  social: {
    instagram : "https://www.instagram.com/onr_ylmaz_/",
    twitter: "https://twitter.com/onur_ylmaz_",
    youtube: "https://www.youtube.com/channel/UCQgodw1IlFDdsOXEoeudQHw",
    linkedin: "https://www.linkedin.com/in/onur-ylmaz",
    github: "https://github.com/onuryilmaz10",
    email: "info@onur-yilmaz.com"
  },
  siteUrl: 'https://www.onuryilmaz.info',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/covermini.jpg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#212121',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/iconblue.png',
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