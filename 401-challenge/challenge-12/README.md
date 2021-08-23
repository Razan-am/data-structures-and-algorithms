# Code challenge 12:

## Stack-Queue-Animal-Shelter
<!-- Description of the challenge -->
- Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
  - Implement the following methods:
    - `enqueue(animal)`: adds animal to the shelter. animal can be either a dog or a cat object.
    - `dequeue(pref)`: returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

### Whiteboard Process
<!-- Embedded whiteboard image -->

![image](/images/animal-shelter.png)

### Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->
- test result:
![image](/images/test-12.PNG)

- Big O 
   - Time <--- O(1)
   - Space <----- O(1)