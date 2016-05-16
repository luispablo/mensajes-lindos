# mensajes-lindos
Un helper sencillo para armar mensajes bonitos en español.

## Uso

```
var Mensajes = require("Mensajes");

...

var mensajes = Mensaje("elementos");

...

console.log(mensajes.paginado(5, 10)); // => Mostrando 5 elementos de 10
console.log(mensajes.paginado(5, 5)); // => Mostrando todos los elementos
console.log(mensajes.paginado()); // => null
```
