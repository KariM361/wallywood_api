import styles from './navbar.module.scss'


export const Nav = () => {

        return (
                <>
                        <nav>
                                <ul className={styles.ul}>
                                        <li><span>WALLYWOOD</span></li>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Plakater</a></li>
                                        <li><a href="#">Om os</a></li>
                                        <li><a href="#">Kontakt</a></li>
                                         <li><a href="#">Login</a></li>
                                        
                                </ul>
                               
                        </nav>
                </>
        )
};