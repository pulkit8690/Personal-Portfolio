import {
  Boxes, Layers3, Smartphone, Server, Workflow,
  Target, Network, MessageSquare, Wallet,
  Factory, Flame, Building2, Store, Rocket, Briefcase
} from 'lucide-react';

export const services = [
  {
    icon: Boxes,
    title: 'Custom Business Software',
    desc: 'Transform manual workflows into reliable digital systems built around how your business actually operates.',
    items: ['Business Management Systems', 'Internal Portals', 'Operations Software'],
  },
  {
    icon: Layers3,
    title: 'ERP Development',
    desc: 'Custom ERP systems tailored to manufacturing and business operations \u2014 no bloated off-the-shelf licensing.',
    items: ['Customer Management', 'Production Tracking', 'Order Monitoring', 'Reporting Systems'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Application Development',
    desc: 'Cross-platform Flutter applications for your team and your customers, built to perform.',
    items: ['Android Apps', 'Business Apps', 'Internal Employee Applications'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    desc: 'Robust Spring Boot backends engineered for security, scale and clean integration.',
    items: ['REST APIs', 'Authentication', 'Role Based Access', 'Database Design'],
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    desc: 'Automate the repetitive work that drains your team\u2019s time and introduces costly errors.',
    items: ['Reporting Automation', 'Approval Workflows', 'Data Management'],
  },
];

export const whyCards = [
  {
    icon: Target,
    title: 'Business-Focused Solutions',
    desc: 'Not generic software. Every solution is tailored to your specific business process.',
  },
  {
    icon: Network,
    title: 'Scalable Architecture',
    desc: 'Designed for long-term growth and maintainability, not just to ship and leave.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Communication',
    desc: 'Work directly with the developer building your system \u2014 no account-manager telephone.',
  },
  {
    icon: Wallet,
    title: 'Cost Effective',
    desc: 'Custom solutions without agency-level overhead and inflated retainers.',
  },
];

export const industries = [
  { icon: Factory, name: 'Manufacturing', desc: 'Production & shop-floor systems' },
  { icon: Flame, name: 'Foundries', desc: 'Casting & melt-shop tracking' },
  { icon: Building2, name: 'SMEs', desc: 'End-to-end operations software' },
  { icon: Store, name: 'Local Businesses', desc: 'Digitize day-to-day workflows' },
  { icon: Rocket, name: 'Startups', desc: 'MVPs & scalable platforms' },
  { icon: Briefcase, name: 'Professional Services', desc: 'Client & workflow management' },
];

export const techStack = [
  { group: 'Frontend', items: ['Flutter', 'React'] },
  { group: 'Backend', items: ['Spring Boot', 'Java'] },
  { group: 'Database', items: ['PostgreSQL', 'MySQL'] },
  { group: 'Cloud', items: ['AWS', 'Cloud Hosting'] },
  { group: 'Tools', items: ['Git', 'Docker', 'REST APIs'] },
];

export const process = [
  { n: '01', title: 'Requirement Discussion', desc: 'We map out your goals, pain points and what success looks like for your business.' },
  { n: '02', title: 'Business Analysis', desc: 'I study your existing workflows to design software that fits how you actually work.' },
  { n: '03', title: 'System Design', desc: 'Architecture, data models and interfaces planned for scale, security and clarity.' },
  { n: '04', title: 'Development', desc: 'Clean, maintainable code built in iterations with regular progress visibility.' },
  { n: '05', title: 'Testing', desc: 'Rigorous testing to ensure reliability before anything touches your operations.' },
  { n: '06', title: 'Deployment & Support', desc: 'Smooth go-live, training and continued support as your business grows.' },
];
