import styles from './Footer.module.css';

function Footer () {
    return(
        <section className={styles.footer}>
            <p>Desenvolvido por Fabio Andrade.</p>
            <div className={styles.redes}>
                <ul>
                    <li>
                        <img src='/icones/github.png' alt='Github'/>
                        <a href="https://github.com/FabioBarAnd">GitHub</a>
                    </li>
                    <li>
                        <img src='/icones/linkedin.png' alt='Linkedin'/>
                        <a href="https://www.linkedin.com/in/fabio-andrade-885397275/">Linkedin</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;