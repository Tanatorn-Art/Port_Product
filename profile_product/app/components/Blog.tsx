import styles from './Blog.module.css'
import ThreeScene from './ThreeScene'

const posts = [
  {
    tag: 'Architecture',
    title: 'How I Structure Large Next.js Apps in 2024',
    excerpt: 'A deep dive into the folder structure, module boundaries, and conventions I use to keep codebases maintainable as they grow.',
    date: 'Jan 15, 2025',
    readTime: '9 min',
    featured: true,
  },
  {
    tag: 'Performance',
    title: 'React Server Components: What No One Tells You',
    excerpt: 'Beyond the basics — practical patterns, caching gotchas, and real-world lessons from shipping RSC in production.',
    date: 'Dec 28, 2024',
    readTime: '7 min',
    featured: false,
  },
  {
    tag: 'TypeScript',
    title: 'Advanced TypeScript Patterns for API Design',
    excerpt: 'Using branded types, template literals, and conditional types to build iron-clad API contracts.',
    date: 'Dec 10, 2024',
    readTime: '11 min',
    featured: false,
  },
  {
    tag: 'DevOps',
    title: 'Zero-Downtime Deploys with Docker & GitHub Actions',
    excerpt: 'The full pipeline from push to production — rolling updates, health checks, and automatic rollback.',
    date: 'Nov 22, 2024',
    readTime: '6 min',
    featured: false,
  },
]

export default function Blog() {
  const [featured, ...rest] = posts

  return (
    <section className={styles.blog} id="blog">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.sectionTag}>_journal</span>
            <h2 className={styles.title}>Writing</h2>

            <div className={styles.threeSceneContainer}>
              <ThreeScene />
            </div>
            
          </div>
          <a href="#" className={styles.viewAll}>
            All posts
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className={styles.grid}>
          {/* Featured post */}
          <a href="#" className={`${styles.postCard} ${styles.postFeatured}`}>
            <span className={`${styles.tagBadge} ${styles.tagFeatured}`}>{featured.tag}</span>
            <h3 className={styles.postTitleLg}>{featured.title}</h3>
            <p className={styles.postExcerpt}>{featured.excerpt}</p>
            <div className={styles.postMeta}>
              <span>{featured.date}</span>
              <span className={styles.metaDot}/>
              <span>{featured.readTime} read</span>
            </div>
          </a>

          {/* Sidebar posts */}
          <div className={styles.sideList}>
            {/* 3D Scene */}
            {rest.map((p, i) => (
              <a href="#" key={i} className={styles.postRow}>
                <div className={styles.postRowLeft}>
                  <span className={styles.tagBadge}>{p.tag}</span>
                  <h3 className={styles.postTitleSm}>{p.title}</h3>
                  <div className={styles.postMeta}>
                    <span>{p.date}</span>
                    <span className={styles.metaDot}/>
                    <span>{p.readTime} read</span>
                  </div>
                </div>
                <div className={styles.postArrow}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
