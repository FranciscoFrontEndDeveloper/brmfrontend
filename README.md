# Prueba Técnica – Desarrollador Jr. Frontend


Aplicación web desarrollada como parte de una prueba técnica frontend. Su objetivo es mostrar y filtrar un conjunto de dos APIs REST públicas abiertas, permitiendo al usuario consultar una lista organizada y explorar sus detalles de forma sencilla. Desarrollada con Angular y Angular Material.

1. Demo en Producción
🌐 https://brmfrontend-zeta.vercel.app/
📁 https://github.com/FranciscoFrontEndDeveloper/brmfrontend
2. Tecnologías Usadas
Angular 19
Angular Material
TypeScript
SCSS
Git / GitHub
Vercel
3. Estructura del Proyecto
'Prueba
Técnica    ├── src/
	   │ ├── app/
	   │ │ ├── components/
	   │ │ │ ├── apiMain/ # Pantalla de inicio de la app
	   │ │ │ ├── nameapicard/ # Muestra las dos apis que se pueden consultar
	   │ │ │ ├── toolbar/ # barra de navegacion que aparece cuando se visualiza en telefonos mobiles
	   │ │ │ ├── apirestinfo/ # Tabla con informacion de la api seleccionada
	   │ │ │ ├── apidetailsdialog # Componente principal del flujo 
	   │ │ ├── services/
	   │ │ │ ├── apinames/ # Servicio Generico que para consumir dos apis
	   

4. Instalación Local
https://github.com/FranciscoFrontEndDeveloper/brmfrontend.git
cd brmfrontend
npm install
ng serve
5. Funcionalidades

    Dos APIs públicas con información organizada.

    Filtro por palabra clave o tema.

    Vista de detalles en un modal de una API individual.

    Manejo de errores simples (fallo en fetch, datos vacíos).

    Interfaz responsiva y agradable visualmente con Angular Material.



6. Decisiones Técnicas

    El primer día se hizo un proceso de planificación, conceptualización e implementación, evaluando el alcance viable dentro del plazo de entrega.

    Se optó por Angular Material para acelerar el desarrollo visual por su integración fluida con Angular.

    Se creó un servicio genérico para facilitar la reutilización en futuros componentes.

    Se simulo un servivio que sirvio de base para tomar el nombre y a url de cada api.


8. Mejoras Futuras

    Agregar más APIs públicas a la base.

    Mejorar el filtrado con categorías múltiples o etiquetas.

    Implementar paginación y carga perezosa.

    Añadir pruebas end-to-end (E2E).
