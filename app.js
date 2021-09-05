const person = {
    name: 'Max',
    age: 25,
    greet: function (){
        console.log('Greet')
    }
}
// Аналогичным будет следующее выражение:
const newPerson = new Object(
    {
        name: 'Max',
        age: 25,
        greet: function (){
            console.log('Greet')
        }
    }
)
console.log(person, newPerson)
//переменные newPerson и person являются instance класса Object
//мы создаём переменную newPerson от класса Object
//Прототип это тот-же объект, который присутствует у родительских сущностей

Object.prototype.sayHello = function () {
    console.log('Hello')
}
// Мы расширили базовый прототип Object и добавили в него новый метод
console.log ('Теперь у всех объектов появилась функция sayHello:')
newPerson.sayHello();
person.sayHello();

console.log ('Создаем новый объект lena, который будет копией старого newPerson:')
const lena = Object.create(newPerson)

console.log(lena)
console.log ('создадим собственное имя в верхнем уровне:')
lena.name = 'Elena';
console.log (lena)
//также объекту lena и остальным объектам доступна функция sayHello созданная для всех объектов
const str = 'I am string'
//даже для str доступна функция sayHello
const str1 = new String ('I am string')
//класс Object является самым главным в js и всё от него идет
// поэтому даже строка будет иметь доступ к функции sayHello


//===============================================================
// контекст this === window
// this обращается к объекту, который находится слева

const dima = {
    age:21,
    name: 'Dmitriy',
    job: 'driver',
    info: function (phone) {
        console.group (`${this.name} info:`)
        console.log (this.age)
        console.log(this.job)
        console.log(phone)
        console.groupEnd()
    }
}
dima.info('06712312312');

const olga = {
    age:18,
    job:'FrontEnd',
    name:'Olga'
}
dima.info.bind(olga, '0977771122')(); //вывели данные ольги обратившись к функции димы

//===================================
//есть массив, нужно умножить каждое значение на заданное число
// решаем обычным способом

const array =[1,2,3,4,5]

function multyply(arr, n) {
    return arr.map(
        function (i) {
            return i * n
        }
    )
}
console.log ('Исходный массив:')
console.log (array)
console.log ('Перемножаем его на 2:')
console.log (multyply(array, 2));

// создаем метод для массивов
Array.prototype.mult = function (n) {
    return this.map(
        function (i) {
            return i * n
        }
    )
}
console.log ('А теперь тоже при помощи метода, умножаем на 3:')
console.log (array.mult(3))
console.log ('метод можно сразу использовать на любом массиве, например:')
console.log([1,2,3].mult(4))