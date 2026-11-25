import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap, useGSAP, Reveal, useStagger, Icon, isMobile } from '../lib.jsx'
import { testimonials, services, clients, toolkit, profile, aboutMore } from '../data.js'

// Reviews
export function Reviews() {
  const ref = useRef(null)
  useStagger(ref, '.quote-card')
  return (
    <section className="section" id="reviews" data-nav="reviews" ref={ref}>
      <div className="sec-head">
        <div><div className="kicker">What clients say</div><Reveal className="h-display h-section">The Reviews</Reveal></div>
      </div>
      <div className="quotes-grid">
        {testimonials.slice(0, 4).map((t, k) => (
          <figure className={`quote-card ${t.featured ? 'featured' : ''}`} key={k} style={{ margin: 0 }}>
            <div className="quote-mark" aria-hidden="true">“</div>
            <p>{t.quote}</p>
            <figcaption className="quote-author">— {t.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

// Services
export function Services() {
  const ref = useRef(null)
  useStagger(ref, '.svc')
  return (
    <section className="section" id="services" data-nav="services" ref={ref}>
      <div className="sec-head">
        <div><div className="kicker">What I can cut for you</div><Reveal className="h-display h-section">Services</Reveal></div>
        <a href="#hire" className="btn btn-lime" onClick={(e) => { e.preventDefault(); document.getElementById('hire').scrollIntoView({ behavior: 'smooth' }) }}>Get a quote</a>
      </div>
      <div className="grid-3">
        {services.map((s, i) => (
          <article key={s.title} className={`svc ${s.featured ? 'featured' : ''}`}>
            {s.featured && <span className="pill">MOST BOOKED</span>}
            <div className="svc-num">{String(i + 1).padStart(2, '0')}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="deliver">{s.deliver}</div>
          </article>
        ))}
      </div>
    </section>
  )
}

// Clients
export function Clients() {
  const ref = useRef(null)
  useStagger(ref, '.client', { y: 30, stagger: 0.04 })
  const names = clients.map((c) => c.name)
  return (
    <section className="section" id="clients" data-nav="clients" ref={ref}>
      <div className="sec-head">
        <div><div className="kicker">Starring brands</div><Reveal className="h-display h-section">Top Clients</Reveal></div>
        <div className="stats">
          <div className="stat"><b>56+</b><small>CLIENTS</small></div>
          <div className="stat"><b>16+</b><small>INDUSTRIES</small></div>
        </div>
      </div>
      <div className="clients-grid">
        {clients.map((c, i) => (
          <div className="client" key={i}>
            {c.logo ? <img src={c.logo} alt={c.name} /> : <span>{c.name}</span>}
          </div>
        ))}
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">{[...names, ...names].map((n, i) => <span key={i}>{n}</span>)}</div>
      </div>
    </section>
  )
}

// Software & Tools
export function Toolkit() {
  const ref = useRef(null)
  useGSAP(() => {
    if (isMobile()) return
    gsap.from(ref.current.querySelector('.orbit-stage'), { scale: 0.9, opacity: 0, duration: 0.8, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } })
  }, { scope: ref })
  const count = toolkit.length
  return (
    <section className="section" id="softwares" data-nav="softwares" ref={ref}>
      <div className="sec-head">
        <div><Reveal className="h-display h-section">Software & Tools</Reveal></div>
        <p className="lede">The software and AI tools behind every cut, grade and frame.</p>
      </div>
      <div className="orbit-stage">
        <div className="orbit-ring-inner" aria-hidden="true" />
        <div className="orbit-center" aria-hidden="true">
          <svg className="timeline-svg" viewBox="0 0 240 160" fill="none">
            {/* Ruler ticks */}
            <line x1="12" y1="24" x2="228" y2="24" stroke="#2e2e36" strokeWidth="1" />
            {[20, 44, 68, 92, 116, 140, 164, 188, 212].map((x, idx) => (
              <line key={x} x1={x} y1={idx % 2 === 0 ? 15 : 19} x2={x} y2="24" stroke={idx % 2 === 0 ? '#8e8e94' : '#3a3a42'} strokeWidth="1.2" />
            ))}
            {/* Track labels */}
            <text x="12" y="49" fill="#8e8e94" fontSize="9" fontWeight="700" letterSpacing="1">V2</text>
            <text x="12" y="83" fill="#CDF704" fontSize="9" fontWeight="700" letterSpacing="1">V1</text>
            <text x="12" y="117" fill="#8e8e94" fontSize="9" fontWeight="700" letterSpacing="1">A1</text>
            {/* V2 track clips */}
            <rect x="36" y="36" width="66" height="20" rx="4" fill="#1e1e22" stroke="#3a3a42" strokeWidth="1" />
            <rect x="110" y="36" width="52" height="20" rx="4" fill="#171c05" stroke="#CDF704" strokeWidth="1.2" />
            <polygon points="122,46 126,42 130,46 126,50" fill="#CDF704" />
            <polygon points="144,46 148,42 152,46 148,50" fill="#CDF704" />
            <rect x="170" y="36" width="52" height="20" rx="4" fill="#1e1e22" stroke="#3a3a42" strokeWidth="1" />
            {/* V1 track clips */}
            <rect x="36" y="68" width="44" height="24" rx="4" fill="#2a2a2f" stroke="#44444d" strokeWidth="1" />
            <rect x="84" y="68" width="68" height="24" rx="4" fill="#CDF704" />
            <rect x="156" y="68" width="66" height="24" rx="4" fill="#2a2a2f" stroke="#44444d" strokeWidth="1" />
            <line x1="82" y1="66" x2="82" y2="94" stroke="#000" strokeWidth="1.5" />
            {/* A1 audio waveform track */}
            <rect x="36" y="102" width="186" height="22" rx="4" fill="#141417" stroke="#26262b" strokeWidth="1" />
            {[46, 54, 62, 70, 78, 86, 94, 102, 110, 118, 126, 134, 142, 150, 158, 166, 174, 182, 190, 198, 206, 214].map((x, idx) => {
              const h = [6, 12, 8, 14, 10, 5, 13, 16, 9, 14, 11, 7, 15, 10, 12, 6, 13, 9, 14, 8, 11, 5][idx]
              const active = x >= 84 && x <= 152
              return <rect key={x} x={x} y={113 - h / 2} width="3" height={h} rx="1.5" fill={active ? '#CDF704' : '#5a5a63'} />
            })}
            {/* Transport / Sequence icons */}
            <g transform="translate(88, 136)">
              <path d="M0 10L6 4M0 4L6 10" stroke="#8e8e94" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M24 2L32 7L24 12Z" fill="#CDF704" />
              <rect x="46" y="3" width="3" height="8" rx="1" fill="#8e8e94" />
              <rect x="52" y="3" width="3" height="8" rx="1" fill="#8e8e94" />
            </g>
            {/* Playhead */}
            <g className="timeline-playhead">
              <polygon points="112,8 122,8 122,16 117,22 112,16" fill="#CDF704" />
              <line x1="117" y1="22" x2="117" y2="128" stroke="#CDF704" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <div className="orbit-track">
          {toolkit.map((t, i) => (
            <div className="orbit-slot" key={t.name} style={{ '--angle': `${(360 / count) * i}deg` }}>
              <div className="orbit-node" title={t.name}>
                <img src={t.logo} alt={t.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// About — the Cast card
export function About({ brands }) {
  const ref = useRef(null)
  useGSAP(() => {
    if (isMobile()) return
    gsap.from('.about-figure circle', { strokeDashoffset: 1000, duration: 1.4, ease: 'power2.inOut', scrollTrigger: { trigger: ref.current, start: 'top 75%' } })
    gsap.from('.about-figure img', { clipPath: 'inset(100% 0 0 0)', duration: 1, ease: 'expo.out', scrollTrigger: { trigger: ref.current, start: 'top 75%' } })
    gsap.from(ref.current.querySelectorAll('.about-copy > *:not(.about-name)'), { y: 24, opacity: 0, duration: 0.75, ease: 'expo.out', stagger: 0.05, scrollTrigger: { trigger: ref.current, start: 'top 70%' } })
  }, { scope: ref })
  return (
    <>
    <section className="section about" id="about" data-nav="about" ref={ref}>
      <div className="about-figure">
        <svg viewBox="0 0 320 320" aria-hidden="true"><circle cx="160" cy="160" r="158" strokeDasharray="1000" /></svg>
        <img src="assets/kasi.png" alt={profile.name} />
      </div>
      <div className="about-copy">
        <div className="kicker">{profile.brand}</div>
        <Reveal className="h-display about-name">{profile.name.split(' ')}</Reveal>
        <div className="about-role">{profile.role}</div>
        <div className="about-bio">
          {(Array.isArray(profile.bio) ? profile.bio : [profile.bio]).map((para, i) => <p key={i}>{para}</p>)}
        </div>
        <div className="label">Starring in work for</div>
        <div className="chips">{brands.map((b, i) => <span className="chip" key={i}>{b}</span>)}</div>
      </div>
    </section>
    <AboutMore />
    </>
  )
}

function AboutMore() {
  const ref = useRef(null)
  useStagger(ref, '.fact')
  return (
    <section className="section about-more" data-nav="about" ref={ref}>
      <div className="facts">
        {aboutMore.facts.map((f) => <div className="fact" key={f.label}><small>{f.label}</small><b>{f.value}</b></div>)}
      </div>
    </section>
  )
}

// To Be Continued… — contact
export function Contact() {
  const ref = useRef(null)
  const [n, setN] = useState(5)
  const [showWa, setShowWa] = useState(false)
  const [showEmail, setShowEmail] = useState(false)
  const emailAddr = profile.email.replace(/^mailto:/, '')
  useEffect(() => { const t = setInterval(() => setN((v) => (v <= 1 ? 5 : v - 1)), 1000); return () => clearInterval(t) }, [])
  useGSAP(() => {
    if (isMobile()) return
    const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top 70%' } })
    tl.from('.tbc .ch', { yPercent: 120, opacity: 0, rotate: 8, duration: 0.75, ease: 'expo.out', stagger: 0.025 })
      .from('.contact-copy > *:not(.tbc)', { y: 20, opacity: 0, duration: 0.65, ease: 'expo.out', stagger: 0.06 }, '-=0.45')
  }, { scope: ref })
  const word = (w) => [...w].map((c, i) => <span className="ch" key={i}>{c === ' ' ? '\u00A0' : c}</span>)
  return (
    <>
      <section className="section contact" id="hire" data-nav="hire" ref={ref}>
        <div className="contact-copy">
          <h2 className="h-display tbc" aria-label="To be continued">
            <span style={{ display: 'block', overflow: 'hidden' }}>{word('TO BE')}</span>
            <span style={{ display: 'block', overflow: 'hidden' }}>{word('CONTINUED…')}</span>
          </h2>
          <p>…with your story. Let's make the next one together.</p>
          <div className="contact-btns">
            <a className="btn btn-lime" href={profile.instagram} target="_blank" rel="noreferrer"><Icon.Play size={18} fill="#000" />Start a project</a>
            {showWa ? (
              <a className="btn btn-ghost active" href={profile.whatsapp} target="_blank" rel="noreferrer"><Icon.Whatsapp size={20} />WhatsApp - 6383105697</a>
            ) : (
              <button type="button" className="btn btn-ghost" onClick={() => setShowWa(true)}><Icon.Whatsapp size={20} />WhatsApp</button>
            )}
            {showEmail ? (
              <a className="btn btn-ghost active" href={profile.email}><Icon.Mail size={20} />{emailAddr}</a>
            ) : (
              <button type="button" className="btn btn-ghost" onClick={() => setShowEmail(true)}><Icon.Mail size={20} />Email</button>
            )}
          </div>
          <div className="next-ep">
            <div style={{ position: 'relative', width: 46, height: 46 }}>
              <svg width="46" height="46" viewBox="0 0 46 46" aria-hidden="true">
                <circle cx="23" cy="23" r="20" fill="none" stroke="#3a3a40" strokeWidth="3" />
                <motion.circle key={n} cx="23" cy="23" r="20" fill="none" stroke="#CDF704" strokeWidth="3" strokeLinecap="round"
                  strokeDasharray="126" initial={{ strokeDashoffset: 0 }} animate={{ strokeDashoffset: 126 }} transition={{ duration: 1, ease: 'linear' }} />
              </svg>
              <span className="num">{n}</span>
            </div>
            <div><small>NEXT EPISODE</small><b>Your project</b></div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <img src="assets/sbk-logo.png" alt={profile.brand} />
        <span>© {new Date().getFullYear()} {profile.brand} · {profile.city}</span>
      </footer>
    </>
  )
}
