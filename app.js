/* Sección 2: Comentarios, Variables y Tipos de Datos
Ejercicio 4: Dentro de tu proyecto, crea un archivo app.js o index.js y añade un comentario de una sola línea y un comentario de bloque en tu archivo JavaScript que explique qué se espera en los siguientes ejercicios.

Ejercicio 5: Declara una variable llamada miNumero y asígnale el valor 10. Usa console.log para imprimir tu variable en la consola.

Ejercicio 6: Crea una variable llamada miBooleano con el valor true. Imprime el tipo de dato usando typeof en un console.log.

Ejercicio 7: Crea una variable llamada miCadena y asígnale un valor de tu elección. Imprime la longitud de la cadena en la consola.

Ejercicio 8: Crea una variable llamada miArray y asígnale un array con 3 elementos de tu elección, estos elementos deben ser string, number y array. Imprime el array en la consola.

Ejercicio 9: Crea una variable llamada miObjeto y asígnale un objeto con 3 propiedades de tu elección. Imprime el objeto en la consola.

Sección 3: Interacción con el Usuario
Ejercicio 10: Utiliza prompt para pedirle al usuario su nombre y almacénalo en una variable llamada nombreUsuario. Usa alert para mostrar un saludo que incluya el nombre del usuario.

Ejercicio 11: Crea una confirmación con confirm que pregunte al usuario si le gusta JavaScript. Guarda la respuesta en una variable y muestra en consola un mensaje acorde a la respuesta.

Sección 4: Uso de console para Depuración
Ejercicio 9: Escribe un mensaje de advertencia usando console.warn con el texto "Esto es solo una práctica".

Ejercicio 10: Genera un mensaje de error utilizando console.error para simular un fallo al intentar ejecutar una operación.

Ejercicio 11: Crea una tabla en la consola a partir de un array con los números del 1 al 5 utilizando console.table.

Sección 5: Trabajando con el Script en un Archivo Externo
Ejercicio 12: Crea un nuevo archivo llamado app.js. Mueve todas las etiquetas script que has escrito hasta ahora a este nuevo archivo.

Ejercicio 13: Enlaza el archivo app.js a tu index.html utilizando la etiqueta script al final del . */

// Ejercicio 5: Declara una variable llamada miNumero y asígnale el valor 10. Usa console.log para imprimir tu variable en la consola.

const miNumero = 10
console.log(miNumero)

// Ejercicio 6: Crea una variable llamada miBooleano con el valor true. Imprime el tipo de dato usando typeof en un console.log.

const miBooleano = true
console.log(typeof(miBooleano)) 

// Ejercicio 7: Crea una variable llamada miCadena y asígnale un valor de tu elección. Imprime la longitud de la cadena en la consola.

const miCadena = 'Hola mundo'
console.log(miCadena.length)

// Ejercicio 8: Crea una variable llamada miArray y asígnale un array con 3 elementos de tu elección, estos elementos deben ser string, number y array. Imprime el array en la consola.

const miArray = ['hola', 23, [1,2,3]]
console.log(miArray)

// Ejercicio 9: Crea una variable llamada miObjeto y asígnale un objeto con 3 propiedades de tu elección. Imprime el objeto en la consola.

const miObjeto = {nombre:'jeronimo', edad:18, ciudad: 'medellín' }

// Sección 3: Interacción con el Usuario

// Ejercicio 10: Utiliza prompt para pedirle al usuario su nombre y almacénalo en una variable llamada nombreUsuario. Usa alert para mostrar un saludo que incluya el nombre del usuario.

nombreUsuario = prompt("Ingresa tu nombre")
alert("Hola! "+ nombreUsuario)

// Ejercicio 11: Crea una confirmación con confirm que pregunte al usuario si le gusta JavaScript. Guarda la respuesta en una variable y muestra en consola un mensaje acorde a la respuesta.


if (confirm("Te gusta javascript?")){
    console.log("me alegra!")
}
else{
    console.log("no me alegra")
}

// Sección 4: Uso de console para Depuración

// Ejercicio 9: Escribe un mensaje de advertencia usando console.warn con el texto "Esto es solo una práctica".

console.warn("Ésto es solo una práctica")

// Ejercicio 10: Genera un mensaje de error utilizando console.error para simular un fallo al intentar ejecutar una operación.

console.error("Error en la ejecución de la función")

// Ejercicio 11: Crea una tabla en la consola a partir de un array con los números del 1 al 5 utilizando console.table.

const arrayNum = [1,2,3,4,5]
console.table(arrayNum)

// Sección 5: Trabajando con el Script en un Archivo Externo

// Ejercicio 12: Crea un nuevo archivo llamado app.js. Mueve todas las etiquetas script que has escrito hasta ahora a este nuevo archivo.

// Ejercicio 13: Enlaza el archivo app.js a tu index.html utilizando la etiqueta script al final del .