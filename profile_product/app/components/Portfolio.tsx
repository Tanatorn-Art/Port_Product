import styles from './Portfolio.module.css'

const projects = [
  {
    num: '01',
    title: 'SaaS Analytics Dashboard',
    desc: 'A real-time analytics platform with custom chart library, multi-tenant architecture, and role-based access. Processing 10M+ events/day.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js'],
    meta: 'Full-stack · 2024',
    link: '#',
    featured: true,
  },
  {
    num: '02',
    title: 'Open Source CLI Tool',
    desc: 'A developer CLI for scaffolding Next.js projects with opinionated defaults — 3.2k GitHub stars.',
    tags: ['Node.js', 'TypeScript', 'Ink'],
    meta: 'Open Source · 2023',
    link: '#',
    featured: false,
  },
  {
    num: '03',
    title: 'E-Commerce Platform',
    desc: 'Headless commerce with custom checkout flow, inventory management, and Stripe integration. Handles 500+ orders/day.',
    tags: ['Next.js', 'Stripe', 'Prisma', 'Redis'],
    meta: 'Full-stack · 2023',
    link: '#',
    featured: false,
  },
  {
    num: '04',
    title: 'AI Writing Assistant',
    desc: 'Browser extension powered by LLMs that helps engineers write better commit messages, PR descriptions, and docs.',
    tags: ['React', 'Chrome API', 'OpenAI', 'Supabase'],
    meta: 'Product · 2024',
    link: '#',
    featured: false,
  },
]

export default function Portfolio() {
  const [featured, ...rest] = projects

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.sectionTag}>_work</span>
            <h2 className={styles.title}>Selected Projects</h2>
          </div>
          <a href="#" className={styles.viewAll}>
            All projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Featured */}
        <a href={featured.link} className={`${styles.card} ${styles.cardFeatured}`}>
          <div className={styles.cardFeaturedBg} aria-hidden />
          <div className={styles.cardContent}>
            <div className={styles.cardTop}>
              <span className={styles.cardNum}>{featured.num}</span>
              <span className={styles.featuredBadge}>Featured</span>
            </div>
            <h3 className={styles.cardTitle}>{featured.title}</h3>
            <p className={styles.cardDesc}>{featured.desc}</p>
            <div className={styles.cardBottom}>
              <div className={styles.tags}>
                {featured.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
              <span className={styles.cardMeta}>{featured.meta}</span>
            </div>
          </div>
          <div className={styles.cardArrow}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M11 5L16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </a>

        {/* Grid */}
        <div className={styles.grid}>
          {rest.map(p => (
            <a key={p.num} href={p.link} className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <span className={styles.cardNum}>{p.num}</span>
                </div>
                <h3 className={styles.cardTitleSm}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
                <div className={styles.cardBottom}>
                  <div className={styles.tags}>
                    {p.tags.slice(0, 3).map(t => <span key={t} className={styles.tag}>{t}</span>)}
                  </div>
                  <span className={styles.cardMeta}>{p.meta}</span>
                </div>
              </div>
              <div className={styles.cardArrow}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
