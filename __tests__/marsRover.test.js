import { moveRover } from '../src/marsRover'

describe('Mars Rover', () => {

    it('El Rover se mantiene en la posición original si no le damos órdenes', () => {

        let position = moveRover([]);

        expect(position).toEqual([100, 100]);

    })

    it('El Rover se mueve al norte', () => {

        let position = moveRover(['N']);
        console.log(position);

        expect(position).toEqual([101, 100]);

    })

    it('El Rover se mueve al sur', () => {

        let position = moveRover(['S']);

        expect(position).toEqual([99, 100]);

    })

    it('El Rover se mueve al este', () => {

        let position = moveRover(['E']);

        expect(position).toEqual([100, 101]);

    })

    it('El Rover se mueve al oeste', () => {

        let position = moveRover(['W']);

        expect(position).toEqual([100, 99]);

    })


    it('El Rover realiza múltiples movimientos en la misma dirección', () => {

        let position = moveRover(['E', 'E']);

        expect(position).toEqual([100, 102]);

    })

    it('El Rover realiza múltiples movimientos en diferentes direcciones', () => {

        let position = moveRover(['E', 'N', 'N', 'E', 'E', 'S', 'S', 'S', 'S', 'W']);

        expect(position).toEqual([98, 102]);
    })
});