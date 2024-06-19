import styles from './Dicas.module.css';

function Dicas ({dica}) {
    return(
        <div className={styles.dicas}>
            <div className={styles.iconeTitulo}>
                <img src={dica.icone} alt={dica.alt}/>
                <h4>{dica.titulo}</h4>
            </div>
            <p>{dica.texto}</p>
        </div>
    )
}

export default Dicas;