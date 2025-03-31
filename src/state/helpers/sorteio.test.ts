import { realizarSorteio } from "./sorteio";

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante não sorteie o próprio nome', () => {
        const participante = [
            'Ana',
            'Catarima',
            'Joao',
            'Vinicius',
            'Natalia'
        ]

        const sorteio = realizarSorteio(participante);
        participante.forEach(participante => {
            const amigoSecreto = sorteio.get(participante);
            expect(amigoSecreto).not.toEqual(participante);
        })
    })
})