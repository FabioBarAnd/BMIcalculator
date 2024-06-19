import { useState } from 'react';
import styles from './Calculadora.module.css';
import Resultado from './Resultado';
import Erro from './Erro';
import Metricas from '../Metricas';

function Calculadora() {
    const [mostrarResultado, setMostrarResultado] = useState(false);
    const [campoVazio, setCampoVazio] = useState(false);
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const imc = peso / (altura * altura);

    const handlePesoChange = (evento) => {
        const pesoFloat = Number(evento.target.value);
        setPeso(pesoFloat);
    }

    const handleAlturaChange = (evento) => {
        const alturaFloat = Number(evento.target.value);
        setAltura(alturaFloat);
    }

    const handleCalcular = () => {
        setMostrarResultado(true);
    }

    const handleExcluir = () => {
        setMostrarResultado(false);
        setCampoVazio(false);
    }

    function analisaCampos() {
        if((peso == "") || (altura == "")) {
            setCampoVazio(true);
        }
        else{
            handleCalcular()
        }
    }

    return(
        <div className={styles.calculadora}>
            <h4>Entre com os dados abaixo (use "." no lugar de ",")</h4>
            <div className={styles.campos}>
                <Metricas label="Peso" type="text" maxLength="6" required onChange={handlePesoChange}/>
                <Metricas label="Altura" type="text" maxLength="4" required onChange={handleAlturaChange}/>
            </div>
            <button className={styles.bntImc} onClick={analisaCampos}>
                <h5>Descubra seu IMC!</h5> 
                <p>Com esses valores você descobrirá como está seu peso.</p>
            </button>
            {campoVazio && <Erro handleExcluir={handleExcluir}/>}
            {mostrarResultado && <Resultado imc={imc.toFixed(2)} handleExcluir={handleExcluir}/>}
        </div>
    )
}
//{mostrarResultado && <Resultado imc={imc}/>} o && sinaliza que isso só sera mostrado caso o "mostrarResultado for verdade"

export default Calculadora;
