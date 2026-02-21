import star from '../../assets/images/star.jpg'
import style from './about.module.scss'
import { Grid } from '../../Components/Grid/Grid'
import { Title } from '../../Components/Title/Title'
import '../../styles/_globals.scss'

export function About() {
  return (
    <Grid className={style.aboutGrid}>
      <section className={style.textSection}>
        <Title text={'Om os'} />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
        <p>Tempora modi architecto autem provident...</p>
        <p>Fugit officiis non dolor quas similique...</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        <p>Doloremque ab accusantium ex similique...</p>
      </section>

      <section className={style.imageSection}>
        <img className={style.starImg} src={star} alt="star" />
      </section>
    </Grid>
  )
}