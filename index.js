/* Desarrollar un servidor que reciba en su ruta raíz un parámetro con el nombre de un color
según las variantes de colores de bootstrap. Este parámetro será enviado a través del render
a una vista “Inicio”, la cual importará 2 parciales:

● Botones: Contendrá el helper “each” para iterar un arreglo de colores.
● Spinner: Contendrá el componente spinner de Bootstrap, en donde su variante de
color será igual a un parámetro “color” enviado desde el render.

El objetivo será programar que al ser presionado un botón de color “success”, por ejemplo,
se consulte al servidor pasando como parámetro de la URL esta variante de color y ¿Cómo
redireccionaremos al usuario luego del click en el botón? Usaremos las etiquetas de ancla,
concatenando de forma dinámica el color en el atributo “href”. */

/* Paso 1: Crear un servidor con Express e integra handlebars definiendo en su
configuración las rutas para el consumo de vistas y componentes. */

// importo y defino la instancia de express
const express = require("express");
const app = express();

// importo handlebars
const exphbs = require("express-handlebars");

// levanto el servidor
app.listen(3000, () => {
console.log("El servidor está inicializado en http://localhost:3000");
});


// especifico una configuracion donde motor de plantilla sera handlebars (requerido)
app.set("view engine", "handlebars");



// el metodo engine pasamos la extension a usar "handlebars" y la instancia de handlebars exphbs con carpeta principal de plantilla inicio.handlebars y de ser necesario la carpeta de los partials que se llamara componentes
app.engine(
    "handlebars",
    exphbs.engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/componentes",
    })
);


// Paso 2: middleware para definir una ruta estatica para bootstrap en la carpeta node_module, hay que instalar bootstrap con npm install bootstrap previamente
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));



// Paso 3: Crear una ruta raíz que reciba un parámetro “color”.
app.get("/:color", function (req, res) {
    // Paso 4: Utilizar destructuring para extraer la propiedad color de los parámetros de la
    // consulta con el objeto request.
    const { color } = req.params;
    // Paso 5: Ocupar el método render para renderizar la plantilla Inicio y pasar como
    // parámetros un arreglo con todas las variantes de colores de Bootstrap y una 
    // propiedad “color” cuyo valor será el recibido como parámetro en la ruta.
    res.render("inicio", {
        layout: "inicio",
        colores: [
            "primary",
            "secondary",
            "success",
            "danger",
            "warning",
            "info",
            "light",
            "dark",
        ],
        color: color,
    });
});



// ruta usuarios para renderizar una lista usuarios que se envia como parametro en el render
/* app.get("/", function (req, res) {
    const usuarios = [
        {
            nombre: "Luis",
            direccion: "Avenida Libertador",
            telefono: "+56978994561",
        },
        {
            nombre: "Francisco",
            direccion: "Avenida Luis del valle Garcia",
            telefono: "+56935761594",
        },
        {
            nombre: "Diana",
            direccion: "Avenida via al Sur",
            telefono: "+56913467946",
        },
    ]


    res.render("inicio", {
        layout: "inicio", usuarios,
    });

}); */

 