import styles from './Imc.module.css';

function Imc () { 
    return(
        <section className={styles.imc} id="imc">
            <h1 className={styles.titulo}>Calculadora de Índice de Massa Corporal</h1>
            <p className={styles.paragrafo}>O Índice de Massa Corporal (IMC) é uma ferramenta simples e amplamente utilizada para avaliar o estado nutricional de um indivíduo, classificando-o como magro, normal, acima do peso ou obeso. Ele é calculado dividindo-se o peso em kg pela altura em metros ao quadrado (peso / altura²).</p>
        </section>
    )
}

export default Imc;
