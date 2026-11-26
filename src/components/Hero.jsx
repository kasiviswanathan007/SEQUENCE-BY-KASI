import { useRef } from 'react'
import { gsap, useGSAP, Icon, scrollToId, isMobile } from '../lib.jsx'
import { profile } from '../data.js'

// 03 · Home — black backdrop with minimal editing texture, portrait in lime ring, title rise
export function Hero() {
  const ref = useRef(null)
  useGSAP(() => {
    if (isMobile()) return
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
    tl.from('.hero-bg', { opacity: 0, duration: 1.0 })
      .from('.hero-ring circle', { strokeDashoffset: 1000, duration: 1.4, ease: 'power2.inOut' }, 0.15)
      .from('.hero-figure img', { yPercent: 12, opacity: 0, duration: 1.1 }, 0.25)
      .from('.hero-tag', { x: -24, opacity: 0, duration: 0.7 }, 0.4)
      .from('.hero-title .split-line > span', { yPercent: 110, duration: 0.9, stagger: 0.08 }, 0.45)
      .from(['.hero-copy p', '.hero-meta', '.hero-btns'], { y: 20, opacity: 0, duration: 0.8, stagger: 0.08 }, 0.7)
      .from('.hero-scroll', { opacity: 0, duration: 0.8 }, 0.9)
  }, { scope: ref })

  return (
    <section className="hero" id="home" data-nav="home" ref={ref}>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-ruler" />
        <div className="hero-safe-frame" />
      </div>
      <div className="hero-fade-l" />
      <div className="hero-figure">
        <svg className="hero-ring" viewBox="0 0 320 320" aria-hidden="true"><circle cx="160" cy="160" r="158" strokeDasharray="1000" /></svg>
        <img src="assets/kasi.png" alt={profile.name} />
      </div>
      <div className="hero-fade-b" />
      <div className="hero-copy">
        <div className="kicker hero-tag">{profile.role}</div>
        <h1 className="h-display hero-title">
          <span className="split-line"><span>Hi, I'm</span></span>
          <span className="split-line"><span className="lime">Kasi</span></span>
          <span className="split-line"><span className="lime">Viswanathan</span></span>
        </h1>
        <p>{profile.brief}</p>
        <div className="hero-meta"><span>Reels</span><span>AI Commercials</span><span>Trailers</span><span>Corporate</span><span>Brand Films</span></div>
        <div className="hero-btns">
          <button className="btn btn-white" onClick={() => scrollToId('services')}><Icon.Brief size={18} />Services</button>
          <button className="btn btn-glass" onClick={() => scrollToId('about')}><Icon.Info size={20} />About me</button>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true" />
    </section>
  )
}
