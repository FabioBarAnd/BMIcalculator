import styles from './Header.module.css';
import { HashLink as Link} from 'react-router-hash-link'

function Header () {
    return(
        <nav>
            <ul className={styles.ul}>
                <li>
                    <Link smooth to="/imc#imc">Calculadora</Link>
                </li>
                <li>
                    <Link smooth to="/significadoImc#significadoImc">Sobre IMC</Link>
                </li>
                <li>
                    <Link smooth to="/bonsHabitos#bonsHabitos">Bons Hábitos</Link>
                </li>
            </ul>
        </nav>     
    )
}

export default Header;