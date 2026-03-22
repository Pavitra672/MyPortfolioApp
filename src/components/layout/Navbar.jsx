import { useState, useEffect } from 'react'

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
      padding: '1rem 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      backdropFilter: 'blur(20px)',
      background: dark ? `rgba(10,10,15,${scrolled ? '0.95' : '0.6'})` : `rgba(240,240,248,${scrolled ? '0.95' : '0.7'})`,
      borderBottom: '1px solid var(--border)',
      transition: 'background 0.3s',
    }}>
      <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text)', textDecoration: 'none', letterSpacing: '-0.02em' }}>
        PK<span style={{ color: 'var(--accent)' }}>.</span>
      </a>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {links.map(link => (
          <button key={link} onClick={() => scrollTo(link)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.875rem', color: 'var(--text2)', fontFamily: 'DM Sans, sans-serif', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--text2)'}
          >{link}</button>
        ))}
        <button onClick={onToggleTheme}
          style={{ background: 'var(--surface)', border: '1px solid var(--border2)', borderRadius: '8px', padding: '0.4rem 0.75rem', color: 'var(--text2)', cursor: 'pointer', fontSize: '0.875rem', fontFamily: 'DM Sans, sans-serif', transition: 'all 0.2s' }}>
          {dark ? '☀ Light' : '☾ Dark'}
        </button>
      </div>
    </nav>
  )
}
