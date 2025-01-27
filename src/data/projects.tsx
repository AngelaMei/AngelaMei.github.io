import { ProjectCardProps } from "@/components/ProjectCard";
import { ProjectHeroSectionProps } from "@/components/ProjectHeroSection";

// Note: updating the project list may break the Footer grid layout

export default [
  {
    pageUrl: '/project/coin-toss',
    imageUrl: '/media/homepage/Cover_Gemini.gif',
    type: 'Google Hackathon',
    name: 'AI Travel Assistant',
    description: 'An AI-Powered Travel Planner redefines the travel planning experience by combining advanced AI capabilities with intuitive design.',
    iconUrl: '/icons/logo/Gemini.png',
  },
  {
    id: 'guide-app',
    pageUrl: '/project/guide-app',
    imageUrl: '/media/homepage/Cover_Guide.gif',
    type: 'Capstone',
    name: 'Guide App',
    description: 'Collaborated with a startup to enhance Guide App, a Learning Management System by developing features that streamline user interaction with long-form content.',
    iconUrl: '/icons/logo/Guide.png',
    heroCoverUrl: '/mock_main.png',
    bannerText: `Mark, Snip, and Succeed
      Make training and learning like TikTok`,
    themeColor: '#0C1743',
  },
  {
    id: 'gesture-recognition-pet',
    pageUrl: '/project/gesture-recognition-pet',
    imageUrl: '/media/homepage/Cover_Patpet_4x.png',
    type: 'Augmented Reality',
    name: 'Gesture Recognition Pet',
    description: 'Augmented Reality (AR) pet app that can interact with the user through intuitive gestures, and user can train and have fun with their AR pet.',
    iconUrl: '/icons/logo/Unity.png',
    heroCoverUrl: '/mock_main.png',
    bannerText: 'Bring joy and connection to your world with an AR pet that learns, grows, and plays by your side!',
    themeColor: '#3EA3F9',
  },
  {
    pageUrl: '/project/student-social-life',
    imageUrl: '/media/homepage/Cover_UserResearch_4x.png',
    type: 'User Research',
    name: 'Student Social Life',
    description: 'Our research goal is to conduct a thorough investigation of the factors that impact student participation and engagement.',
    iconUrl: '/icons/logo/UMD.png',
  },
  {
    pageUrl: '/project/dairy-subscription-service',
    imageUrl: '/media/homepage/Cover_Milky_4x.png',
    type: 'UX Project',
    name: 'Dairy Subscription Service',
    description: 'A Line Bot to reduce business human resources and narrow the gap between customer and business.',
    iconUrl: '/icons/logo/Milk.png',
  },
  /*
  {
    pageUrl: '/',
    imageUrl: '/media/homepage/Cover_AT_4x.png',
    type: 'UX Project',
    name: 'Future Trading App',
    description: 'This Trading Application is built for retail investors to approach trading futures contracts easily',
    iconUrl: '/icons/logo/AT.png',
  },
  */
] satisfies (ProjectCardProps & ProjectHeroSectionProps)[];

