import { useRecoilValue } from "recoil"
import { erroState } from "../atom";

export const useMessageErro = () => {
    const message = useRecoilValue(erroState);
    return message;
}