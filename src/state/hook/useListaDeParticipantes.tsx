import { useRecoilValue } from "recoil"
import { listaParticipantesState } from "../atom"

export const useListaDeParticipante = () => {
    return useRecoilValue(listaParticipantesState);
}