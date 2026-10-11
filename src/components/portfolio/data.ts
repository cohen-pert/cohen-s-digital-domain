export const BOOKING = 'https://cal.com/cohen-pert/30min';
export const LINKEDIN = 'https://www.linkedin.com/in/cohen-pert-a4bb51300/';
export const INVESTMENT_MEMBERS = 100;
export const PERSONAL_PHONE = { display: '+1 (470) 323-2832', href: 'tel:+14703232832' };
export const navItems = [
  { label: 'About', id: 'about' }, { label: 'Ventures', id: 'company' },
  { label: 'Projects', id: 'work' }, { label: 'Journey', id: 'timeline' },
  { label: 'Leadership', id: 'leadership' }, { label: 'Contact', id: 'contact' },
];
export const rightNow = ['Running Pert Digital', 'Managing Director, The Pert Group', 'Wealth Management Intern at GENCapital Advisory Partners', 'President, Lambert Investment Club', 'President, Lambert Entrepreneurship Club', 'Director of Finance, Junior Law Society', 'Dual enrollment at Georgia State'];
export const honors = [
  { date: 'Oct 2025', title: 'Emergent Ventures Grant', org: 'Mercatus Center at George Mason University', text: 'I pitched a new app to be built by The Pert Group and received a $10,000 grant.' },
  { date: 'May 2025', title: '2nd Place in the US', org: 'Youth Entrepreneur Award', text: 'I received a $1,500 cash prize for my work founding The Pert Group.' },
  { date: 'Jul 2024', title: '7th Place at FBLA Nationals', org: 'Career Exploration', text: '' },
  { date: 'Jan 2024', title: '1st Place in Georgia', org: 'FBLA Career Exploration', text: '' },
  { date: 'Dec 2023', title: '2nd Place in the US', org: 'FBLA Stock Market Game (team)', text: '' },
];
export const leadership = [
  { title: 'Lambert Investment Club', role: 'President', date: 'Aug 2024 to present', text: `I lead the largest student-run finance club at my school. I grew membership from 0 to ${INVESTMENT_MEMBERS}+, lead a 5-person leadership team, and run weekly meetings and investment simulations. I teach stock research and markets and prepare members for competitions.`, tag: 'Markets & investing' },
  { title: 'Lambert Entrepreneurship Club', role: 'President', date: 'Current', text: 'I lead students who want to start and run real businesses, with a focus on turning ideas into practical plans and thinking through what it takes to build and operate a business.', tag: 'Building businesses' },
  { title: 'Junior Law Society', role: 'Director of Finance', date: 'Aug 2026 to present', text: 'I oversee financial planning, budgeting, and financial operations for a national nonprofit expanding access to legal education.', tag: 'National nonprofit' },
  { title: "Young Men's Service League", role: 'Leadership Chair', date: 'Aug 2025 to present', text: 'I serve as Leadership Chair for the Forsyth chapter.', tag: 'Service & leadership' },
];
export type Category = 'Ventures' | 'Finance' | 'Leadership' | 'Work';
export type Experience = { id: string; date: string; title: string; org: string; text: string; categories: Category[]; bullets: string[] };
export const experiences: Experience[] = [
  { id: 'snack', date: 'Age 7', title: 'My first business', org: 'Neighborhood snack shack', text: 'I started my first business with a neighborhood snack shack.', categories: ['Ventures'], bullets: ['My first step into starting and running a business.'] },
  { id: 'stocks', date: 'Age 10', title: 'Started investing', org: 'Stock market', text: 'I began investing in the stock market.', categories: ['Finance'], bullets: ['The beginning of my interest in long-term investing.'] },
  { id: 'team', date: 'Age 13', title: 'Built a sales team', org: 'Early venture', text: 'I built a 14-person sales team with a $1K monthly run-rate.', categories: ['Ventures'], bullets: ['14-person sales team.', '$1K monthly run-rate.'] },
  { id: 'tpg', date: 'Age 15 · Aug 2024', title: 'Managing Director', org: 'The Pert Group LLC', text: 'I founded the holding company behind Pert Digital and my future ventures.', categories: ['Ventures'], bullets: ['Founded The Pert Group LLC in Aug 2024.', 'Focused on long-term ownership, business development, and operational growth.'] },
  { id: 'digital', date: 'Aug 2024 to present', title: 'Founder & CEO', org: 'Pert Digital', text: 'I run the service delivery arm of The Pert Group, helping local home-service businesses grow and improve operations.', categories: ['Ventures'], bullets: ['Websites, online presence, video, content, social media, and ad campaigns.', 'CRM, lead follow-up, automation, and back-office systems.'] },
  { id: 'gen', date: 'Aug 2026 to present', title: 'Wealth Management Intern', org: 'GENCapital Advisory Partners · Atlanta (hybrid)', text: "I'm gaining hands-on experience in investment research, portfolio monitoring, and wealth management.", categories: ['Finance'], bullets: ['Investment research, portfolio monitoring, and reporting.', 'Exposure to public and private investments, financial planning, and client advisory operations.', 'Exploring AI and workflow automation across the firm.'] },
  { id: 'wellspring', date: 'Aug 2025 to present', title: 'Accounting Bookkeeper', org: 'Wellspring Financial · Remote, part-time', text: 'I support day-to-day bookkeeping and monthly financial reporting.', categories: ['Finance'], bullets: ['Reconcile transactions and categorize expenses.', 'Manage billing and prepare monthly financial reports.'] },
  { id: 'law', date: 'Aug 2026 to present', title: 'Director of Finance', org: 'Junior Law Society', text: 'I oversee finances for a national nonprofit expanding access to legal education.', categories: ['Finance', 'Leadership'], bullets: ['Financial planning, budgeting, and financial operations.', 'Supporting the organization as it grows nationally.'] },
  { id: 'pops-ops', date: 'Oct 2025 to present', title: 'Operations Associate', org: 'King of Pops', text: 'I work on the operations behind events.', categories: ['Work'], bullets: ['Event operations, inventory, and logistics.', 'Setup and breakdown.'] },
  { id: 'pops-retail', date: 'Oct 2022 to Sep 2025', title: 'Retail Associate', org: 'King of Pops', text: 'I worked with customers and operated mobile cart sales at events and festivals.', categories: ['Work'], bullets: ['Customer service at events and festivals.', 'Mobile cart sales and transactions.'] },
  { id: 'research', date: 'Feb 2024 to Jul 2024', title: 'Research Associate', org: 'Construction Market Consultants, Inc. · Internship', text: 'I supported lead generation and CRM work.', categories: ['Work'], bullets: ['Lead generation.', 'CRM support.'] },
  { id: 'camp', date: 'May 2022 to Jul 2022', title: 'Junior Counselor', org: 'Camp Arrowhead · Milton, GA', text: 'I worked as a junior counselor at Camp Arrowhead.', categories: ['Work'], bullets: ['Junior Counselor in Milton, Georgia.'] },
  { id: 'investment-club', date: 'Aug 2024 to present', title: 'President', org: 'Lambert Investment Club', text: `I grew the club from 0 to ${INVESTMENT_MEMBERS}+ members and lead a 5-person leadership team.`, categories: ['Leadership'], bullets: ['Weekly meetings, investment simulations, stock research, and markets.', 'Preparing members for competitions.'] },
  { id: 'entrepreneurship', date: 'Current', title: 'President', org: 'Lambert Entrepreneurship Club', text: 'I lead students who want to start and run real businesses.', categories: ['Leadership'], bullets: ['Student entrepreneurship and business leadership.'] },
  { id: 'ymsl', date: 'Aug 2025 to present', title: 'Leadership Chair', org: 'Forsyth YMSL', text: "I serve as Leadership Chair in the Forsyth chapter of Young Men's Service League.", categories: ['Leadership'], bullets: ['Leadership Chair for the Forsyth chapter.'] },
  { id: 'grant', date: 'Oct 2025', title: 'Emergent Ventures Grant', org: 'Mercatus Center at George Mason University', text: 'I pitched a new app to be built by The Pert Group and received a $10,000 grant.', categories: ['Ventures'], bullets: ['$10,000 grant for a new app to be built by The Pert Group.'] },
  { id: 'youth-award', date: 'May 2025', title: '2nd Place in the US', org: 'Youth Entrepreneur Award', text: 'Recognition for my work founding The Pert Group.', categories: ['Ventures'], bullets: ['$1,500 cash prize.'] },
  { id: 'fbla-national', date: 'Jul 2024', title: '7th Place at FBLA Nationals', org: 'Career Exploration', text: 'I placed 7th in Career Exploration at FBLA Nationals.', categories: ['Ventures'], bullets: ['Career Exploration, national competition.'] },
  { id: 'fbla-state', date: 'Jan 2024', title: '1st Place in Georgia', org: 'FBLA Career Exploration', text: 'I placed 1st in Georgia in FBLA Career Exploration.', categories: ['Ventures'], bullets: ['Career Exploration, Georgia competition.'] },
  { id: 'fbla-market', date: 'Dec 2023', title: '2nd Place in the US', org: 'FBLA Stock Market Game (team)', text: 'Our team placed 2nd in the US in the FBLA Stock Market Game.', categories: ['Finance'], bullets: ['Team award in the FBLA Stock Market Game.'] },
];
