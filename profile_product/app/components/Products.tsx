import styles from './Products.module.css'

const products = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="3" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="12" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15.5 12V19M12 15.5H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    name: 'next-starter',
    tagline: 'Next.js Starter Kit',
    desc: 'Production-ready Next.js boilerplate with auth, Stripe, database, emails, and admin panel. Ship your SaaS in days, not months.',
    price: '$149',
    badge: 'Bestseller',
    badgeType: 'hot',
    features: ['Auth (next-auth)', 'Stripe + Webhooks', 'PostgreSQL + Prisma', 'Admin Dashboard', 'Email (Resend)', 'TypeScript + ESLint'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L13.09 8.26L20 9L15 13.74L16.18 20L11 16.77L5.82 20L7 13.74L2 9L8.91 8.26L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    name: 'ui-components',
    tagline: 'React Component Library',
    desc: 'A curated set of 60+ accessible, animated React components built with Radix UI and CSS Modules. Zero runtime dependencies.',
    price: '$79',
    badge: 'New',
    badgeType: 'new',
    features: ['60+ Components', 'Radix UI Primitives', 'CSS Modules', 'Dark Mode Ready', 'Figma File Included', 'Lifetime Updates'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    name: 'devnotes-pro',
    tagline: 'Developer Ebook Bundle',
    desc: '3 in-depth ebooks covering system design, TypeScript mastery, and building micro-SaaS. 400+ pages of practical knowledge.',
    price: '$49',
    badge: null,
    badgeType: null,
    features: ['3 Ebooks (PDF + EPUB)', 'System Design Guide', 'TypeScript Handbook', 'Micro-SaaS Playbook', 'Code Examples Repo', 'Free Updates'],
  },
]

export default function Products() {
  return (
    <section className={styles.products} id="products">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.sectionTag}>_products</span>
            <h2 className={styles.title}>Digital Products</h2>
            <p className={styles.subtitle}>Tools and resources I&apos;ve built for developers.</p>
          </div>
        </div>

        {/* Product cards */}
        <div className={styles.grid}>
          {products.map(p => (
            <div key={p.name} className={styles.card}>
              {p.badge && (
                <span className={`${styles.badge} ${p.badgeType === 'hot' ? styles.badgeHot : styles.badgeNew}`}>
                  {p.badge}
                </span>
              )}

              <div className={styles.cardIcon}>{p.icon}</div>

              <div className={styles.cardMono}>{p.name}</div>
              <h3 className={styles.cardTitle}>{p.tagline}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>

              <ul className={styles.features}>
                {p.features.map(f => (
                  <li key={f} className={styles.feature}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={styles.check}>
                      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className={styles.cardFooter}>
                <div className={styles.price}>{p.price} <span>one-time</span></div>
                <button className={styles.buyBtn}>
                  Get access
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
