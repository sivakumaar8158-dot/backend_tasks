import greet, {add,multiply} from './math.js'
import student from './student.js'


console.log(add(5,3));
console.log(multiply(2,4));
console.log(greet("Janu"));

const student1 = new student("Janu",22)
console.log(student1.info());