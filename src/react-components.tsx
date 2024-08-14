import type { ReactNode } from "react"
import { marked } from 'marked'

const navSections = {
  current: "Current",
  philosophy: "Philosophy",
  writing: "Writing",
  prototypes: "Prototypes",
  games: "Games",
  background: "Background",
}

export function Nav({ active }: { active: keyof typeof navSections }) {
  return <div className="nav" id={active}>
    {Object.entries(navSections).map(([key, title]) => (
      (active === key ? <b>{title}</b> : <a href={`#${key}`}>{title}</a>)
    ))}
  </div>
}

export function Text({ children }: { children: string }) {
  return <article dangerouslySetInnerHTML={{
    __html: marked(children, { async: false })
  }} />
}

export function Work({
  title,
  year,
  link,
  children,
  otherAuthors,
  footer,
}: {
  title: string,
  year: number,
  link: string,
  children: ReactNode,
  otherAuthors?: string,
  footer?: ReactNode
}) {
  return <p><a className="essay" href={link}>
    <b>{title} ({year})</b>{otherAuthors && `; with ${otherAuthors}`} <i>{children}</i> {footer && <>({footer})</>}
  </a></p>
}

export function Me() {
  return <center id="welcome">
    <div className="me">
      <h2>Joe Edelman</h2>
      <div className="facebox">
        <img className="face" src="/me.jpg" />
        <div className="col">
          <a target="_" className="icon" href="http://twitter.com/edelwax"> <img src="https://twitter.com/favicon.ico" /> </a>
          <a target="_" className="icon" href="http://github.com/jxe"> <img src="https://github.com/favicon.ico" /> </a>
          <a target="_" className="icon" href="https://scholar.google.com/citations?hl=en&user=ZCQjxd4AAAAJ"> <img
            src="https://scholar.google.com/favicon.ico" /> </a>
        </div>
      </div>
    </div>
  </center>
}
