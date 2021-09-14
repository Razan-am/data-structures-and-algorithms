'use strict';

const { partition,
    quickSort} = require ('../quickSort');

describe('Quick Sort', () => {
    it('sorting the array', () => {
        let array=[7, -2, 4, 1, 6, 5, 0, -4, 2];
        expect(quickSort(array)).toEqual([7, -2, 4, 1, 6, 5, 0, -4, 2]);
      });
});