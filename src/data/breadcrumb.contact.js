import {
  SiTypescript,
  SiJavascript,
  SiNextDotJs,
  SiReact,
  SiNodeDotJs,
  SiCss3,
  SiHtml5
} from 'react-icons/si'

export default {
  avatar: '/assets/bruno.jpg',
  title: 'Bruno Costa',
  h2: 'business.brunocosta@gmail.com',
  h3: '+55 (11) 95996-3068 .',
  skills: [
    {
      name: "NextJs",
      icon: <SiNextDotJs />
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />
    },
    {
      name: "React",
      icon: <SiReact />
    },
    {
      name: "NodeJs",
      icon: <SiNodeDotJs />
    },
    {
      name: "CSS3",
      icon: <SiCss3 />
    },
    {
      name: "HTML5",
      icon: <SiHtml5 />
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />
    }
    ,
  ]
}