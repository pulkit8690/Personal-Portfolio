import {
  Boxes, Layers3, Smartphone, Server, Workflow,
  Target, Network, MessageSquare, Wallet,
  Factory, Flame, Building2, Store, Rocket, Briefcase
} from 'lucide-react';

export const services = [
  {
    icon: Boxes,
    title: 'Custom Business Software',
    desc: 'Transform manual workflows into reliable digital systems engineered specifically for your business operations.',
    items: ['Management Systems', 'Internal Portals', 'Operational Software'],
  },
  {
    icon: Layers3,
    title: 'ERP Software Development',
    desc: 'Customized ERP solutions tailored to manufacturing and logistics — eliminating bloated licensing fees.',
    items: ['Customer Management', 'Production Tracking', 'Order Monitoring', 'Advanced Reporting'],
  },
  {
    icon: Smartphone,
    title: 'Flutter Mobile Development',
    desc: 'High-performance cross-platform Flutter applications for your team and customers, delivered with precision.',
    items: ['Android & iOS Apps', 'Business Mobility', 'Internal Employee Apps'],
  },
  {
    icon: Server,
    title: 'Spring Boot Backend Development',
    desc: 'Robust Java backend development services engineered for maximum security, scale, and seamless integration.',
    items: ['REST API Development', 'Secure Authentication', 'Role-Based Access', 'Optimized Databases'],
  },
  {
    icon: Workflow,
    title: 'AI Automation Services',
    desc: 'Automate repetitive tasks with integrated AI solutions that save time and eliminate human error.',
    items: ['Workflow Automation', 'Approval Systems', 'Data Management'],
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
    desc: 'Work directly with the developer building your system — no account-manager telephone.'
  },
  {
    icon: Wallet,
    title: 'Cost Effective',
    desc: 'Custom solutions without agency-level overhead and inflated retainers.',
  },
];

export const industries = [
  { icon: Factory, name: 'Manufacturing', desc: 'Production and shop-floor tracking systems' },
  { icon: Flame, name: 'Foundries', desc: 'Precision casting and melt-shop operations' },
  { icon: Building2, name: 'SMEs', desc: 'End-to-end operational software' },
  { icon: Store, name: 'Local Businesses', desc: 'Digital transformation of daily workflows' },
  { icon: Rocket, name: 'Startups', desc: 'Scalable MVPs and cross-platform platforms' },
  { icon: Briefcase, name: 'Professional Services', desc: 'Client management and workflow automation' },
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
