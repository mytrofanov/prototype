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