import { useRecoilValue } from "recoil"
import { resultadoDoSorteio } from "../atom"

export const useResultadoSorteio = () => {
    return useRecoilValue(resultadoDoSorteio);
}
