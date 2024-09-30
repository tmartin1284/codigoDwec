# Ejercicios Tema 3

#### **Ejercicios con Arrays, y de paso con algo de Math**
   1. Crea un array de 10 elementos, pero sin inicializar. Llamalo números
   2. Inicializa esos elementos con números aleatorios (usa métodos de la clase math), entre 0 y mil. Redondea los número a dos decimales.
   4. Imprime por pantalla todos los elementos del array (con un toString se puede hacer, pero quiero que recorrais el array).
   5. Imprime por pantalla el número mayor  y el menor ( Podéis hacerlo usando las funciones de la clase Math, o bien con un algoritmo de burbuja sencillito).
   6. Imprimir también qué posición ocupan estos números dentro del arrray.
   7. Elimina del array esos elementos, el mayor y el menor, y muestra de nuevo el array.
   8. Crea un nuevo array, que contenga, la raiz cuadrada, cúbica, cuarta etc de los elementos del array Numeros. Este array se llamará raices.
   9. Añade en raices un primer elemento 1. Imprimelo por consola.
   10. Añade al array Números aquellos elementos de Raices que sean mayores que uno.
   11. Finalmente, ordena Numeros e imprimelo por pantalla.


#### Objetos
   1. Tenemos que hacer la página web de una Granja, que tiene los siguientes animales
         1. Ovejas: que pueden ser de diferentes razas (merinas, churras etc), tienen un color, por defecto blanco; son capaces de proporcionar X litros de leche, y pueden o no estar esquiladas. Si una oveja se queda embarazada automaticamente no puede producir leche (0 litros).
         2. Conejos: son seres de luz que pueden ser de varios colores, debemos guardar la cantidad de cariño que son capaces de dar (de 0 a 100), así como su potencial de roedabilidad (también de 0 a 100). Estos valores pueden cambiar, y para saber el índice de achuchabilidad del conejo deberemos dividir el cariño/roedabilidad. Se considera que el conejo es achuchable con un índice superior a 0,5.
         3. Gallinas: seres mágnificos que nos proporcionan huevos de diferentes colores que debemos guardar. Nos interesa saber la cantidad de huevos que nos ha proporcionado la gallina, por defecto 0, pero cada vez que ponen un huevo, aumentaremos el contador. También habrá un índice de ponibilidad que es el número de huevos que ha puesto entre los dias que tiene pasados los primeros 6 meses.
         4. Vacas: pueden tener varios colores, que almacenaremos son capaces de proporcionar X litros de leche, salvo que esté criando, entonces la leche es para el ternerito y no producen. También debemos guardar la longitud de sus cuernos.
   2. Se pide que creeis las funciones constructoras de cada uno de los cuatro objetos anteriores. Además de todos estos animales, hay que guardar la edad, y que todos tienen un método.
   1. Cread un objeto de cada tipo. Imprimelos
   2. La granja está compuesta por cuatro pabellones. Cada pabellón tiene un número aleatorio de animales entre 5 y 10. Crea el metodo constructor de la granja, e inicializa sus animales usando math. random (en el caso de los colores, podeis utilizar un switch). Imprimelos todos usando estructuras de control.
   1. Selecciona, mediante funciones de lambda, sobre cada array (pabellón).
         1. la oveja que más leche da.
         2. el conejo con mayor índice de achuchabilidad.
         3. la gallina con más índice de ponibilidad.
         4. la vaca con los cuernos más largos
   2. Guarda estos animales en un array de AnimalesSelectos. Imprimelo.
   3. Serializa en JSON los AnimalesSelectos, e imprimelo también.
   