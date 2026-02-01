import { type SetStateAction } from 'react'
import { useFetch } from '../../hooks/useFetch'
import type { Genre } from '../../types/movieTypes'
import style from './GenreSelect.module.scss'

// Interface for GenreSelect komponentens props
// setSelectedGenre: Funktion til at opdatere valgt genre i parent komponent
interface GenreSelectProps {
  setSelectedGenre: React.Dispatch<SetStateAction<string>>
}

// Komponent som viser en liste af genrer som kan klikkes for at filtrere
export function GenreSelect({ setSelectedGenre }: GenreSelectProps) {
  // Henter alle genrer fra API
  const { data, isLoading, error } = useFetch<Array<Genre>>('http://localhost:3000/genre')

  // udskriver genre data til konsol
  console.log(data)

  // Viser loading besked mens data hentes
  if (isLoading) {
    return <p>Loading genres...</p>
  }

  // Viser fejlbesked hvis der opstår en fejl under hentning
  if (error) {
    return <b>Error: {error}</b>
  }

  return (
    // Rendrer genrer som en liste i et aside element
    <aside>
      <ul className={style.genreStyle}>
        {/* Løber gennem alle genrer og opretter list item for hver */}
        {data?.map((item) => {
          return (
            // Hver genre kan klikkes for at opdatere selectedGenre i parent komponent
            <li key={item.id} onClick={() => setSelectedGenre(item.slug)}>
              {item.title}
            </li>
          )
        })}
      </ul>
    </aside>
  )
}