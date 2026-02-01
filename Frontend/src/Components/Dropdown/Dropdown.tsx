import type { SetStateAction } from 'react'
import style from './Dropdown.module.scss'

// Interface for Dropdown komponentens props
// setSelectedSort: Funktion til at opdatere sorteringsmetode i parent komponent
interface DropDownProps {
  setSelectedSort: React.Dispatch<SetStateAction<string>>
}

// Komponent som viser en dropdown menu til at sortere plakater
export function Dropdown({ setSelectedSort }: DropDownProps) {
  return (
    // Select element som kalder setSelectedSort når bruger vælger en option
    <select className={style.selectBox} onChange={(event) => setSelectedSort(event.target.value)}>
      {/* Default placeholder option */}
      <option defaultValue={'asc'}>Sorter efter</option>
      {/* Sorterings muligheder */}
      <option value='asc'>Pris - stigende</option>
      <option value='desc'>Pris - faldende</option>
      <option value='name'>Titel</option>
    </select>
  )
}