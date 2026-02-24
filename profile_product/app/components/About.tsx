import styles from './About.module.css'

const skills = [
  { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'CSS Modules', 'Tailwind'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'REST / GraphQL'] },
  { name: 'DevOps', items: ['Docker', 'GitHub Actions', 'Vercel', 'AWS EC2', 'Nginx'] },
  { name: 'Tools', items: ['Figma', 'Storybook', 'Jest', 'Prisma', 'Zod'] },
]

const timeline = [
  { year: '2024', role: 'Senior Engineer', company: 'TechCo Inc.', type: 'Full-time' },
  { year: '2022', role: 'Full-Stack Developer', company: 'Freelance', type: 'Contract' },
  { year: '2020', role: 'Frontend Developer', company: 'StartupXYZ', type: 'Full-time' },
  { year: '2019', role: 'CS Graduate', company: 'Chula University', type: 'Education' },
]

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.sectionTag}>_about</span>
          <h2 className={styles.title}>Crafting software<br />with precision.</h2>
          <p className={styles.desc}>
            I&apos;m a full-stack engineer passionate about clean architecture, developer experience, and building things that last. I love the intersection of design and engineering.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Skills */}
          <div className={styles.skillsBox}>
            <div className={styles.boxLabel}>Skills & Technologies</div>
            <div className={styles.skillsGrid}>
              {skills.map(group => (
                <div key={group.name} className={styles.skillGroup}>
                  <div className={styles.skillGroupName}>{group.name}</div>
                  {group.items.map(item => (
                    <div key={item} className={styles.skillItem}>
                      <span className={styles.skillDot}/>
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className={styles.timelineBox}>
            <div className={styles.boxLabel}>Experience</div>
            <div className={styles.timeline}>
              {timeline.map((t, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineYear}>{t.year}</div>
                  <div className={styles.timelineLine}>
                    <div className={styles.timelineDot}/>
                    {i < timeline.length - 1 && <div className={styles.timelineTrack}/>}
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineRole}>{t.role}</div>
                    <div className={styles.timelineMeta}>
                      <span>{t.company}</span>
                      <span className={styles.timelineBadge}>{t.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values card */}
          <div className={styles.valuesBox}>
            <div className={styles.boxLabel}>What I value</div>
            {[
              { icon: '⚡', title: 'Performance', desc: 'Fast by default. Every millisecond counts.' },
              { icon: '♻️', title: 'Clean Code', desc: 'Readable, testable, maintainable systems.' },
              { icon: '🧩', title: 'Systems Thinking', desc: 'Designing for scale from day one.' },
            ].map(v => (
              <div key={v.title} className={styles.valueItem}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <div>
                  <div className={styles.valueTitle}>{v.title}</div>
                  <div className={styles.valueDesc}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
