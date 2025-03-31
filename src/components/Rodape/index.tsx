import React from "react";
import { useListaDeParticipante } from "../../state/hook/useListaDeParticipantes";
import { useNavigate } from "react-router-dom";
import styles from "./rodape.module.css"
import { useSorteador } from "../../state/hook/useSorteador";

const Rodape = () => {
    const participantes = useListaDeParticipante();
    const navegarPara = useNavigate();

    const sortear = useSorteador();
    const iniciar = () => {
        sortear();
        navegarPara('/sorteio')
    }

    
    return (
        <footer className={styles.rodape}>
            <button
                onClick={iniciar} 
                disabled={participantes.length < 3}
                className="btn">
                    <span>
                        <img src="/images/play_circle_outline.png" alt="Icone de play" />
                    </span>
                Iniciar brincadeira!
            </button>
            <img src="/images/sacolas.png" alt="Duas sacolas, verde e azul" />
        </footer>
    )
}

export default Rodape;