import { moveMegaRover } from "../src/moveMegaRover";

describe('Mars Rover', () => {

    test('should stay put if no orders are given', () => {

        let position = moveMegaRover([]);
        expect(position).toEqual([100, 100]);

    })

   test('should move towards North', () => {

        let position = moveMegaRover(['N']);
        expect(position).toEqual([101, 100]);

    })

   test('should move towards South', () => {

        let position = moveMegaRover(['S']);
        expect(position).toEqual([99, 100]);

    })

   test('should move towards East', () => {

        let position = moveMegaRover(['E']);
        expect(position).toEqual([100, 101]);

    })

   test('should move towards West', () => {

        let position = moveMegaRover(['W']);
        expect(position).toEqual([100, 99]);

    })


   test('should makes several movements towards the same direction', () => {

        let position = moveMegaRover(['E', 'E']);
        expect(position).toEqual([100, 102]);

    })

   test('should makes several movements towards different directions', () => {

        let position = moveMegaRover(['E', 'N', 'N', 'E', 'E', 'S', 'S', 'S', 'S', 'W'])
        expect(position).toEqual([98, 102]);
    })

});
