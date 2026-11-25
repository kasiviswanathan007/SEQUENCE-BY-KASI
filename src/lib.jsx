import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, useGSAP)
export { gsap, ScrollTrigger, useGSAP }

// ── smooth scroll (Lenis) wired into GSAP's ticker ──
let lenis = null
export function useSmoothScroll(enabled) {
  useEffect(() => {
    if (!enabled) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (t) => lenis.raf(t * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    return () => { gsap.ticker.remove(tick); lenis.destroy(); lenis = null }
  }, [enabled])
}
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  const offset = window.innerWidth <= 960 ? -60 : -72
  if (lenis) lenis.scrollTo(el, { offset: id === 'home' ? 0 : offset, duration: 1.4 })
  else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset, behavior: 'smooth' })
}
export function lockScroll(lock) {
  document.body.classList.toggle('locked', lock)
  if (lenis) lock ? lenis.stop() : lenis.start()
}

// ── which section is on screen ──
export function useActiveSection(ids, ready = true) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.dataset.nav || e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    document.querySelectorAll('[data-nav]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids, ready])
  return active
}

// ── heading that rises in line by line ──
export function Reveal({ as: Tag = 'h2', className = '', children, delay = 0 }) {
  const ref = useRef(null)
  useGSAP(() => {
    gsap.from(ref.current.querySelectorAll('.split-line > span'), {
      yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: 0.08, delay,
      scrollTrigger: { trigger: ref.current, start: 'top 85%' },
    })
  }, { scope: ref })
  const lines = Array.isArray(children) ? children : [children]
  return (
    <Tag ref={ref} className={className}>
      {lines.map((l, i) => <span className="split-line" key={i}><span>{l}</span></span>)}
    </Tag>
  )
}

// ── fade/rise a group of children on scroll ──
export function useStagger(scope, selector, opts = {}) {
  useGSAP(() => {
    const els = scope.current?.querySelectorAll(selector)
    if (!els?.length) return
    gsap.from(els, {
      y: 60, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08,
      scrollTrigger: { trigger: scope.current, start: 'top 80%' }, ...opts,
    })
  }, { scope })
}

// ── image/video with styled placeholder fallback ──
export function Media({ src, label, video = false, play = false }) {
  const [ok, setOk] = useState(Boolean(src))
  const vref = useRef(null)
  useEffect(() => {
    const v = vref.current
    if (!v) return
    play ? v.play().catch(() => {}) : (v.pause(), (v.currentTime = 0))
  }, [play])
  if (!ok) return <div className="ph">{label}<Icon.Play className="ph-play" size={30} fill="#fff" /></div>
  if (video) return <video ref={vref} src={src} muted loop playsInline preload="metadata" onError={() => setOk(false)} />
  return <img src={src} alt={label || ''} loading="lazy" onError={() => setOk(false)} />
}

// ── icons (inline stroke svg) ──
const S = (p) => ({ width: p.size || 20, height: p.size || 20, viewBox: '0 0 24 24', 'aria-hidden': true, className: p.className })
export const Icon = {
  Play: (p) => <svg {...S(p)} fill={p.fill || 'currentColor'}><path d="M7 4v16l13-8z" /></svg>,
  Info: (p) => <svg {...S(p)} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>,
  Close: (p) => <svg {...S(p)} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6 6 18" /></svg>,
  Menu: (p) => <svg {...S(p)} fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h10" /></svg>,
  Left: (p) => <svg {...S(p)} fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 6-6 6 6 6" /></svg>,
  Right: (p) => <svg {...S(p)} fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 6 6 6-6 6" /></svg>,
  Down: (p) => <svg {...S(p)} fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>,
  Sound: (p) => <svg {...S(p)} fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5 6 9H2v6h4l5 4z" /><path d="M15.5 8.5a5 5 0 0 1 0 7" /></svg>,
  Film: (p) => <svg {...S(p)} fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M10 9v6l5-3z" /></svg>,
  Instagram: (p) => <svg {...S(p)} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" /></svg>,
  Whatsapp: (p) => <svg {...S(p)} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z" /></svg>,
  Mail: (p) => <svg {...S(p)} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>,
  Brief: (p) => <svg {...S(p)} fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>,
  Team: (p) => <svg {...S(p)} fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="9" cy="8" r="3.5" /><circle cx="17" cy="9" r="2.5" /><path d="M2.5 20c.8-3.6 3.3-5.5 6.5-5.5s5.7 1.9 6.5 5.5" /><path d="M16 14.6c2.6.2 4.4 1.9 5 5.4" /></svg>,
  Phone: (p) => <svg {...S(p)} fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="7" y="2.5" width="10" height="19" rx="2" /><path d="M11 8.5v5l4-2.5z" /></svg>,
  Compass: (p) => <svg {...S(p)} fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></svg>,
}
