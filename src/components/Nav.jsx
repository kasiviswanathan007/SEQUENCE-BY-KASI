import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon, scrollToId, lockScroll } from '../lib.jsx'
import { nav, profile } from '../data.js'

export function Nav({ active }) {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => { lockScroll(open) }, [open])
  const go = (id) => { setOpen(false); setTimeout(() => scrollToId(id), open ? 350 : 0) }

  return (
    <>
      <motion.header className={`nav ${solid ? 'solid' : ''}`} initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}>
        <a className="nav-logo" href="#home" onClick={(e) => { e.preventDefault(); go('home') }} aria-label={`${profile.brand}, home`}>
          <img src="assets/sbk-logo.png" alt="SBK" />
        </a>
        <nav className="nav-links" aria-label="Sections">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={`nav-link ${active === n.id ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); go(n.id) }}>
              {n.label}
              {active === n.id && <motion.span layoutId="underline" className="nav-underline" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
            </a>
          ))}
        </nav>
        <div className="nav-spacer" />
        <a href="#hire" className={`btn btn-sm nav-hire ${active === 'hire' ? 'btn-white' : 'btn-lime'}`} onClick={(e) => { e.preventDefault(); go('hire') }}>Hire Me</a>
        <button className="nav-burger" aria-label="Open menu" onClick={() => setOpen(true)}><Icon.Menu size={26} /></button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div className="menu" initial={{ clipPath: 'circle(0% at 95% 30px)' }} animate={{ clipPath: 'circle(150% at 95% 30px)' }}
            exit={{ clipPath: 'circle(0% at 95% 30px)' }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <div className="menu-top">
              <img src="assets/sbk-logo.png" alt={profile.brand} />
              <button className="nav-burger" style={{ display: 'flex' }} aria-label="Close menu" onClick={() => setOpen(false)}><Icon.Close size={26} /></button>
            </div>
            <div className="menu-links">
              {nav.map((n, i) => (
                <motion.a key={n.id} href={`#${n.id}`} className={`menu-link ${active === n.id ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); go(n.id) }}
                  initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.15 + i * 0.05 }}>
                  {n.label}<Icon.Right size={20} />
                </motion.a>
              ))}
            </div>
            <div className="menu-bottom">
              <a href="#hire" className="btn btn-lime" onClick={(e) => { e.preventDefault(); go('hire') }}>Hire Me</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {active !== 'hire' && (
        <a href="#hire" className="btn btn-lime sticky-hire" onClick={(e) => { e.preventDefault(); go('hire') }}>Hire Me</a>
      )}
    </>
  )
}

export function Cursor() {
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    const c = document.createElement('div')
    c.className = 'cursor'
    document.body.appendChild(c)
    let x = 0, y = 0, cx = 0, cy = 0, raf
    const move = (e) => { x = e.clientX; y = e.clientY; c.classList.toggle('big', !!e.target.closest('a, button, .card')) }
    const loop = () => { cx += (x - cx) * 0.22; cy += (y - cy) * 0.22; c.style.transform = `translate(${cx}px, ${cy}px)`; raf = requestAnimationFrame(loop) }
    window.addEventListener('mousemove', move); loop()
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf); c.remove() }
  }, [])
  return null
}
