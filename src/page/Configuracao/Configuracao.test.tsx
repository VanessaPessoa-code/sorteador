import { render } from "@testing-library/react";
import exp from "node:constants";
import React from "react";
import { RecoilRoot } from "recoil";
import Configuracao from ".";

const mockNavegacao = jest.fn();
jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao //hook que retorna uma função
    }
});

describe('a pagina de configuração', () => {
    test('deve ser renderizada corretamente' , () => {
        const {container} = render(
            <RecoilRoot>
                <Configuracao />
            </RecoilRoot>
        );

        expect(container).toMatchSnapshot();

    })
})