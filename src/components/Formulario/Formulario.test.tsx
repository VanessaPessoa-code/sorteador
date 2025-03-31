import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Formulario from ".";
import { RecoilRoot } from "recoil";
import { act } from "react-dom/test-utils";

describe('O comportamento do Formulário', () => {
    test('Quando input vazio, novos participantes não podem ser adicionados', () => {
        render(
            <RecoilRoot>
            <Formulario />
        </RecoilRoot>
        );
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
        const button = screen.getByRole('button');
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
    });
    
    test('Adicionar um participante caso exista um nome preenchido', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
        const button = screen.getByRole('button');
    
        //inserir valor no input
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        //clicar no botão de submeter
        fireEvent.click(button);
    
        //garantir o input esteja com o foco ativo
        expect(input).toHaveFocus();
        //garantir o input nao tenha um valor
        expect(input).toHaveValue("");
    
    });
    
    test('Nomes duplicados não podem ser preenchidos', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
        const button = screen.getByRole('button');
    
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(button);
    
    
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(button);
    
        const messageErro = screen.getByRole('alert');
        expect(messageErro.textContent?.trim()).toBe('Nomes duplicados não são permitidos');
    });
    
    test('Mensagem de erro some após N segundos', () => {
        jest.useFakeTimers();
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
        const button = screen.getByRole('button');
    
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(button);
    
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(button);
    
        const messageErro = screen.queryByRole('alert');
        expect(messageErro).toBeInTheDocument();
        act(() => {
            jest.runAllTimers();
        })
    
        const messageErro2 = screen.queryByRole('alert');
        expect(messageErro2).toBeNull;
    })
})

