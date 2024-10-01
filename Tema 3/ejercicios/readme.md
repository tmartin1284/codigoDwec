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
   1. Tenemos que hacer la página web de una Granja, que tiene los siguientes animales:
![oveja!](img/oveja.webp)
         1. Ovejas, que :
            1. pueden ser de diferentes razas (merinas, churras etc), 
            2. tienen un color, que cuando nacen es blanco, aunque conforme crecen a algunas de ellas les puede cambiar;
            3. son capaces de proporcionar un máximo de X litros de leche, este dato es propio de cada ejemplar de oveja. 
            4. pueden o no estar esquiladas
            5. las ovejas se pueden ordeñar, y nos van a devolver una cantidad Y de litros de leche ( que estará entre 0 y el máximo). Si una oveja se queda embarazada automaticamente no puede producir leche (0 litros).
            6. las ovejas balan, es decir, imprimen por pantalla el mensaje "Beeeee"
            7. cuando se muestran las ovejas, nos interesa saber, su raza, color, y cuanta leche en total han producido (por tanto este dato, además de devolverse, deberá almacenarse internamente).

         2. Conejos, son seres de luz que:
            1. pueden ser de varios colores, (un conejo puede tener varios colores a la vez, ej blanco, marron, negro).
            2. pueden tener las orejas pa arriba, o pa abajo. Este y el anterior son dos datos propios de cada conejo cuando nace.
            3. pueden dar cariño (de 0 a 100). Este dato, aunque se puede cambiar a lo largo de la vida del conejo, inicialmente es un número aleatorio.
            4. son capaces de roer con una potencia de 1 a 100. Inicialmente también es un numero aleatorio que puede cambiar con el tiempo.
            5.  Estos valores pueden cambiar, y para saber el índice de achuchabilidad del conejo deberemos dividir el cariño entre la potencia de roedura
            6.  también debemos saber si un conejo es o no achuchable, si tiene un índice de achuchabilidad mayor de 0,5.
            7.  Cuando se muestran los conejos, nos interesa saber: los colores, pa dónde van las orejas, y si es achuchable se acompañará del mensaje "quiero ser tu mejor amigooo". Si no es achuchable, sólo mostrará los dos primeros datos.
   
         3. Gallinas, seres mágnificos que:
            1. nos proporcionan huevos de diferentes colores. Cada gallina sólo es capaz de poner huevos de un color, que debemos guardar. 
            2. Nos interesa saber la cantidad total de huevos que nos ha proporcionado la gallina, por defecto 0, pero cada vez que ponen un huevo, se aumentara. 
            3. También habrá un índice de ponibilidad que es el número de huevos que ha puesto la gallina entre los dias que tiene de adulta (pasados los primeros 6 meses).
            4. Se debe controlar si pasado el primer año, el índice de ponibilidad de una gallina cae por debajo de 0,1, o si se pasa una semana sin poner un huevo. En este caso, hay que avisar a los de Gallina Blanca.
            5. las gallinas cacarean, imprimiendo por pantalla un mensaje "caaaaa caaaca ca caaaaaa"
            6. Cuando se muestran las gallinas, nos interesa saber, el color de sus huevos, cuantos huevos totales lleva puestos, y cuantos en la última semana. Si el índice de ponibilidad es menor de 0,1, se añadirá el mensaje "Poooo po po po, me voy al puchero".
   
         4. Vacas, son seres muuuuy inteligentes que:
            1. pueden tener varios colores, igual que los conejos.
            2. tienen cuernos, de los que debemos guardar su longitud.
            3. son capaces de proporcionar un máximo de X litros de leche, este dato es propio de cada ejemplar de vaca. 
            4. la leche de vaca puede ser entera, desnatada o semidesnatada.
            5. las vacas se pueden ordeñar, y nos van a devolver una cantidad Y de litros de leche ( que estará entre 0 y el máximo). Si una vaca se queda embarazada automaticamente no puede producir leche (0 litros).
            6. las vacas mugen, imprimiendo por pantalla el mensaje "muuuuuuu-cho cuidado que tengo cuernos".
            7. cuando mostramos las vacas, nos interesa saber sus colores, la cantidad de leche que llevan dada. Si la vaca está embarazada, debe añadirse el mensaje "estoy esperando un ternerito".
         5. Gallos, esos seres graciosos del corral
            1. deberemos almacenar su raza
            2. pueden cantar, de tal forma que entre las 4 y las 8 am, o si han pasado 5 minutos desde la última vez que cantó, muestra por pantalla "kikirikiiiiii". Si no han pasado esos cinco minutos, muestar "poo popopo pooo".
            3. Cuando se muestran los gallos, nos interesa saber sus colores, y la hora del primer canto del día (que tendremos almacenado).
         
   1. Se pide:
      1. Crear las funciones constructoras de cada uno de los animales anteriores. Tened en cuenta que al crear un animal deberemos pasarle valores para los atributos que no tengan un valor por defecto. Todos los objetos tienen atributos (algunos con setter y getter), métodos (algunos con logica), y todos tienen una función `toString()` que debéis definir según se indica.
      2. Crear un objeto de cada tipo, según esto:
         1. La oveja será churra
   
   2. Cread un objeto de cada tipo. Imprimelos
   3. La granja está compuesta por cuatro pabellones. Cada pabellón tiene un número aleatorio de animales entre 5 y 10. Crea el metodo constructor de la granja, e inicializa sus animales usando math. random (en el caso de los colores, podeis utilizar un switch). Imprimelos todos usando estructuras de control.
   4. Selecciona, mediante funciones de lambda, sobre cada array (pabellón).
         1. la oveja que más leche da.
         2. el conejo con mayor índice de achuchabilidad.
         3. la gallina con más índice de ponibilidad.
         4. la vaca con los cuernos más largos
   5. Guarda estos animales en un array de AnimalesSelectos. Imprimelo.
   6.  Serializa en JSON los AnimalesSelectos, e imprimelo también.
   