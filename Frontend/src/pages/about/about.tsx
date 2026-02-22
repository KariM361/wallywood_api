import star from '../../assets/images/star.jpg'
import style from './about.module.scss'
import { Grid } from '../../Components/Grid/Grid'
import { Title } from '../../Components/Title/Title'


export function About() {
  return (
    <Grid gtc='1fr 1fr' gap={32}>
      <section>
        <Title text={'Om os'} />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
        <p>Tempora modi architecto autem provident...</p>
        <p>Fugit officiis non dolor quas similique...</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        <p>Doloremque ab accusantium ex similique...</p>

        <p>Dlor sit amet consectetur adipisicing elit. Assumenda nesciunt itaque, quasi maxime esse minus, quia doloremque voluptate optio, id quas libero sapiente sunt illo dolores unde nisi ullam voluptatum?</p>
      </section>
      <section className={style.imageSection}>
        <img className={style.starImg} src={star} alt="star" />
      </section>
    </Grid>
  )
}