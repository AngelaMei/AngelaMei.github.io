import type { StaticImageData } from 'next/image';

import coinTossCover from '@/public/media/homepage/Cover_Cointoss.png';
import guideAppCover from '@/public/media/homepage/Cover_Guide.png';
import patPetCover from '@/public/media/homepage/Cover_Patpet.png';

type ProjectMetadata = {
  id: string;
  pageUrl: string;
  coverImage: StaticImageData;
  type: string;
  name: string;
  role: string;
  description: string;
  iconUrl: string;
  bannerText: string;
  themeColor: string;
};

// Note: updating the project list may break the Footer grid layout

export default [
  {
    id: 'guide-app',
    pageUrl: '/project/guide-app',
    coverImage: guideAppCover,
    type: 'UX Project',
    name: 'Guide App',
    role: 'UI/UX Designer & Researcher',
    description: 'A UX research project focusing on enhancing an existing Learning Management System, with the aim to reduce 30% of course editing time.',
    iconUrl: '/icons/logo/Guide.png',
    bannerText: `Mark, Snip, and Succeed
      Make training and learning like TikTok`,
    themeColor: '#0C1743',
  },
  {
    id: 'coin-toss',
    pageUrl: '/project/coin-toss',
    coverImage: coinTossCover,
    type: 'UX Project',
    name: 'Coin Toss',
    role: 'Product Designer',
    description: 'Led user interviews and developed a user-centered prototype for an AI-Powered Travel Planner at a generative AI hackathon.',
    iconUrl: '/icons/logo/Gemini.png',
    bannerText: `Have you ever felt overwhelmed by travel planning?
      You're not alone. Flip a coin!`,
    themeColor: '#6750A4',
  },
  {
    id: 'gesture-recognition-pet',
    pageUrl: '/project/gesture-recognition-pet',
    coverImage: patPetCover,
    type: 'Augmented Reality',
    name: 'Pat Pet',
    role: 'Product Designer & Developer',
    description: 'Developed an Augmented Reality (AR) pet app with intuitive gesture interactions, allowing users to train and play with their virtual companions.',
    iconUrl: '/icons/logo/Unity.png',
    bannerText: 'Bring joy and connection to your world with an AR pet that learns, grows, and plays by your side!',
    themeColor: '#3EA3F9',
  },
  /*
  {
    id: 'student-social-life',
    pageUrl: '/project/student-social-life',
    imageUrl: '/media/homepage/Cover_UserResearch_4x.png',
    type: 'User Research',
    name: 'Student Social Life',
    description: 'Our research goal is to conduct a thorough investigation of the factors that impact student participation and engagement.',
    iconUrl: '/icons/logo/UMD.png',
    bannerText: 'What encourages/stops students from joining these events and organizations?',
    themeColor: '#820202',
  },
  {
    id: 'dairy-subscription-service',
    pageUrl: '/project/dairy-subscription-service',
    imageUrl: '/media/homepage/Cover_Milky_4x.png',
    type: 'UX Project',
    name: 'Dairy Subscription Service',
    description: 'A Line Bot to reduce business human resources and narrow the gap between customer and business.',
    iconUrl: '/icons/logo/Milk.png',
    bannerText: 'Improving Efficiency and Customer Satisfaction with a Line Bot Solution',
    themeColor: '#005DCA',
  },
  {
    id: 'future-trading-app',
    pageUrl: '/',
    imageUrl: '/media/homepage/Cover_AT_4x.png',
    type: 'UX Project',
    name: 'Future Trading App',
    description: 'This Trading Application is built for retail investors to approach trading futures contracts easily',
    iconUrl: '/icons/logo/AT.png',
  },
  */
] satisfies ProjectMetadata[];

