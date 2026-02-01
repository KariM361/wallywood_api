import { Outlet } from 'react-router'
import { Navbar } from '../Components/NavBar/navbar'
import { Footer } from '../Components/Footer/Footer'
import style from './MainLayout.module.scss'

export function MainLayout() {
  const links = [
    { name: 'home', path: '/' },
    { name: 'plakater', path: '/posters' },
    { name: 'om os', path: '/about' },
    { name: 'kontakt', path: '/contact' },
    { name: 'login', path: '/login' },
  ]

  return (
    <section className={style.pageContainer}>
      <Navbar logoNav='WALLYWOOD' linksNav={links} />
      <Outlet />
      <Footer />
    </section>
  )
}