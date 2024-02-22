// Map 
const fruits = ['apple', 'oranges', '', 'mango', '', 'lemon'];

const editedArray = fruits.map(fruit => {
    if (fruit.trim() === '') {
        return 'empty string';
    } else {
        return fruit;
    }
});

console.log(editedArray);

// New Questions

const obj1 = {'key1': 1};

const obj2 = { ...obj1};

if (obj2 === obj1) {
    console.log('same objects');
} else {
    console.log('different objects');
}


// Second Question

const obj3 = {'key1': 1 , 'key2' : 2}

const obj4 = { ...obj3, key1: 1000}



console.log(obj3);

console.log(obj4);