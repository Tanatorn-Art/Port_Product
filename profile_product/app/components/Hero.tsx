import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background grid */}
      <div className={styles.bgGrid} aria-hidden />

      <div className={styles.container}>
        {/* Status badge */}
        <div className={styles.badge}>
          <span className={styles.dot} />
          <span>Available for freelance work</span>
        </div>

        {/* Heading */}
        <h1 className={styles.title}>
          Building digital<br />
          products that{' '}
          <span className={styles.titleAccent}>scale.</span>
        </h1>

        <p className={styles.subtitle}>
          Full-stack engineer & product designer. I craft clean, performant web experiences<br />
          with modern tech — React, Next.js, TypeScript, and thoughtful system design.
        </p>

        {/* Actions */}
        <div className={styles.actions}>
          <a href="#portfolio" className={styles.btnPrimary}>
            View my work
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M2 7.5H13M8.5 3L13 7.5L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#blog" className={styles.btnSecondary}>Read the blog</a>
        </div>

        {/* Tech stack strip */}
        <div className={styles.stack}>
          <span className={styles.stackLabel}>Tech stack</span>
          {['Next.js', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Tailwind', 'Docker'].map(t => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>

        {/* Stats row */}
        <div className={styles.stats}>
          {[
            { num: '5+', label: 'Years building' },
            { num: '80+', label: 'Projects shipped' },
            { num: '30k+', label: 'GitHub stars' },
            { num: '12k', label: 'Blog readers / mo' },
          ].map(s => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Code card decoration */}
      <div className={styles.codeCard} aria-hidden>
        <div className={styles.codeCardHeader}>
          <span className={styles.dot2} style={{ background: '#ff5f57' }}/>
          <span className={styles.dot2} style={{ background: '#ffbd2e' }}/>
          <span className={styles.dot2} style={{ background: '#28c840' }}/>
          <span className={styles.codeCardTitle}>portfolio.config.ts</span>
        </div>
        <pre className={styles.codeSnippet}>{`const config = {
  name: "Your Name",
  role: "Full-Stack Engineer",
  location: "Bangkok, TH 🇹🇭",
  status: "available",
  stack: [
    "Next.js", "React",
    "TypeScript", "Node.js",
  ],
  openToWork: true,
}`}</pre>
      </div>
    </section>
  )
}
