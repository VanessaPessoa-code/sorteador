import React from "react";
import Formulario from "../../components/Formulario";
import ListaParticipantes from "../../components/ListaParticipante";
import Rodape from "../../components/Rodape";
import Card from "../../components/Card";

const Configuracao = () => {

    return (
        <Card>
            <>
                <Formulario />
                <ListaParticipantes />
                <Rodape />
            </>
        </Card>
    )
}

export default Configuracao;