import { render, screen } from "@testing-library/react"
import React from "react"
import { RecoilRoot } from "recoil"
import ListaParticipantes from "."
import { useListaDeParticipante } from "../../state/hook/useListaDeParticipantes";

jest.mock('../../state/hook/useListaDeParticipantes' , () => {
    return {
        useListaDeParticipante: jest.fn()
    }
})

describe('uma lista vazia de participantes', () => {
    beforeEach(() => {
        (useListaDeParticipante as jest.Mock).mockReturnValue([]);
    });
    test('deve ser renderizada sem elementos', () => {
        render(<RecoilRoot>
            <ListaParticipantes />
        </RecoilRoot>)
        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(0);
    });
});

describe('uma lista preenchida de participantes', () => {
    const participantes = ['Ana', 'Catarina'];
    beforeEach(() => {
        (useListaDeParticipante as jest.Mock).mockReturnValue(participantes);
    });

    test('deve ser renderizada com os elementos', () => {
        render(<RecoilRoot>
            <ListaParticipantes />
        </RecoilRoot>)
        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(participantes.length);
    });
});