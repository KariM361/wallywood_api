import style from './Footer.module.scss'
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export function Footer() {
  return (
    <footer className={style.footerStyle}>
      <section>
        <div>
          <h3>WALLYWOOD</h3>
          <p>Øster Uttrupvej 1</p>
          <p>9000 Aalborg</p>
        </div>
        <div>
          <p>CVR: 123512512</p>
          <p>Mail: info@plakatshoppen.dk</p>
          <p>MOBIL: +45 1232 2323</p>
        </div>
      </section>
      <section>
        <p><FaPinterestSquare /></p>
        <p><FaInstagram /></p>
        <p><AiFillFacebook /></p>
        <p><FaTwitterSquare /></p>
      </section>
    </footer>
  )
}