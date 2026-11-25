import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { gsap, useGSAP, Icon, Media, lockScroll, isMobile } from '../lib.jsx'

const ease = [0.22, 1, 0.36, 1]

// 04 · Work — streaming rows, hover-to-preview cards, project modal
export function Work({ rows, onOpen }) {
  const ref = useRef(null)
  useGSAP(() => {
    if (isMobile()) return
    ref.current.querySelectorAll('.row').forEach((row) => {
      gsap.from(row.querySelectorAll('.row-head, .card'), {
        x: 40, opacity: 0, duration: 0.6, ease: 'expo.out', stagger: 0.03,
        scrollTrigger: { trigger: row, start: 'top 92%' },
      })
    })
  }, { scope: ref, dependencies: [rows] })
  return (
    <section className="work" id="work" data-nav="work" ref={ref}>
      {rows.map((r) => <Row key={r.id} row={r} onOpen={onOpen} />)}
    </section>
  )
}

function Row({ row, onOpen }) {
  const track = useRef(null)
  const [edge, setEdge] = useState({ l: true, r: false })
  const update = () => {
    const t = track.current
    if (t) setEdge({ l: t.scrollLeft < 8, r: t.scrollLeft + t.clientWidth > t.scrollWidth - 8 })
  }
  useEffect(update, [])
  const nudge = (d) => track.current.scrollBy({ left: d * track.current.clientWidth * 0.8, behavior: 'smooth' })
  return (
    <div className="row">
      <div className="row-head"><h3>{row.title}</h3><span className="count">{row.items.length} edits</span></div>
      <button className="row-arrow l" aria-label={`Scroll ${row.title} left`} disabled={edge.l} onClick={() => nudge(-1)}><Icon.Left size={30} /></button>
      <div className="row-track" ref={track} onScroll={update}>
        {row.items.map((it) => <Card key={it.id} item={it} vertical={row.vertical} cat={row.title} onOpen={onOpen} />)}
      </div>
      <button className="row-arrow r" aria-label={`Scroll ${row.title} right`} disabled={edge.r} onClick={() => nudge(1)}><Icon.Right size={30} /></button>
    </div>
  )
}

function Card({ item, vertical, cat, onOpen }) {
  const [hover, setHover] = useState(false)
  const timer = useRef(null)
  const touch = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches
  const enter = () => { if (touch) return; timer.current = setTimeout(() => setHover(true), 140) }
  const leave = () => { clearTimeout(timer.current); setHover(false) }
  const open = () => onOpen({ ...item, cat })
  const cover = item.thumb ? <Media src={item.thumb} label={item.title} /> : (item.preview || item.video) ? <Media src={`${item.preview || item.video}#t=0.5`} video lazy label={item.title} /> : <Media src="" label={item.title} />
  const hoverSrc = item.preview || item.video
  return (
    <div className={`card ${vertical ? 'v' : ''}`} style={{ zIndex: hover ? 30 : 1 }} onMouseEnter={enter} onMouseLeave={leave}>
      <button className="card-inner" onClick={open} aria-label={`Open ${item.title}`}>
        <div className="card-media">{cover}</div>
      </button>
      <AnimatePresence>
        {hover && (
          <motion.div className="card-pop" initial={{ opacity: 0, scale: 0.85, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-58%' }} exit={{ opacity: 0, scale: 0.9, x: '-50%', y: '-50%' }}
            transition={{ duration: 0.2, ease }}>
            <button className="card-pop-media" style={{ display: 'block', width: '100%' }} onClick={open} aria-label={`Open ${item.title}`}>
              {hoverSrc ? <Media src={hoverSrc} video play label={item.title} /> : <Media src={item.thumb} label={item.title} />}
              <span className="preview-tag">PREVIEW</span>
            </button>
            <div className="card-pop-body">
              <div className="card-pop-actions">
                <button className="icon-btn solid" aria-label="Play" onClick={open}><Icon.Play size={14} fill="#000" /></button>
                <button className="icon-btn" aria-label="More info" onClick={open}><Icon.Down size={14} /></button>
              </div>
              <div className="card-pop-title">{item.title}</div>
              <div className="card-pop-meta"><span className="c">{item.client}</span>{item.year && <span>· {item.year}</span>}{item.duration && <span>· {item.duration}</span>}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const isEmbed = (u) => /youtube|youtu\.be|vimeo/.test(u || '')

export function ProjectModal({ item, onClose }) {
  const [playing, setPlaying] = useState(true)
  useEffect(() => {
    if (!item) return
    lockScroll(true); setPlaying(Boolean(item.video))
    const k = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    return () => { lockScroll(false); window.removeEventListener('keydown', k) }
  }, [item, onClose])
  return (
    <AnimatePresence>
      {item && (
        <motion.div className="modal-wrap" data-lenis-prevent initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} onClick={onClose}>
          <motion.div className="modal" role="dialog" aria-modal="true" aria-label={item.title} onClick={(e) => e.stopPropagation()}
            initial={{ y: 36, scale: 0.96, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: 24, scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.26, ease }}>
            <div className="modal-media">
              {playing && item.video ? (
                isEmbed(item.video)
                  ? <iframe src={item.video} title={item.title} allow="autoplay; fullscreen" allowFullScreen />
                  : <video src={item.video} controls autoPlay playsInline />
              ) : (
                <>
                  {item.thumb || !item.video ? <Media src={item.thumb} label="" /> : <Media src={`${item.video}#t=0.5`} video label="" />}
                  <button className="modal-play" aria-label="Play video" onClick={() => setPlaying(true)}><Icon.Play size={30} fill="#000" /></button>
                  <h2 className="h-display modal-title">{item.title}</h2>
                </>
              )}
              <button className="modal-close" aria-label="Close" onClick={onClose}><Icon.Close size={20} /></button>
            </div>
            <div className="modal-body modal-body-simple">
              {playing && item.video && <div className="modal-fact"><span>Project</span><b>{item.title}</b></div>}
              <div className="modal-fact client"><span>Client</span><b>{item.client}</b></div>
              <div className="modal-fact"><span>Software used</span><b>{item.tools}</b></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function ReelPlayer({ open, src, onClose }) {
  useEffect(() => {
    if (!open) return
    lockScroll(true)
    const k = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    return () => { lockScroll(false); window.removeEventListener('keydown', k) }
  }, [open, onClose])
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="modal-wrap" style={{ alignItems: 'center', background: 'rgba(0,0,0,.94)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div style={{ position: 'relative', width: 'min(1200px, 100%)', aspectRatio: '16/9', background: '#111', borderRadius: 8, overflow: 'hidden' }}
            initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} transition={{ duration: 0.5, ease }} onClick={(e) => e.stopPropagation()}>
            <video src={src} controls autoPlay playsInline style={{ width: '100%', height: '100%' }} />
            <div className="ph" style={{ zIndex: -1, justifyContent: 'center', alignItems: 'center', fontSize: 14 }}>Add your showreel at public/assets/showreel.mp4</div>
            <button className="modal-close" aria-label="Close" onClick={onClose}><Icon.Close size={20} /></button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
