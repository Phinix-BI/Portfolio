/* eslint-disable no-unused-vars */
import {
   
    discordBlack,
    facebook,
   
    file02,
    
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    
    plusSquare,
   
    searchMd,
    
    twitter,
    yourlogo,
  } from "../assets";

  export const navigation = [
    {
      id: "0",
      title: "About",
      url: "#about",
    },
    {
      id: "1",
      title: "Skills",
      url: "#skills",
    },
    {
      id: "2",
      title: "Projects",
      url: "#projects",
    },
    {
      id: "3",
      title: "Contact",
      url: "#contact",
    },
    // {
    //   id: "4",
    //   title: "New account",
    //   url: "#signup",
    //   onlyMobile: true,
    // },
    {
      id: "5",
      title: "Resume",
      url: "#resume",
      onlyMobile: true,
    },
  ];
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

  export const notificationImages = [notification4, notification3, notification2];

  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

  export const skills = [
  {
    id : 0,
    title : 'React',
    className : 'devicon-react-original colored',
  },
  {
    id : 1,
    title : 'express',
    className : 'devicon-express-original',
  },
  {
    id : 2,
    title : 'NodeJs',
    className : 'devicon-nodejs-plain-wordmark colored',
  },
  {
    id : 3,
    title : 'MongoDB',
    className : 'devicon-mongodb-plain colored',
  },
  {
    id : 4,
    title : 'JavaScript',
    className : 'devicon-javascript-plain colored',
  },
  {
    id : 5,
    title : 'TypeScript',
    className : 'devicon-typescript-plain colored',
  },
  {
    id : 6,
    title : 'Git',
    className : 'devicon-git-plain colored',
  },
  {
    id : 7,
    title : 'GitHub',
    className : 'devicon-github-original ',
  },
  {
    id : 8,
    title : 'Java',
    className : 'devicon-java-plain colored',
  },
  {
    id : 9,
    title : 'Tailwind',
    className : 'devicon-tailwindcss-plain colored',
  },
  {
    id : 10,
    title : 'Appwrite',
    className : 'devicon-appwrite-plain colored',
  },
  {
      id : 11,
      title : '& More',
      className : 'devicon-more',
    
  }

  

]

  export const Tools = [

  {
    title : 'VS Code',
    className : 'devicon-visualstudio-plain colored',
  },
  {
   title : 'Postman',
    className : 'devicon-postman-plain colored',
  },
  {
   title : 'Vercel',
    className : 'devicon-vercel-plain ',
  },
  {
    title : 'Atom',
    className : 'devicon-atom-original colored',
  }
]

  export const projectsData = [
  {
    id: "0",
    title: "Feedzzy",
    text: "Feedzzy is an ongoing project focused on streamlining the entire online food delivery process, from ordering to delivery.",
    backgroundUrl: "./benefits/card-2.svg",
    liveUrl: "https://feedzzy-xi.vercel.app",
    imageUrl: "./ProjectImages/feedzzy2.jpeg",
    githubLink : "https://github.com/Phinix-BI/Feedzzy",
    ongoing : true
  },
  {
    id: "1",
    title: "Mind Care",
    text: "Introducing MindCare: Mental Health Solution for GDSC. With AI chat, voice assessments, and appointment booking, we're redefining mental health support.",
    backgroundUrl: "./benefits/card-1.svg",
    imageUrl:"./ProjectImages/MindCarephoto.jpg",
    light: true,
    githubLink : "https://github.com/Phinix-BI/Mind-Care",
    ongoing : false,
    Demo : "https://youtu.be/-sJWkzOurbw?si=qnbgq_ou20b0KOZ-"
  },
  {
    id: "2",
    title: "News Portal",
    text: "Welcome to NewsPortal, your daily news hub. Admins can effortlessly manage posts, including scheduling, updating, creating, and deleting, all via the Admin Panel.",
    backgroundUrl: "./benefits/card-3.svg",
    
    imageUrl: "./ProjectImages/newsPortal1.jpg",
    githubLink : "https://github.com/Phinix-BI/News-Portal-U.V-",
    ongoing : false
  },
  {
    id: "3",
    title: "Portfolio",
    text: "Explore the project within the project! Delve into the Portfolio section of my portfolio website, where I've curated a collection of my best work, reflecting my skills.",
    backgroundUrl: "./benefits/card-4.svg",
    liveUrl :"https://phinix-bi.vercel.app/",
    imageUrl: "./ProjectImages/portfolio3.jpg",
    light: true,
    githubLink : "https://github.com/Phinix-BI/Portfolio",
    ongoing : false
  },
  {
    id: "4",
    title: "Layers - Ecommerce clone",
    text: "It's a frontend clone of an ecommerce site. It is made using normal html,css and js.",
    backgroundUrl: "./benefits/card-5.svg",
    liveUrl: "https://layerscloneshop.netlify.app/",
    imageUrl:"./ProjectImages/layers2.png",
    githubLink : "https://github.com/Phinix-BI/layers-clone-site",
    ongoing : false
  },
  {
    id: "5",
    title: "Drum Kit",
    text: "It's a free time project where you can play drum sets and reduce your stress and make some beautiful tune.",
    backgroundUrl: "./benefits/card-6.svg",
    liveUrl: "https://drumkitbyme.netlify.app/",
    imageUrl:"./ProjectImages/drumkit1.webp",
    githubLink : "https://github.com/Phinix-BI/DrumKit",
    ongoing : false
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: './ProjectImages/discord.png',
    url: "https://discordapp.com/users/phinix-bi",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: './ProjectImages/twitter.png',
    url: "https://twitter.com/Phinix_BI",
  },
  {
    id: "2",
    title: "LinkedIn",
    iconUrl: './ProjectImages/linkedin.png',
    url: "https://www.linkedin.com/in/1biswajitdey/",
  },
  {
    id: "3",
    title: "Github",
    iconUrl: './ProjectImages/githubLogo.svg',
    url: "https://github.com/Phinix-BI",
  },
  {
    id: "4",
    title: "Email",
    iconUrl: './ProjectImages/email.png',
    url: "#",
  },
];