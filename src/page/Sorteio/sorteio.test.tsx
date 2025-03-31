import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipante } from "../../state/hook/useListaDeParticipantes";
import Sorteio from ".";
import { useResultadoSorteio } from "../../state/hook/useResultadoSorteio";

jest.mock('../../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipante: jest.fn()
    }
});


jest.mock('../../state/hook/useResultadoSorteio', () => {
    return {
        useResultadoSorteio: jest.fn()
    }
})


const mockNavegacao = jest.fn();
jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao //hook que retorna uma função
    }
});

describe('na pagina de sorteio', () => {
    const participantes = [
        'Ana',
        'Catarina',
        'Joel'
    ];

    const resultado = new Map<string, string>([
        ['Ana', 'Catarina'],
        ['Catarina', 'Joel'],
        ['Joel', 'Ana']
    ]);

    beforeEach(() => {
        (useListaDeParticipante as jest.Mock).mockReturnValue(participantes);
        (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
    });

    test('todos os participantes podem exibir o seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        );
        const opcoes = screen.queryAllByRole('option');
        expect(opcoes).toHaveLength(participantes.length);
    });

    test('o amigo secreto é exibido', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        );
        const select = screen.getByPlaceholderText("Selecione o seu nome");
        fireEvent.change(select, {
            target: { value: participantes[0] }
        });
        const botao = screen.getByRole('button');
        fireEvent.click(botao);
        const amigoSecreto = screen.getByRole('alert');
        expect(amigoSecreto).toBeInTheDocument();
    });
})