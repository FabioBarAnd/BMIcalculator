import styles from './Metricas.module.css';

function Metricas ({ label, type, maxLength, pattern, onChange }) {
    return(
        <div className={styles.container}>
            <p>{label}</p>
            <input 
                className={styles.input} 
                type={type} 
                maxLength={maxLength} 
                attern={pattern} 
                onChange={onChange}
            />
        </div>
    )
}

export default Metricas;