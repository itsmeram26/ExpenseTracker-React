/* import {createStore} from 'redux';

const store = createStore((state = {count : 0}) => {
    return state;
});

console.log(store.getState()); */

const person = {
    name: 'Ram',
    age: '33',
    anotherObj: {
        city:'Vienna',
        state:'VA'
    }
}

const { name, age } = person;

console.log(`${name} and ${age}`)


const { city, state } = person.anotherObj;
console.log(`${city} and ${state}`)
