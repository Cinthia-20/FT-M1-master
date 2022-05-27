
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function(a, b, c) {
     // a b c = 8 9 10
    b = a; // 8
    console.log(b); // 8
    b = c; // 10
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9
}
c(8,9,10);
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); // Undefined
console.log(baz); // ERROR
foo();
function foo() { console.log('Hola!'); } // Hola!
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // The Flash 
    console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash 
console.log(pm); // Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //NaN
7 / 0 //Infinity
{}[0] //Undefined
parseInt("09") //9
5 && 2 //2
2 && 5 //5
5 || 0 //5
0 || 5 //5
[3]+[3]-[10] //23
3>2>1 //false
[] == ![] //true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //Undefined // porque se declara y se define luego.
   console.log(foo()); //2 //porque invoca la funcion, luego declara la funcion con un valor y hace console.log de ese valor

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); //Undefined //porque para getFood, definimos snack con var y no con let ( en ese caso nos retornaria Meow Mix)
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez'; //this.fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //Aurelio De Rosa //porque le estamos indicando a la consola donde exactamente esta lo que queremos que nos devuelva.



var test = obj.prop.getFullname;

console.log(test()); // Undefined //porque no tenemos declarado un this.Fullname en el objeto global, en caso de tenerlo declarado me va a devolver: Juan Perez.
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); //1 4 3 2 //porque setTimeout es para asignarle tiempo a la tarea para ejecutarse, pero mientras esta se hace, js sigue con la siguiente tarea. 
```
