import star from '../../assets/images/star.jpg'
import style from './about.module.scss'
import { Grid } from '../../Components/Grid/Grid'
import { Title } from '../../Components/Title/Title'


export function About() {
  return (
    <Grid gtc='1fr 1fr' gap={32}>
      <section>
        <Title text={'Om os'} />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit tempora modi architecto autem provident...</p>
        <p>Fugit officiis non dolor quas similiqu Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        <p>Doloremque ab accusantium ex similique </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque ac ipsum sed faucibus. Vivamus mollis sagittis hendrerit. Donec turpis erat, vestibulum non turpis sed, finibus congue velit. Pellentesque sagittis est eget nisi malesuada, a aliquet est imperdiet. Aenean dapibus finibus laoreet. Pellentesque suscipit hendrerit enim, non tempor erat sodales quis. Nullam sed enim eu elit posuere commodo at în nisl. Aliquam egestas turpis vel odio consectetur auctor. Cras porttitor orci non scelerisque porttitor. Phasellus dictum ligula rutrum neque pharetra, faucibus molestie libero ultricies. Aenean risus risus, sollicitudin at rutrum vel, venenatis ac urna. Phasellus a pulvinar massa. Phasellus faucibus libero eu malesuada tristique. Donec tristique lacus in ipsum sollicitudin viverra. Sed porttitor sit amet felis accumsan egestas. Fusce quis commodo urna, non feugiat odio. Nam in tempus magna. Quisque eu neque sed lacus egestas pulvinar eget in lacus. Quisque sit amet sem efficitur sapien bibendum mollis. Quisque in eros sit amet justo scelerisque rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque ac ipsum sed faucibus. Vivamus mollis sagittis hendrerit. Donec turpis erat, vestibulum non turpis sed, finibus congue velit. Pellentesque sagittis est eget nisi malesuada, a aliquet est imperdiet. Aenean dapibus finibus laoreet. Pellentesque suscipit hendrerit enim, non tempor erat sodales quis.</p>
        <p>Dlor sit amet consectetur adipisicing elit. Assumenda nesciunt itaque, quasi maxime esse minus, quia doloremque voluptate optio, id quas libero sapiente sunt illo dolores unde nisi ullam voluptatum?</p>
      </section>
      <section className={style.imageSection}>
        <img className={style.starImg} src={star} alt="star" />
      </section>
    </Grid>
  )
}