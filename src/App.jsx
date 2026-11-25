import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useSmoothScroll, useActiveSection, ScrollTrigger } from './lib.jsx'
import { workRows, nav, clients } from './data.js'
import { Intro, Profiles } from './components/Intro.jsx'
import { Nav, Cursor } from './components/Nav.jsx'
import { Hero } from './components/Hero.jsx'
import { Work, ProjectModal } from './components/Work.jsx'
import { Reviews, Services, Clients, Toolkit, About, Contact } from './components/Sections.jsx'

// stage: intro → profiles → site  (intro + picker show once per browser session)
const seen = () => { try { return sessionStorage.getItem('sbk-seen') === '1' && !location.search.includes('intro') } catch { return false } }

export default function App() {
  const [stage, setStage] = useState(seen() ? 'site' : 'intro')
  const [pick, setPick] = useState(null)
  const [project, setProject] = useState(null)

  useSmoothScroll(stage === 'site')
  const ids = useMemo(() => [...nav.map((n) => n.id), 'hire'], [])
  const active = useActiveSection(ids, stage === 'site')

  useEffect(() => { document.body.classList.toggle('locked', stage !== 'site') }, [stage])
  useEffect(() => { if (stage === 'site') setTimeout(() => ScrollTrigger.refresh(), 300) }, [stage])

  const rows = useMemo(() => {
    if (!pick?.first) return workRows
    const f = workRows.find((r) => r.id === pick.first)
    return [f, ...workRows.filter((r) => r !== f)]
  }, [pick])

  const onPick = (p) => {
    setPick(p)
    try { sessionStorage.setItem('sbk-seen', '1') } catch { /* private mode */ }
    setStage('site')
  }
  const closeProject = useCallback(() => setProject(null), [])

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Cursor />
      {stage === 'intro' && <Intro onDone={() => setStage('profiles')} />}
      <AnimatePresence>{stage === 'profiles' && <Profiles onPick={onPick} />}</AnimatePresence>

      {stage === 'site' && (
        <>
          <Nav active={active} />
          <main>
            <Hero />
            <Clients />
            <Work rows={rows} onOpen={setProject} />
            <Reviews />
            <Services />
            <Toolkit />
            <About brands={clients.slice(0, 5).map((c) => c.name)} />
            <Contact />
          </main>
          <ProjectModal item={project} onClose={closeProject} />
        </>
      )}
    </>
  )
}
