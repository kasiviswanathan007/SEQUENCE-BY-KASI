# SBK — Sequence by Kasi · portfolio site

Streaming-style portfolio built with **React + Vite**, animated with **GSAP (ScrollTrigger)**, **Framer Motion** and **Lenis** smooth scroll.

## Run it on localhost

You need Node.js 18 or newer (`node -v` to check; get it from nodejs.org).

```bash
cd "path/to/sbk website 2"
npm install        # first time only
npm run dev        # opens on http://localhost:5173
```

The intro and "Who's watching?" screens play once per browser tab. To see them again, open `http://localhost:5173/?intro`.

## Put your content in

Everything is in **`src/data.js`**: your name, links, work rows, services, clients, reviews and software.

| What | Where it goes | Then set in `src/data.js` |
|---|---|---|
| Showreel (muted loop in the hero + Play Reel) | `public/assets/showreel.mp4` | already pointed at this path |
| Project thumbnails | `public/assets/work/…jpg` | `thumb: 'assets/work/reel-01.jpg'` |
| Hover previews (3–5 sec, silent) | `public/assets/work/…mp4` | `preview: 'assets/work/reel-01.mp4'` |
| Full project video | mp4 in `public/assets/work/`, or a YouTube/Vimeo embed URL | `video: '…'` |
| Client logos | `public/assets/clients/…png` | `logo: 'assets/clients/name.png'` |
| WhatsApp / email / socials | — | `profile.whatsapp`, `profile.email`, `profile.socials` |

Anything left empty shows a styled placeholder, so the site never looks broken.

## Animations included

- Intro sting: logo blur-in, lime wipe, name-tag reveal
- Who's watching?: staggered tiles; your pick decides which work row comes first
- Hero: lime ring draws in, portrait rises, title lines reveal, parallax on scroll
- Nav: sliding lime underline follows the section you're in; mobile menu opens with a circular reveal
- Work rows: cards slide in; hover a card to pop it up with a preview; click to open the project page
- Top Moments flip up; Services lift with a lime glow; client tiles fill lime on hover with a scrolling name marquee
- Reviews: draggable carousel with arrows
- Toolkit: skill bars fill on scroll
- To Be Continued…: letter-by-letter reveal and a looping "next episode" countdown
- Custom lime cursor (desktop), film grain, smooth scrolling. All motion is reduced if the visitor has "reduce motion" on.

## Publish

`npm run build` creates a `dist/` folder you can drag into Netlify, Vercel or any static host.
