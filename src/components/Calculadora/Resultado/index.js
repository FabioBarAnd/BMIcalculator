import styles from './Resultado.module.css';

function Resultado ( {imc, handleExcluir} ) {
    return(
        <>
            <div className={styles.resultado}>
                <h4>Seu IMC é de {imc}.</h4>
                <button className={styles.botaoSimples} onClick={handleExcluir}>X</button>
            </div>
        </>
    )
}

export default Resultado;