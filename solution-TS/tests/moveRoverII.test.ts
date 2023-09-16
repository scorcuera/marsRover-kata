import { moveRoverII } from "../src/moveRoverII";

describe('Mars Rover', () => {

    test('should stay put if no orders are given', () => {

        let position = moveRoverII([]);
        expect(position).toEqual([100, 100]);

    })

   test('should move towards North', () => {

        let position = moveRoverII(['N']);
        expect(position).toEqual([101, 100]);

    })

   test('should move towards South', () => {

        let position = moveRoverII(['S']);
        expect(position).toEqual([99, 100]);

    })

   test('should move towards East', () => {

        let position = moveRoverII(['E']);
        expect(position).toEqual([100, 101]);

    })

   test('should move towards West', () => {

        let position = moveRoverII(['W']);
        expect(position).toEqual([100, 99]);

    })


   test('should makes several movements towards the same direction', () => {

        let position = moveRoverII(['E', 'E']);
        expect(position).toEqual([100, 102]);

    })

   test('should makes several movements towards different directions', () => {

        let position = moveRoverII(['E', 'N', 'N', 'E', 'E', 'S', 'S', 'S', 'S', 'W'])
        expect(position).toEqual([98, 102]);
    })

});
