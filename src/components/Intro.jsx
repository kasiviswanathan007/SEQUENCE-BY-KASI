import { useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap, useGSAP, Icon } from '../lib.jsx'
import { profiles, profile } from '../data.js'

// 01 · Intro sting — logo reveal, lime wipe, name tag, then hands off
export function Intro({ onDone }) {
  const ref = useRef(null)
  const tl = useRef(null)
  useGSAP(() => {
    tl.current = gsap.timeline({ onComplete: onDone })
      .from('.intro-logo', { scale: 1.25, opacity: 0, filter: 'blur(18px)', duration: 1.2, ease: 'expo.out' })
      .from('.intro-line', { scaleX: 0, duration: 0.7, ease: 'expo.inOut' }, '-=0.6')
      .from('.intro-tag', { clipPath: 'inset(0 100% 0 0)', duration: 0.9, ease: 'expo.out' }, '-=0.3')
      .from('.intro-role', { opacity: 0, letterSpacing: '20px', duration: 0.8, ease: 'expo.out' }, '-=0.6')
      .to({}, { duration: 0.7 })
      .to(ref.current, { opacity: 0, duration: 0.6, ease: 'power2.in' })
  }, { scope: ref })
  return (
    <div className="intro" ref={ref}>
      <img className="intro-logo" src="assets/sbk-logo.png" alt="SBK" />
      <div className="intro-line" />
      <img className="intro-tag" src="assets/sbk-tag.png" alt={profile.brand} />
      <div className="intro-role">{profile.role.toUpperCase()}</div>
      <div className="intro-sound"><Icon.Sound size={16} /> SEQUENCE BY KASI</div>
      <button className="btn btn-ghost btn-sm intro-skip" onClick={() => tl.current?.progress(1)}>Skip intro</button>
    </div>
  )
}

const icons = { brands: Icon.Brief, agencies: Icon.Team, creators: Icon.Phone, explore: Icon.Compass }

// 02 · Who's watching?
export function Profiles({ onPick }) {
  return (
    <motion.div className="profiles" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.15, filter: 'blur(10px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}>
      <img className="profiles-logo" src="assets/sbk-logo.png" alt={profile.brand} />
      <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
        Who's watching?
      </motion.h1>
      <div className="profiles-grid">
        {profiles.map((p, i) => {
          const I = icons[p.id]
          return (
            <motion.button key={p.id} className="profile" onClick={() => onPick(p)}
              initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
              <div className="profile-tile" style={{ background: p.color, color: p.ink, border: p.id === 'explore' ? '1px dashed #5a5a60' : 0 }}>
                <I size={64} />
              </div>
              <span>{p.label}</span>
            </motion.button>
          )
        })}
      </div>
      <motion.button className="btn btn-ghost btn-sm" style={{ letterSpacing: 2 }} onClick={() => onPick(null)}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        SKIP TO SHOWREEL
      </motion.button>
    </motion.div>
  )
}
