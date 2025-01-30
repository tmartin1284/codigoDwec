# **P9b. Aplicación de Retroalimentación con Emojis**

## **Descripción General**

En este proyecto, crearás una aplicación en React que permitirá a los usuarios dejar comentarios seleccionando un emoji. La aplicación constará de 4 componentes:

- **App**(el componente principal)
- **FeedbackList** (muestra una lista de opciones de retroalimentación con emojis)
- **FeedbackItem** (representa una opción individual de retroalimentación con emoji)
- **SelectedFeedbackDisplay** (muestra el emoji seleccionado y el mensaje de retroalimentación correspondiente)

## **Objetivo**

Construir una aplicación donde los usuarios puedan:

- Ver una lista de emojis que representan opciones de retroalimentación.
- Hacer clic en un emoji para seleccionarlo.
- Ver el emoji seleccionado y su mensaje de retroalimentación correspondiente.

## **Requisitos**

### **1. Gestión del Estado**

Usar el _hook_ `useState` en el componente `App` para manejar la retroalimentación seleccionada.

### **2. Estructura de Componentes**

- **App**: Administra el estado y renderiza los demás componentes.
- **FeedbackList**: Recibe la lista de emojis como una prop y renderiza los componentes `FeedbackItem`.
- **FeedbackItem**: Muestra un emoji individual. Al hacer clic, informa al componente `App` sobre la retroalimentación seleccionada mediante una _prop_.
- **SelectedFeedbackDisplay**: Muestra el emoji seleccionado por el usuario y su mensaje de retroalimentación.

### **3. Uso de Props**

Pasar la lista de emojis y las funciones necesarias a los componentes secundarios mediante props.

### **4. Lógica**

Cuando un usuario haga clic en un emoji, actualizar el estado en el componente App con el emoji seleccionado y su mensaje de retroalimentación.
Mostrar un mensaje amigable en `SelectedFeedbackDisplay` basado en el emoji seleccionado.

### **5. Emojis Predefinidos**

Usar al menos 4 emojis con sus respectivos mensajes de retroalimentación:

😊 = "Feliz"
😐 = "Neutral"
😢 = "Triste"
🤔 = "Pensativo"

## **Bonus (Opcional)**

Agregar un botón de "Restablecer Retroalimentación" para borrar la selección.
Resaltar el emoji seleccionado en FeedbackList.

## **Ejemplo de Diseño**

¿Cómo fue tu experiencia?

😊 😐 😢 🤔

Tu retroalimentación: 😊 - "Feliz"

## **Envío:**

Envía un enlace a tu repositorio de GitHub.
