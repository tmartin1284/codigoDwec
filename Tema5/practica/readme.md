# Práctica de Programación Frontend: Gestión de Fichas de Mascotas para una Tienda de Mascotas

### Descripción

En esta práctica, desarrollarás una aplicación de gestión de fichas de mascotas para una tienda en línea de adopción y venta de mascotas. Cada ficha de mascota incluirá su foto, nombre, descripción, fecha de nacimiento, precio y un código único de mascota. La aplicación permitirá agregar, editar, eliminar y visualizar cada ficha de mascota, incluyendo la validación de datos y la manipulación de la información en el DOM.

### Objetivos

1. **Manipulación del DOM**: Crear y modificar elementos en la interfaz, incluyendo imágenes.
2. **Manejo de eventos**: Capturar eventos de formularios y botones.
3. **Validación de formularios**: Asegurarse de que los campos obligatorios estén completos, que la URL de imagen tenga el formato adecuado, que la fecha de nacimiento sea válida, y que el código de la mascota siga un formato específico.
4. **CRUD en memoria**: Crear, Leer, Actualizar y Eliminar mascotas en un array de JavaScript.
5. **Manejo de imágenes**: Trabajar con URLs de imágenes y mostrarlas en la interfaz.

### Especificaciones de la Aplicación

1. **Formulario de mascota**: La aplicación debe incluir los siguientes campos en un formulario:
   - **Nombre de la mascota** (campo de texto).
   - **Descripción** (campo de texto).
   - **URL de la imagen** de la mascota (campo de URL).
   - **Fecha de nacimiento** (campo de fecha).
   - **Precio** de la mascota (campo numérico).
   - **Código de la mascota** (campo de texto, validación de formato: tres letras seguidas de tres números, por ejemplo: "CAT123").
   - Botón de **Agregar Mascota**.

2. **Lista de mascotas**: Mostrar cada ficha en una lista con las opciones de **editar**, **eliminar** y **ver detalles**.

3. **Validación**:
   - Validar que el nombre, URL de la imagen, fecha de nacimiento, precio y código de la mascota estén completos.
   - **URL de la imagen**: Asegurarse de que el enlace sea válido, permitiendo formatos de imagen (.jpg, .jpeg, .png, .gif).
   - **Fecha de nacimiento**: Validar que la fecha ingresada sea una fecha pasada o presente, no futura.
   - **Precio**: Debe ser un número positivo mayor que cero.
   - **Código de la mascota**: Validar que siga el formato específico de tres letras seguidas de tres números (por ejemplo: "DOG001" o "CAT123").

4. **Funcionalidad CRUD**:
   - **Crear**: Agregar mascotas a la lista.
   - **Leer**: Mostrar las fichas en el DOM.
   - **Actualizar**: Editar la ficha de una mascota.
   - **Eliminar**: Borrar una mascota de la lista.

5. **Visualización de imagen**: Cada ficha debe mostrar la imagen de la mascota usando la URL proporcionada.

### Estructura de Archivos

1. **HTML** (`index.html`): Contendrá la estructura base del formulario y el contenedor para la lista de mascotas.
2. **CSS** (`styles.css`): Estilos básicos para el diseño de las fichas y el formulario.
3. **JavaScript** (`script.js`): Lógica para manipular el DOM, validar el formulario, y realizar las operaciones CRUD.

### Sugerencias para el Desarrollo

1. **Formulario**: Usa `addEventListener` para manejar el evento `submit` y agregar una mascota a la lista. Asegúrate de limpiar el formulario después de agregar una mascota.
2. **Validación de URL**: Utiliza expresiones regulares para validar que el enlace de la imagen sea correcto.
3. **Validación de Fecha de Nacimiento**: Verifica que la fecha no sea futura usando `Date`.
4. **Validación de Código**: Usa una expresión regular para validar que el código tenga tres letras seguidas de tres números.
5. **CRUD en memoria**: Usa un array `pets` para almacenar cada mascota como un objeto. Implementa funciones para agregar, editar, eliminar y mostrar las mascotas en el DOM.
6. **Renderizado**: Cada vez que se realice una operación (agregar, editar, eliminar), actualiza la lista en el DOM llamando a una función `renderPets`.

### Requisitos Técnicos

- La aplicación debe ser responsiva y manejable en distintos dispositivos.
- La interfaz debe actualizarse en tiempo real según las operaciones realizadas.

### Ejemplo de Interfaz

- **Formulario de mascota**: Un formulario con campos para nombre, descripción, URL de la imagen, fecha de nacimiento, precio y código de la mascota, junto con el botón "Agregar Mascota".
- **Lista de mascotas**: Cada ficha de mascota debe mostrar:
  - Imagen de la mascota.
  - Nombre.
  - Descripción.
  - Fecha de nacimiento.
  - Precio.
  - Código de la mascota.
  - Botones de "Editar" y "Eliminar".