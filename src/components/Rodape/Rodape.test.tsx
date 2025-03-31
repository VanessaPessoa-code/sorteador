import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipante } from "../../state/hook/useListaDeParticipantes";
import Rodape from ".";
import { useNavigate } from "react-router-dom";
import { useSorteador } from "../../state/hook/useSorteador";

jest.mock('../../state/hook/useListaDeParticipantes' , () => {
    return {
        useListaDeParticipante: jest.fn()
    }
})

const mockNavegacao = jest.fn();
jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao //hook que retorna uma função
    }
});

const mockSorteio = jest.fn();
jest.mock('../../state/hook/useSorteador', () => {
    return {
        useSorteador: () => mockSorteio //hook que retorna uma função
    }
});


describe('quando não existe participantes suficientes', () => {
    beforeEach(() => {
            (useListaDeParticipante as jest.Mock).mockReturnValue(["Ana", "Joana"]);
        });
    test('a brincadeira não pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );

        const botao = screen.getByRole('button');
        expect(botao).toBeDisabled();
    });
})

describe('quando existem participantes suficientes', () => {
    const participantes = ["Ana", "Joana", "Clara"]
    beforeEach(() => {
            (useListaDeParticipante as jest.Mock).mockReturnValue(participantes);
        });
    test('a brincadeira pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );

        const botao = screen.getByRole('button');
        expect(botao).toBeEnabled();
    });

    test('a brincadeira iniciada redireciona o usuario', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );

        const botao = screen.getByRole('button');
        fireEvent.click(botao);
        expect(mockNavegacao).toHaveBeenCalledTimes(1);
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio');
        expect(mockSorteio).toHaveBeenCalledTimes(1);
    });
})