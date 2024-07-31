import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Database',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Junior Software Developer',
    company_name: 'Cosmos Group',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2023 - Present',
  },
  {
    title: 'Technical Content Developer ',
    company_name: 'Rank Wizards LLC',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Executive Member',
    company_name: 'Daffodil International University Computer and Programming Club',
    icon: kelhel,
    iconBg: '#333333',
    date: '2021 - 2022',
  },
  {
    title: 'Associate Memberr',
    company_name: 'Daffodil International University Computer and Programming Club',
    icon: dcc,
    iconBg: '#333333',
    date: '2020 - 2021',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Election 2024',
    description: 'Welcome to UNBs Bangladesh Government Election 2024 Microsite. Click on any of the 64 districts in our interactive SVG map to access the latest election news and updates specific to that region.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/Arman-Hossen/election-24',
    demo: 'https://unb.com.bd/election2024/',
  },
  {
    id: 'project-2',
    name: 'Cricket World Cup',
    description:
      'Welcome to UNBs Cricket World Cup Microsite. Access news in both Bengali and English and discover fascinating facts about the Cricket World Cup.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/Arman-Hossen/unb_cwc_india2023',
    demo: 'https://unb.com.bd/icct20worldcup2024/',
  },
  {
    id: 'project-3',
    name: 'Re Roll A Bike',
    description: 'Welcome to Re Ride a Bike, your trusted platform for second-hand bike sales. Buyers can shop and report issues, sellers can manage listings, and admins ensure smooth transactions and user verification.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/Arman-Hossen/re-roll-a-bike',
    demo: 'https://re-roll-a-bike.web.app/',
  },
  {
    id: 'project-4',
    name: 'Armans Kitchen',
    description: `Welcome to our Personal Food Delivery System. After logging in, users can explore service details, leave or remove reviews, and admins can add new services to the platform.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/Arman-Hossen/armans-kitchen-client',
    demo: 'https://personal-kitchen-9f45b.web.app/',
  },
  {
    id: 'project-5',
    name: 'Blended Lerning',
    description:
      'Welcome to our Computer Science Student Portal. Click on categories or course details buttons to explore course information, and log in or register to access premium course plans. Premium content is available exclusively to logged-in users.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/Arman-Hossen/blended-learning-client',
    demo: 'https://blended-learning-84ebc.web.app/',
  },
];

export { services, technologies, experiences, projects };
