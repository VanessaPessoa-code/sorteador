import React, { useEffect, useState } from "react";
import { useListaDeParticipante } from "../../state/hook/useListaDeParticipantes";
import { useResultadoSorteio } from "../../state/hook/useResultadoSorteio";
import styles from "./sorteio.module.css";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";


const Sorteio = () => {
    const [participanteDaVez, setParticipanteDaVez] = useState('');
    const [amigoSecreto, setAmigoSecreto] = useState('');
    const participantes = useListaDeParticipante();
    const resultado = useResultadoSorteio();
    const navegarPara = useNavigate();

    const sortear = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!);
        }
    }

    useEffect(() => {
        if (participantes.length === 0) {
            navegarPara('/')
        }
    }, [participantes]);

    return (
        <Card>
            <form onSubmit={sortear} className={styles.form_sorteio}>
                <h1> Quem vai tirar o papelzinho? </h1>
                <select
                    required
                    name="participanteDaVez"
                    id="participanteDaVez"
                    className={styles.campo_select}
                    placeholder="Selecione o seu nome"
                    value={participanteDaVez}
                    onChange={(event) => setParticipanteDaVez(event.target.value)}
                >
                    {participantes?.map((participante) => (
                        <option key={participante}>
                            {participante}
                        </option>
                    ))}
                </select>
                <p className={styles.help_text}>
                    Clique em em sortear para ver quem é seu amigo secreto!
                </p>
                <button
                    disabled={participantes.length < 3}
                    className="btn">
                    <span>
                        <img src="/images/casino.png" alt="Icone de play" />
                    </span>
                    Sortear!
                </button>
                {amigoSecreto && (
                    <p role="alert">{amigoSecreto}</p>
                )}

            </form>
        </Card>
    )
}

export default Sorteio;