import styles from './Erro.module.css';

function Erro ( {handleExcluir} ) {
    return(
        <>
            <div className={styles.erro}>
                <h4>Ops... Algum campo não foi completado!</h4>
                <button className={styles.botaoSimples} onClick={handleExcluir}>X</button>
            </div>
        </>
    )
}

export default Erro;