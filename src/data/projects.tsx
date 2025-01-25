import { ProjectCardProps } from "@/components/ProjectCard";

// Note: updating the project list may break the Footer grid layout

export default [
  {
    pageUrl: '/project/coin-toss',
    imageUrl: '/cover/Cover_Gemini.gif',
    type: 'Google Hackathon',
    name: 'AI Travel Assistant',
    description: 'A Line Bot to reduce business human resources and narrow the gap between customer and business.',
    iconUrl: '/cover/Logo_Gemini.png',
  },
  {
    pageUrl: '/project/guide-app',
    imageUrl: '/cover/Cover_Guide.gif',
    type: 'Capstone',
    name: 'Guide App',
    description: 'A Line Bot to reduce business human resources and narrow the gap between customer and business.',
    iconUrl: '/cover/Logo_Guide.png',
  },
  {
    pageUrl: '/project/gesture-recognition-pet',
    imageUrl: '/cover/Cover_Patpet_4x.png',
    type: 'AR',
    name: 'Gesture Recognition Pet',
    description: 'A Line Bot to reduce business human resources and narrow the gap between customer and business.',
    iconUrl: '/cover/Logo_Unity.png',
  },
  {
    pageUrl: '/project/student-social-life',
    imageUrl: '/cover/Cover_UserResearch_4x.png',
    type: 'User Research',
    name: 'Student Social Life',
    description: 'Our research goal is to conduct a thorough investigation of the factors that impact student participation and engagement.',
    iconUrl: '/cover/Logo_UMD.png',
  },
  {
    pageUrl: '/project/dairy-subscription-service',
    imageUrl: '/cover/Cover_Milky_4x.png',
    type: 'UX Project',
    name: 'Dairy Subscription Service',
    description: 'A Line Bot to reduce business human resources and narrow the gap between customer and business.',
    iconUrl: '/cover/Logo_Milky.png',
  },
  /*
  {
    pageUrl: '/',
    imageUrl: '/cover/Cover_AT_4x.png',
    type: 'UX Project',
    name: 'Future Trading App',
    description: 'This Trading Application is built for retail investors to approach trading futures contracts easily',
    iconUrl: '/cover/Logo_AT.png',
  },
  */
] satisfies ProjectCardProps[];

