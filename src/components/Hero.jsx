import { useRef, useState } from 'react'
import { gsap, useGSAP, Icon, scrollToId, isMobile } from '../lib.jsx'
import { profile } from '../data.js'

// 03 · Home — showreel behind, portrait in lime ring, title rise, parallax on scroll
export function Hero() {
  const ref = useRef(null)
  const [reelOk, setReelOk] = useState(Boolean(profile.showreel))
  useGSAP(() => {
    if (isMobile()) return
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
    tl.from('.hero-bg', { scale: 1.15, opacity: 0, duration: 1.8 })
      .from('.hero-ring circle', { strokeDashoffset: 1000, duration: 1.8, ease: 'power2.inOut' }, 0.2)
      .from('.hero-figure img', { yPercent: 18, opacity: 0, duration: 1.4 }, 0.35)
      .from('.hero-tag', { x: -30, opacity: 0, duration: 0.9 }, 0.6)
      .from('.hero-title .split-line > span', { yPercent: 110, duration: 1.2, stagger: 0.1 }, 0.65)
      .from(['.hero-copy p', '.hero-meta', '.hero-btns'], { y: 24, opacity: 0, duration: 1, stagger: 0.1 }, 0.95)
      .from('.hero-scroll', { opacity: 0, duration: 1 }, 1.2)

    const mm = gsap.matchMedia()
    mm.add('(min-width: 961px)', () => {
      const st = { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true }
      gsap.to('.hero-figure', { yPercent: 14, ease: 'none', scrollTrigger: st })
      gsap.to('.hero-copy', { yPercent: -30, opacity: 0, ease: 'none', scrollTrigger: st })
      gsap.to('.hero-bg', { scale: 1.12, ease: 'none', scrollTrigger: st })
    })
  }, { scope: ref })

  return (
    <section className="hero" id="home" data-nav="home" ref={ref}>
      <div className="hero-bg">
        {reelOk && <video src={profile.showreel} autoPlay muted loop playsInline onError={() => setReelOk(false)} />}
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
