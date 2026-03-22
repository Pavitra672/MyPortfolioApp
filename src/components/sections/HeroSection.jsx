import { motion } from 'framer-motion'
import { personal } from '../../data/portfolio'

export default function HeroSection() {
  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
  const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16,1,0.3,1] } } }
  const name = { hidden: { y: '110%', opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.16,1,0.3,1] } } }

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: 'clamp(5rem,10vw,8rem) clamp(1.5rem,8vw,8rem) 4rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(108,99,255,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 20% 70%, rgba(34,211,160,0.06) 0%, transparent 50%)' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.03, backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <motion.div animate={{ y: [0,-30,0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: '-100px', right: '-100px', width: 400, height: 400, borderRadius: '50%', background: 'var(--accent)', filter: 'blur(100px)', opacity: 0.08, zIndex: 0, pointerEvents: 'none' }} />
      <motion.div animate={{ y: [0,25,0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }} style={{ position: 'absolute', bottom: '100px', left: '-100px', width: 300, height: 300, borderRadius: '50%', background: 'var(--green)', filter: 'blur(80px)', opacity: 0.06, zIndex: 0, pointerEvents: 'none' }} />

      <motion.div variants={container} initial="hidden" animate="visible" style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
        <motion.div variants={item}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.3)', borderRadius: 100, padding: '0.35rem 1rem', fontSize: '0.75rem', color: 'var(--accent2)', marginBottom: '2rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 500 }}>
            <motion.span animate={{ opacity: [1,0.4,1], scale: [1,0.8,1] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />
            Available for Opportunities
          </span>
        </motion.div>

        <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(3.5rem,9vw,7rem)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
          {['Pavitra', 'Kambar'].map((word, i) => (
            <span key={word} style={{ display: 'block', overflow: 'hidden' }}>
              <motion.span variants={name} style={{ display: 'block', ...(i === 1 ? { background: 'linear-gradient(135deg, var(--accent) 0%, var(--green) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' } : {}) }}>
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p variants={item} style={{ fontSize: '1.1rem', color: 'var(--text2)', maxWidth: 520, lineHeight: 1.7, marginBottom: '2.5rem', fontWeight: 300 }}>
          Computer Science student building at the intersection of{' '}
          <strong style={{ color: 'var(--text)', fontWeight: 500 }}>AI, full-stack development</strong>, and human-centered design.
        </motion.p>

        <motion.div variants={item} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <motion.a href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}
            style={{ background: 'var(--accent)', color: 'white', borderRadius: 10, padding: '0.85rem 2rem', fontSize: '0.95rem', fontWeight: 500, cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            View Projects ↗
          </motion.a>
          <motion.a href="#about" onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}
            whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
            style={{ background: 'transparent', color: 'var(--text)', border: '1px solid var(--border2)', borderRadius: 10, padding: '0.85rem 2rem', fontSize: '0.95rem', fontWeight: 400, cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            About Me ↓
          </motion.a>
        </motion.div>

        <motion.div variants={item} style={{ display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap' }}>
          {[['5', 'Projects Built'], ['5+', 'Technologies'], ['∞', 'Problems to Solve']].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 700, color: 'var(--text)' }}>{num}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
