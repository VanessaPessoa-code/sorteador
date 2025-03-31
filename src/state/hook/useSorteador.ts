import shuffle from "just-shuffle";
import { useListaDeParticipante } from "./useListaDeParticipantes"
import { useSetRecoilState } from "recoil";
import { resultadoDoSorteio } from "../atom";
import { realizarSorteio } from "../helpers/sorteio";

export const useSorteador = () => {
    const participantes = useListaDeParticipante();
    const setResultado = useSetRecoilState(resultadoDoSorteio);
    return () => {
        const resultado = realizarSorteio(participantes);
        setResultado(resultado);
    }
}