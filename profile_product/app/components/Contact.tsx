'use client'
import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.sectionTag}>_contact</span>
          <h2 className={styles.title}>Let&apos;s build<br />something great.</h2>
          <p className={styles.desc}>
            Open to freelance projects, full-time roles, and interesting collaborations. I usually reply within 24 hours.
          </p>

          <div className={styles.links}>
            {[
              { label: 'GitHub', handle: '@yourhandle', href: '#' },
              { label: 'Twitter', handle: '@yourhandle', href: '#' },
              { label: 'LinkedIn', handle: 'yourname', href: '#' },
            ].map(l => (
              <a key={l.label} href={l.href} className={styles.socialLink}>
                <span className={styles.socialLabel}>{l.label}</span>
                <span className={styles.socialHandle}>{l.handle}</span>
                <svg className={styles.socialArrow} width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          {sent ? (
            <div className={styles.successBox}>
              <div className={styles.successIcon}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="13" stroke="var(--green)" strokeWidth="1.5"/>
                  <path d="M8 14L12 18L20 10" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.successTitle}>Message sent!</div>
              <div className={styles.successSub}>I&apos;ll get back to you within 24 hours.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Name</label>
                  <input className={styles.input} type="text" placeholder="Your name" required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Email</label>
                  <input className={styles.input} type="email" placeholder="you@email.com" required />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Subject</label>
                <input className={styles.input} type="text" placeholder="Project inquiry, collaboration..." required />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Message</label>
                <textarea className={`${styles.input} ${styles.textarea}`} placeholder="Tell me about your project..." rows={5} required />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Send message
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M2 7.5H13M8.5 3L13 7.5L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
