import React from 'react';
import { useListaDeParticipante } from '../../state/hook/useListaDeParticipantes';
import styles from "./listaParticipante.module.css"


const ListaParticipantes = () => {
    const participantes: string[] = useListaDeParticipante();
    return (
        <ul className={styles.ul}>
            {participantes.map((item) => (
                <li key={item} className={styles.li}> {item} </li>
            ))}
        </ul>
    )
}

export default ListaParticipantes;