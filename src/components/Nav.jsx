import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon, scrollToId, lockScroll, isMobile } from '../lib.jsx'
import { nav, profile } from '../data.js'

export function Nav({ active }) {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    lockScroll(open)
    return () => lockScroll(false)
  }, [open])
  const go = (id) => {
    const wasOpen = open
    setOpen(false)
    setTimeout(() => scrollToId(id), wasOpen ? 40 : 0)
  }

  return (
    <>
      <motion.header className={`nav ${solid ? 'solid' : ''}`} initial={isMobile() ? false : { y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}>
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
          <motion.div className="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.16 }}>
            <div className="menu-top">
              <img src="assets/sbk-logo.png" alt={profile.brand} />
              <button className="nav-burger" style={{ display: 'flex' }} aria-label="Close menu" onClick={() => setOpen(false)}><Icon.Close size={26} /></button>
            </div>
            <div className="menu-links">
              {nav.map((n) => (
                <a key={n.id} href={`#${n.id}`} className={`menu-link ${active === n.id ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); go(n.id) }}>
                  {n.label}<Icon.Right size={20} />
                </a>
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
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0
    const loop = () => {
      cx += (x - cx) * 0.28
      cy += (y - cy) * 0.28
      c.style.transform = `translate3d(${cx}px, ${cy}px, 0)`
      if (Math.abs(x - cx) > 0.1 || Math.abs(y - cy) > 0.1) raf = requestAnimationFrame(loop)
      else raf = 0
    }
    const move = (e) => {
      x = e.clientX; y = e.clientY
      c.classList.toggle('big', !!e.target.closest('a, button, .card'))
      if (!raf) raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf); c.remove() }
  }, [])
  return null
}
