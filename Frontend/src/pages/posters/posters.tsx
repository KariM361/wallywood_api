import { Poster } from '../../Components/Poster/Poster'
import { useFetch } from '../../hooks/useFetch'
import { useState } from 'react'
import type { MovieData } from '../../types/movieTypes'
import { Grid } from '../../Components/Grid/Grid'
import { Dropdown } from '../../Components/Dropdown/Dropdown'
import style from '../posters/posters.module.scss'

export function Posters() {
  const [selectedGenre, setSelectedGenre] = useState('komedie')
  const [SelectedSort, setSelectedSort] = useState('asc')

  const { data, isLoading, error } = useFetch<Array<MovieData>>(
    `http://localhost:3000/posters/list_by_genre/${selectedGenre}`,
  )

  if (isLoading) {
    return <h1>Loading data......</h1>
  }

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <>
      <Dropdown setSelectedSort={setSelectedSort} />
      <h1><b>Plakater</b></h1>
      <h3><b>Filtre</b></h3>
      <ul className={style.genreSort}>
        <p>Genre</p>
        <li onClick={() => setSelectedGenre('drama')}>Drama</li>
        <li onClick={() => setSelectedGenre('gysere')}>Gyser</li>
        <li onClick={() => setSelectedGenre('adventure')}>Adventure</li>
        <li onClick={() => setSelectedGenre('dokumentar')}>Dokumentar</li>
        <li onClick={() => setSelectedGenre('karatefilm')}>karatefilm</li>
        <li onClick={() => setSelectedGenre('komedie')}>Komedie</li>
        <li onClick={() => setSelectedGenre('Krigsfilm')}>Krigsfilm</li>
        <li onClick={() => setSelectedGenre('krimi-Thriller')}>Krimi-Thriller</li>
        <li onClick={() => setSelectedGenre('action')}>Action</li>


      </ul>
      <Grid gtc={3} gtr={3} gap={32}>
        {data?.map((item) => {
          return <Poster imageUrl={item.image} id={item.id} genres={item.genres} title={item.name} />
        })}
      </Grid>
    </>
  )
}