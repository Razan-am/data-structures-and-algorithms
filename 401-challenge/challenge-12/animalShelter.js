'use strict';

class Animal {
    constructor(type){
        this.type = type;
    }
}
class AnimalShelter {
    constructor(){
        this.head = null;
    }
    
    enqueu(animal){
        if(animal === 'dog' || animal === 'cat'){
            let newAnimal = new Animal(animal);
            let currentNode = this.head;

            if(!this.head){
                this.head = newAnimal;
            }else{
                while (currentNode.next) {
                    currentNode = currentNode.next;
                }
                currentNode.next = newAnimal;
            }
            return this;
        }else{
            return 'There is no dog or cat'
        }
    }

    dequeue(pref){
        let currentNode = this.head;

        if (pref !== 'dog' || pref !== 'cat') {
            return null;
        }
    }
}

module.exports=AnimalShelter;