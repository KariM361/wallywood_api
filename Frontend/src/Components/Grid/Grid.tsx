import style from './Grid.module.scss'

// Interface for Grid komponentens props
// gtr: Grid Template Rows - antal rækker (valgfri)
// gtc: Grid Template Columns - antal kolonner (valgfri)
// gap: Afstand mellem grid items i pixels
// children: Indholdet som skal vises i gridet
interface GridProps {
  gtr?: number
  gtc?: number
  gap: number
  children: React.ReactNode
}

// Grid komponent som opretter CSS Grid med dynamiske kolonner og rækker
export function Grid({ gtr, gtc, gap, children }: GridProps) {
  // Variabel til at holde dynamiske CSS styles
  let cName

  // Hvis både rækker og kolonner er specificeret - brug begge
  if (gtc && gtr) {
    cName = { gridTemplateColumns: `repeat(${gtc}, 1fr)`, gridTemplateRows: `repeat(${gtr}, 1fr)`, gap: gap + 'px' }
  } 
  // Hvis kun kolonner er specificeret
  else if (gtc) {
    cName = { gridTemplateColumns: `repeat(${gtc}, 1fr)`, gap: gap + 'px' }
  } 
  // Hvis kun rækker er specificeret
  else if (gtr) {
    cName = { gridTemplateRows: `repeat(${gtr}, 1fr)`, gap: gap + 'px' }
  } 
  // Default: items flyder horisontalt uden fast layout
  else {
    cName = { gridAutoFlow: 'column', gap: gap + 'px' }
  }

  return (
    // Rendrer et section element med CSS Grid styling og children
    <section className={style.gridStyle} style={cName}>
      {children}
    </section>
  )
}