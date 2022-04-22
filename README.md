# web_dinamico_handlebars
Aplicacion usando handlebars con parametros dinamicos:

1. Tiene una plantilla principal inicio que es renderizada desde el index.js con el metodo render
2. En ese render aparte se pasan como parametro un array y un valor (todo basado en los colores de las clases de bootstrap)
3. La ruta app.get("/:color"), recibe el nombre del color relacionado a clases de bootstrap
3. La plantilla principal inicio importa las partials (botones y spinner) que estan dentro de la carpeta componentes
4. La plantilla botones hace uso del parametro array colores, para mostrar una fila de botones de colores de bootstrap con sus nombres y dinamicamente varia la direccion a usar en href
5. La plantilla spinner usando la class="spinner" de bootstrap genera el giro circular de acuerdo al color que se pase como parametro en la url o puedo hacer uso del que indique el href de la plantilla botones
