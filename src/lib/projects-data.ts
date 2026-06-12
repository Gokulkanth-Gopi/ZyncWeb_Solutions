export interface Project {
  slug: string;
  title: string;
  category: string;
  date: string;
  client: string;
  description: string;
  heroImage: string;
  images: string[];
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: 'trend-beacon',
    title: 'Trend Beacon',
    category: 'AI Platform',
    date: 'March 2026',
    client: 'Beacon Labs',
    description: 'A cutting-edge market intelligence platform utilizing predictive AI to map emerging consumer trends before they go mainstream.',
    heroImage: 'https://picsum.photos/seed/trend-beacon-hero/1920/1080',
    images: [
      'https://picsum.photos/seed/trend-1/1200/800',
      'https://picsum.photos/seed/trend-2/1200/800',
      'https://picsum.photos/seed/trend-3/1200/800',
    ],
    challenge: 'The client needed a way to visualize massive datasets from social media and search trends in a way that was both intuitive for non-technical users and deeply insightful for data analysts.',
    solution: 'We built a bespoke graph-based visualization engine and a real-time dashboard that translates raw vector data into readable trend heatmaps and predictive reports.',
    results: [
      '40% increase in analyst efficiency',
      'Real-time processing of 1M+ data points hourly',
      'Successful Series B funding within 3 months of launch',
    ],
    tags: ['AI/ML', 'Data Viz', 'Next.js', 'Tailwind'],
  },
  {
    slug: 'nexus-vault',
    title: 'Nexus Vault',
    category: 'FinTech',
    date: 'January 2026',
    client: 'Nexus Finance',
    description: 'Secure, institutional-grade digital asset custody platform featuring hardware isolation and multi-sig governance.',
    heroImage: 'https://picsum.photos/seed/nexus-hero/1920/1080',
    images: [
      'https://picsum.photos/seed/nexus-1/1200/800',
      'https://picsum.photos/seed/nexus-2/1200/800',
    ],
    challenge: 'Bridging the gap between the speed of digital transactions and the rigorous security requirements of traditional banking institutions.',
    solution: 'Implemented a multi-layer security protocol involving HSMs, MPC thresholds, and a highly polished React-based governance portal.',
    results: [
      '$5B+ in assets under management secured',
      'SOC2 Type II compliance achieved',
      'Zero security incidents since deployment',
    ],
    tags: ['Security', 'FinTech', 'Cloud Architecture'],
  },
  {
    slug: 'aura-os',
    title: 'Aura OS',
    category: 'Product Design',
    date: 'February 2026',
    client: 'Aura Electronics',
    description: 'A holistic operating system for smart home ecosystems, focusing on seamless interaction and privacy-first automation.',
    heroImage: 'https://picsum.photos/seed/aura-hero/1920/1080',
    images: [
      'https://picsum.photos/seed/aura-1/1200/800',
      'https://picsum.photos/seed/aura-2/1200/800',
    ],
    challenge: 'Creating a unified design language that works across devices from 2-inch smart switches to 70-inch entertainment hubs.',
    solution: 'Developed a scalable design system using motion-driven components and a minimalist glassmorphic aesthetic to reduce visual noise.',
    results: [
      '95% user satisfaction in beta testing',
      'Industry-leading 200ms latency across devices',
      'Winner of 2026 Digital Design Excellence Award',
    ],
    tags: ['UI/UX', 'IoT', 'Design System'],
  },
];
