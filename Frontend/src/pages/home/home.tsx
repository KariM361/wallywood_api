import { useEffect, useState } from 'react'
import curtainImage from '../../assets/images/curtain.jpg'
import { Title } from '../../Components/Title/Title'
import style from './home.module.scss'
import type { MovieData } from '../../types/movieTypes'
import parse from 'html-react-parser'

export function Home() {
  const [movieData, setMovieData] = useState<Array<MovieData>>()

  useEffect(() => {
    const url = 'http://localhost:3000/posters?sort_key=random&limit=2&attributes=id,name,description,image'
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovieData(data))
  }, [])

  return (
    <>
      <img className={style.homePageImage} src={curtainImage} alt='curtain_image'></img>
      <Title text={'Sidste nyt...'} />

    <section className={style.mainCard}>
      {movieData &&
        movieData.map((item) => {
          return (
            <div className={style.cardImage} key={item.id}>
              <img width='200px' src={item.image}></img>
              <div className={style.textCard}>
              <h4>{item.name}</h4>
              <div>{parse(item.description)}</div>
              <button className={style.homebutton}>Læs mere</button>
              </div>
            </div>

          )
        })}
        </section>
    </>
  )
}