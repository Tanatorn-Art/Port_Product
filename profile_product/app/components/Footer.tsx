import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <rect width="18" height="18" rx="5" fill="var(--accent)"/>
              <path d="M5 9L8 12L13 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            dev<span>.io</span>
          </span>
          <span className={styles.copy}>© 2025 — Built with Next.js & TypeScript</span>
        </div>
        <div className={styles.right}>
          <span className={styles.status}>
            <span className={styles.statusDot}/>
            Available for work
          </span>
        </div>
      </div>
    </footer>
  )
}
