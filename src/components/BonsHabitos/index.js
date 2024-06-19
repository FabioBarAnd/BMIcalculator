import styles from './BonsHabitos.module.css';
import dicas from '../../dicas.json'; 
import Dicas from './Dicas';
import Footer from '../Footer';

function BonsHabitos () {
    return(
        <section className={styles.bonsHabitos} id="bonsHabitos">
            <div className={styles.dicas}>
                {dicas.map(dica => <Dicas
                    key={dica.id}
                    dica={dica}            
                />)}
            </div>
            <Footer/>
        </section>
    )
}

export default BonsHabitos;