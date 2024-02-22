// Arrow Functions
const add = (x, y) => x+y;
console.log(add(2, 6));

// Object Creation

const student = {
    name: 'Rohan',
    age: 26,
    course: 'Backend Developemnt',
    fun() {
        console.log(`My name is ${this.name} , my age is ${this.age} and I'm learning ${this.course}`)
    }
}

console.log(student.name);
console.log(student.age);
console.log(student.course);
student.fun();