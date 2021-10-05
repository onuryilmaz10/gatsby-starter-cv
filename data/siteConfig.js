module.exports = {
  siteTitle: 'Onur YILMAZ',
  siteDescription: `SAUEEE`,
  keyWords: ['onur', 'yilmaz', 'ieee'],
  authorName: 'Onur YILMAZ',
  twitterUsername: 'onur_ylmaz_',
  githubUsername: 'onuryilmaz10',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `---<br />--- <br /><strong>IEEE, SAU.</strong>`,
  skills: [
    {
      name: 'CAD & CAM',
      level: 75
    },
    {
      name: 'PCB Design & Prototyping',
      level: 65
    },
    {
      name: 'Circuit Design',
      level: 60
    },
    {
      name: 'Algorithms & Coding',
      level: 65
    },
    {
      name: 'Content Production',
      level: 50
    },
    {
      name: 'Endustrial Designing',
      level: 60
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
      duration: null,
      occupation: "3D Designer",
      description: "- - -"
  
    },  {
      company: "Modonex",
      begin: {
        month: 'apr',
        year: '2019'
      },
      duration: null,
      occupation: "PROJECT ENGINEER",
      description: "- - -"
  
    }, {
      company: "Tokyay Kereste",
      begin: {
        month: 'dec',
        year: '2017'
      },
      duration: null,
      occupation: "Electronics Designer",
      description: "- - -"
    }, {
      company: "Uyar Ajans",
      begin: {
        month: 'set',
        year: '2016'
      },
      duration: '3 yrs',
      occupation: "Support Technician",
      description: "- - -"
  
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