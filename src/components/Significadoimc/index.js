import styles from './Significadoimc.module.css';

function Significadoimc({imagem, alt}) {
    return(
        <section className={styles.significado} id="significadoImc">
            <div className={styles.imagem}> 
                <img src={imagem} alt={alt}/>    
            </div>
            <div className={styles.texto}>
                <h2 className={styles.titulo}>O que o resultado do IMC significa</h2>
                <p className={styles.paragrafo}>
                    O Índice de Massa Corporal (IMC) é uma ferramenta simples que estima se uma pessoa está com o peso adequado, acima do peso ou abaixo do peso, com base em sua altura e peso. <br/>
                    O IMC não leva em consideração a composição corporal (músculos, gordura, ossos), por isso, pessoas com muita massa muscular, como atletas, podem ter um IMC alto, mesmo estando com o peso ideal. <br/>
                    O IMC é uma ferramenta útil para triagem inicial, mas não deve ser usado unicamente como indicador de saúde.
                </p>
            </div>
        </section>
    )
}

export default Significadoimc;