import { useState, useEffect } from 'react'
import { personal } from '../../data/portfolio'

export default function Navbar({ dark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = ['About', 'Projects', 'Skills', 'Contact']
  const scrollTo = id => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0.85rem 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      backdropFilter: 'blur(20px)',
      background: dark
        ? `rgba(10,10,15,${scrolled ? '0.95' : '0.55'})`
        : `rgba(240,240,248,${scrolled ? '0.95' : '0.7'})`,
      borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
      transition: 'background 0.3s, border-color 0.3s',
    }}>

      {/* ── Logo — bold white PK. like screenshot ───────── */}
      <a
        href="#"
        onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: 0 }}
      >
        {/* PK — bold white */}
        <span style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: '1.25rem',
          letterSpacing: '-0.03em',
          color: '#ffffff',
          lineHeight: 1,
        }}>
          PK
        </span>
        {/* dot — accent color */}
        <span style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: '1.5rem',
          color: 'var(--accent)',
          lineHeight: 1,
          marginLeft: '1px',
        }}>
          .
        </span>
      </a>

      {/* ── Nav links ────────────────────────────────────── */}
      <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
        {links.map(link => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '0.875rem', color: 'var(--text2)',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 400,
              transition: 'color 0.2s',
              padding: '0.25rem 0',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--text2)'}
          >
            {link}
          </button>
        ))}

        {/* Resume link */}
        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: '0.875rem',
            color: 'var(--accent2)',
            fontFamily: 'DM Sans, sans-serif',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--accent)'}
          onMouseLeave={e => e.target.style.color = 'var(--accent2)'}
        >
          Resume ↗
        </a>

        {/* Theme toggle */}
        <button
          onClick={onToggleTheme}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border2)',
            borderRadius: '8px',
            padding: '0.4rem 0.75rem',
            color: 'var(--text2)',
            cursor: 'pointer',
            fontSize: '0.8rem',
            fontFamily: 'DM Sans, sans-serif',
            transition: 'all 0.2s',
          }}
        >
          {dark ? '☀ Light' : '☾ Dark'}
        </button>
      </div>
    </nav>
  )
}