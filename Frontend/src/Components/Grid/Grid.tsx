import style from './Grid.module.scss'

// Interface for Grid komponentens props
// gtr: Grid Template Rows - antal rækker (valgfri)
// gtc: Grid Template Columns - antal kolonner (valgfri)
// gap: Afstand mellem grid items i pixels
// children: Indholdet som skal vises i gridet
interface GridProps {
  gtr?: number | string
  gtc?: number | string
  gap: number
  children: React.ReactNode
}

// Grid komponent som opretter CSS Grid med dynamiske kolonner og rækker
export function Grid({ gtr, gtc, gap, children }: GridProps) {
  // Variabel til at holde dynamiske CSS styles
  let cName

  // Hvis gtc er string, behandl det som CSS-værdi direkte (fx "1fr 4fr")
  // Hvis gtc er number, brug repeat syntax (fx repeat(3, 1fr))
  const getGridColumn = (value?: number | string) => {
    if (typeof value === 'string') return value
    if (typeof value === 'number') return `repeat(${value}, 1fr)`
    return undefined
  }

  const getGridRow = (value?: number | string) => {
    if (typeof value === 'string') return value
    if (typeof value === 'number') return `repeat(${value}, 1fr)`
    return undefined
  }

  const gridTemplateColumns = getGridColumn(gtc)
  const gridTemplateRows = getGridRow(gtr)

  // Hvis både rækker og kolonner er specificeret - brug begge
  if (gridTemplateColumns && gridTemplateRows) {
    cName = { gridTemplateColumns, gridTemplateRows, gap: gap + 'px' }
  } 
  // Hvis kun kolonner er specificeret
  else if (gridTemplateColumns) {
    cName = { gridTemplateColumns, gap: gap + 'px' }
  } 
  // Hvis kun rækker er specificeret
  else if (gridTemplateRows) {
    cName = { gridTemplateRows, gap: gap + 'px' }
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