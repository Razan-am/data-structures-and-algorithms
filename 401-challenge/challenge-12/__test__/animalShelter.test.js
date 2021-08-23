'use strict';

const AnimalShelter = require('../animalShelter');

describe('animal shelter test',()=>{

    it('happy route',()=>{
        let animalShelter = new AnimalShelter();

        animalShelter.enqueu('dog','cat');
        expect(animalShelter.head.type).toBe('dog');
    })

    it('enequeue()',()=>{
        let animalShelter = new AnimalShelter();

        animalShelter.enqueu('dog');
        animalShelter.enqueu('cat');
        expect(animalShelter.head.type).toBe('dog')
    })

    it('dequeue()',()=>{
        let animalShelter = new AnimalShelter();

        animalShelter.enqueu('cat');
        animalShelter.enqueu('dog');
        animalShelter.enqueu('dog');
        animalShelter.dequeue();

        expect(animalShelter.head.type).toBe('cat')
    })
})