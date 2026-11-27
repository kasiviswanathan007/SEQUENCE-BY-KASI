// ─────────────────────────────────────────────────────────────
//  SBK — edit everything on the site from this one file.
//  Images/videos go in /public/assets/... and are referenced as "assets/...".
//  Anything left empty falls back to a styled placeholder.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Kasi Viswanathan',
  brand: 'Sequence by Kasi',
  role: 'Video Editor & Gen AI Creator',
  city: 'Chennai',
  tagline: '[One line on your editing style: what you cut, who you cut for, the feeling you leave people with.]',
  // Home page — short brief about you (2–3 lines)
  brief: 'A Creative Video Editor with 3.5+ years of experience transforming ideas into impactful visual stories through creative editing, cinematic storytelling and AI-powered content.',
  bio: [
    "I'm Kasi Viswanathan, a Creative Video Editor with 3.5+ years of professional experience in crafting engaging visual content. I specialize in commercial ads, social media content, cinematic storytelling, motion graphics and AI-powered video production.",
    'With a strong understanding of brand identity and advertising psychology, I transform creative ideas into impactful visual stories that capture attention, connect with audiences and bring brands to life.',
  ],
  showreel: 'assets/showreel.mp4', // set to 'assets/showreel.mp4' when ready
  showreelRuntime: '[Runtime]',
  instagram: 'https://www.instagram.com/sequence_by_kasi?jplx=MWMxOTV2OGx1N3R5Zw==',
  whatsapp: 'https://wa.me/916383105697',
  email: 'mailto:kasikasivis17@gmail.com',
}

// Nav order (also the section order on the page)
export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'clients', label: 'Clients' },
  { id: 'work', label: 'Work' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'services', label: 'Services' },
  { id: 'softwares', label: 'Software & Tools' },
  { id: 'about', label: 'About' },
]

const reelsItems = [
  { id: 'reels-1', title: 'Asal', client: 'Asal', tools: 'Premiere Pro · After Effects', preview: 'assets/work/reels/reel-01.mp4', video: 'assets/work/reels/reel-01.mp4' },
  { id: 'reels-2', title: 'LevelUp Learning', client: 'LevelUp Learning', tools: 'Premiere Pro · After Effects', preview: 'assets/work/reels/reel-04.mp4', video: 'assets/work/reels/reel-04.mp4' },
  { id: 'reels-3', title: 'QPO', client: 'QPO', tools: 'Premiere Pro · After Effects', preview: 'assets/work/reels/reel-03.mp4', video: 'assets/work/reels/reel-03.mp4' },
  { id: 'reels-5', title: 'Saravanan Decodes', client: 'Saravanan Decodes', tools: 'Premiere Pro · After Effects', preview: 'assets/work/reels/reel-09.mp4', video: 'assets/work/reels/reel-09.mp4' },
  { id: 'reels-6', title: 'Top One Percent', client: 'Top One Percent', tools: 'Premiere Pro · After Effects', preview: 'assets/work/reels/reel-10.mp4', video: 'assets/work/reels/reel-10.mp4' },
  { id: 'reels-8', title: 'LevelUp Learning', client: 'LevelUp Learning', tools: 'Premiere Pro · After Effects', preview: 'assets/work/reels/reel-05.mp4', video: 'assets/work/reels/reel-05.mp4' },
]

const aiReelsItems = [
  { id: 'ai-reels-1', title: 'Park Avenue', client: 'Park Avenue', tools: 'Premiere Pro · Higgsfield · Envato', preview: 'assets/work/ai-reels/ai-reel-04.mp4', video: 'assets/work/ai-reels/ai-reel-04.mp4' },
  { id: 'ai-reels-2', title: 'Park Avenue', client: 'Park Avenue', tools: 'Premiere Pro · Higgsfield · Envato', preview: 'assets/work/ai-reels/ai-reel-05.mp4', video: 'assets/work/ai-reels/ai-reel-05.mp4' },
  { id: 'ai-reels-3', title: 'Pettikadai', client: 'Pettikadai', tools: 'Premiere Pro · Higgsfield · Envato', preview: 'assets/work/ai-reels/ai-reel-07.mp4', video: 'assets/work/ai-reels/ai-reel-07.mp4' },
  { id: 'ai-reels-4', title: 'TATA', client: 'TATA', tools: 'Premiere Pro · Higgsfield · Envato', preview: 'assets/work/ai-reels/ai-reel-08.mp4', video: 'assets/work/ai-reels/ai-reel-08.mp4' },
  { id: 'ai-reels-5', title: 'Hawaii Doors', client: 'Hawaii Doors', tools: 'Premiere Pro · Higgsfield · Envato', preview: 'assets/work/ai-reels/ai-reel-02.mp4', video: 'assets/work/ai-reels/ai-reel-02.mp4' },
  { id: 'ai-reels-7', title: 'THINK GAS', client: 'THINK GAS', tools: 'Premiere Pro · Higgsfield · Envato', preview: 'assets/work/ai-reels/ai-reel-09.mp4', video: 'assets/work/ai-reels/ai-reel-09.mp4' },
]

const aiItems = [
  { id: 'ai-1', title: 'ACT 2 Popcorn', client: 'ACT 2 Popcorn', tools: 'Premiere Pro · Higgsfield · Envato', preview: 'assets/work/ai/ai-01.mp4', video: 'assets/work/ai/ai-01.mp4' },
  { id: 'ai-2', title: 'KFC', client: 'KFC', tools: 'Premiere Pro · Higgsfield · Envato', preview: 'assets/work/ai/ai-02.mp4', video: 'assets/work/ai/ai-02.mp4' },
  { id: 'ai-3', title: 'Mountain Dew', client: 'Mountain Dew', tools: 'Premiere Pro · Higgsfield · Envato', preview: 'assets/work/ai/ai-03.mp4', video: 'assets/work/ai/ai-03.mp4' },
]

const trailerItems = [
  { id: 'trailer-1', title: '96', client: '96', tools: 'Premiere Pro · After Effects', preview: 'assets/work/trailer/trailer-01.mp4', video: 'assets/work/trailer/trailer-01.mp4' },
  { id: 'trailer-3', title: 'Rahul', client: 'Rahul', tools: 'Premiere Pro · After Effects', preview: 'assets/work/trailer/trailer-03.mp4', video: 'assets/work/trailer/trailer-03.mp4' },
  { id: 'trailer-4', title: 'McKingstown', client: 'McKingstown', tools: 'Premiere Pro · After Effects', preview: 'assets/work/trailer/trailer-04.mp4', video: 'assets/work/trailer/trailer-04.mp4' },
]

const corporateItems = [
  { id: 'corporate-1', title: 'QPO', client: 'QPO', tools: 'Premiere Pro · After Effects', preview: 'assets/work/corporate/corp-04.mp4', video: 'assets/work/corporate/corp-04.mp4' },
  { id: 'corporate-2', title: 'MCS', client: 'MCS', tools: 'Premiere Pro · After Effects', preview: 'assets/work/corporate/corp-03.mp4', video: 'assets/work/corporate/corp-03.mp4' },
  { id: 'corporate-3', title: 'Maven', client: 'Maven', tools: 'Premiere Pro · After Effects', preview: 'assets/work/corporate/corp-02.mp4', video: 'assets/work/corporate/corp-02.mp4' },
  { id: 'corporate-4', title: 'BNI', client: 'BNI', tools: 'Premiere Pro · After Effects', preview: 'assets/work/corporate/corp-01.mp4', video: 'assets/work/corporate/corp-01.mp4' },
]

const brandItems = [
  { id: 'brand-1', title: 'Asal', client: 'Asal', tools: 'Premiere Pro · DaVinci Resolve', preview: 'assets/work/brand/brand-01.mov', video: 'assets/work/brand/brand-01.mov' },
  { id: 'brand-2', title: 'EV Retron Energies', client: 'EV Retron Energies', tools: 'Premiere Pro · After Effects', preview: 'assets/work/brand/brand-02.mp4', video: 'assets/work/brand/brand-02.mp4' },
  { id: 'brand-3', title: 'Vatio', client: 'Vatio', tools: 'Premiere Pro · DaVinci Resolve', preview: 'assets/work/brand/brand-03.mp4', video: 'assets/work/brand/brand-03.mp4' },
]

// Work rows — in this order
export const workRows = [
  { id: 'reels', title: 'Reels & Shorts', vertical: true, items: reelsItems },
  { id: 'ai-reels', title: 'AI Reels', vertical: true, items: aiReelsItems },
  { id: 'ai', title: 'AI Commercials', items: aiItems },
  { id: 'trailer', title: 'Trailer Cuts', items: trailerItems },
  { id: 'corporate', title: 'Corporate Works', items: corporateItems },
  { id: 'brand', title: 'Brand Films', items: brandItems },
]

// "Who's watching?" profile → which row comes first
export const profiles = [
  { id: 'brands', label: 'Brands', color: '#CDF704', ink: '#000', first: 'brand' },
  { id: 'agencies', label: 'Agencies', color: '#2E5A88', ink: '#fff', first: 'ai' },
  { id: 'creators', label: 'Creators', color: '#8A3B5C', ink: '#fff', first: 'reels' },
  { id: 'explore', label: 'Just exploring', color: '#2A2A2F', ink: '#C9C9CE', first: null },
]

export const moments = [
  { kicker: 'Award', title: '[Award name]', sub: '[Festival or platform, year]' },
  { kicker: 'Reach', title: '[X]M+ views', sub: 'Across reels and brand films' },
  { kicker: 'Biggest project', title: '[Client / film]', sub: '[What made it big]', featured: true },
  { kicker: 'Body of work', title: '[X]+ projects', sub: 'Delivered for [X] brands' },
  { kicker: 'Experience', title: '[X] years', sub: 'On the timeline' },
]

export const services = [
  { title: 'Reels & Shorts', desc: 'Hook-first vertical edits built to stop the scroll.', deliver: 'Captions · B-roll · trending formats', featured: true },
  { title: 'AI Commercials', desc: 'Ads built with AI visuals, cut and finished like a real production.', deliver: 'AI visuals · edit · sound' },
  { title: 'Trailer Cuts', desc: 'Tension, pace and sound design that make people want the full thing.', deliver: 'Teasers · trailers · promos' },
  { title: 'Corporate Works', desc: 'Company films, event recaps and interviews people actually watch.', deliver: 'Recaps · interviews · testimonials' },
  { title: 'Brand Films', desc: 'Story-led films that show who a brand is and why it matters.', deliver: 'Hero film · cutdowns · social versions' },
  { title: 'Colour & Motion', desc: 'Grading and motion graphics to finish any edit.', deliver: 'Grade · titles · logo animation' },
]

export const clients = [
  { name: 'TATA', logo: 'assets/clients/1.png' },
  { name: 'Park Avenue', logo: 'assets/clients/2.png' },
  { name: 'Tata Ultra Marathon', logo: 'assets/clients/3.png' },
  { name: 'McKingstown', logo: 'assets/clients/4.png' },
  { name: 'SNIPES', logo: 'assets/clients/5.png' },
  { name: 'THINK GAS', logo: 'assets/clients/6.png' },
  { name: 'LevelUp Learning', logo: 'assets/clients/7.png' },
  { name: 'Saravanan Decodes', logo: 'assets/clients/8.png' },
  { name: 'Top One Percent', logo: 'assets/clients/9.png' },
  { name: 'Paudha', logo: 'assets/clients/10.png' },
  { name: 'Hawaii Steel Door', logo: 'assets/clients/11.png' },
  { name: 'BNI Royals', logo: 'assets/clients/12.png' },
]

export const testimonials = [
  { quote: 'Kasi brings creativity and precision to every project. His editing gives our brand content a premium and engaging feel.', name: 'VTT Gold' },
  { quote: 'Excellent creativity and attention to detail. Kasi understands our vision and transforms it into impactful visual content.', name: 'Hawaii Doors' },
  { quote: 'Working with Kasi has been a great experience. His storytelling and editing make every video more engaging and effective.', name: 'Saravanan Decodes' },
  { quote: 'His creative approach and dedication really stand out. Every project reflects great effort, quality and attention to detail.', name: 'Aishwarya Lakshmi' },
]

export const toolkit = [
  { name: 'Premiere Pro', logo: 'assets/tools/1.png' },
  { name: 'After Effects', logo: 'assets/tools/2.png' },
  { name: 'Media Encoder', logo: 'assets/tools/3.png' },
  { name: 'DaVinci Resolve', logo: 'assets/tools/4.png' },
  { name: 'Canva', logo: 'assets/tools/5.png' },
  { name: 'Claude', logo: 'assets/tools/6.png' },
  { name: 'AI Motion', logo: 'assets/tools/7.png' },
  { name: 'Gemini', logo: 'assets/tools/8.png' },
]

// About me — extra details at the end of the page
export const aboutMore = {
  facts: [
    { label: 'Based in', value: 'Chennai' },
    { label: 'Experience', value: '3.5+ years' },
    { label: 'Projects delivered', value: '224' },
    { label: 'Languages', value: '[Tamil · English]' },
  ],
}
