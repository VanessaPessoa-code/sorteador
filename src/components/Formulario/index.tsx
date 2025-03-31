import React, { useRef, useState } from "react";
import styles from "./formulario.module.css";
import { useAdicionarParticipante } from "../../state/hook/useAdicionarParticipante";
import { useMessageErro } from "../../state/hook/useMessageErro";

const Formulario = () => {
    const [name, setName] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const addNameList = useAdicionarParticipante();
    const messageErro = useMessageErro();

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addNameList(name);
        setName('');
        inputRef.current?.focus();
    };

    return (
        <form className={styles.form} onSubmit={submitForm}>
            <h1> Vamos começar! </h1>
            <div>
                <input
                    className={styles.campo_text}
                    ref={inputRef}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text"
                    placeholder="Insira os nomes dos participantes"
                />
                <button className={styles.btn_add} type="submit" disabled={!name}> Adicionar </button>
            </div>
            {messageErro && <p role="alert">{messageErro}</p>}
        </form>
    )
}

export default Formulario;