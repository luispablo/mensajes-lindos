# mensajes-lindos
Un helper sencillo para armar mensajes bonitos en español.

## Uso

```
var Mensajes = require("mensajes-lindos");

...

// Dar el nombre en singular y plural de lo que se está mostrando
var mensajes = Mensaje("elemento", "elementos");

...

console.log(mensajes.paginado(5, 10)); // => Mostrando 5 elementos de 10
console.log(mensajes.paginado(5, 5)); // => Mostrando todos los elementos
console.log(mensajes.paginado(1, 1)); // => Mostrando el único elemento
console.log(mensajes.paginado(1, 10)); // => Mostrando un elemento de 10
console.log(mensajes.paginado()); // => null
```
