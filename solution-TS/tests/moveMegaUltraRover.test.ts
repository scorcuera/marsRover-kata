import { moveMegaUltraRover } from "../src/moveMegaUltraRover";

describe('Mars Rover', () => {

    test('should stay put if no orders are given', () => {

        let position = moveMegaUltraRover([]);
        expect(position).toEqual([100, 100]);

    })

   test('should move towards North', () => {

        let position = moveMegaUltraRover(['N']);
        expect(position).toEqual([101, 100]);

    })

   test('should move towards South', () => {

        let position = moveMegaUltraRover(['S']);
        expect(position).toEqual([99, 100]);

    })

   test('should move towards East', () => {

        let position = moveMegaUltraRover(['E']);
        expect(position).toEqual([100, 101]);

    })

   test('should move towards West', () => {

        let position = moveMegaUltraRover(['W']);
        expect(position).toEqual([100, 99]);

    })


   test('should makes several movements towards the same direction', () => {

        let position = moveMegaUltraRover(['E', 'E']);
        expect(position).toEqual([100, 102]);

    })

   test('should makes several movements towards different directions', () => {

        let position = moveMegaUltraRover(['E', 'N', 'N', 'E', 'E', 'S', 'S', 'S', 'S', 'W'])
        expect(position).toEqual([98, 102]);
    })

});
