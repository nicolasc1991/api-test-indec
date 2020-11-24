//VAR NO SE USA MAS, LO REEMPLAZA LET y CONST 
//CONST se define una vez y no puede sobreescribir su valor
// LET se define una vez pero se puede sobreescribir su valor.

const express = require ("express");

const app = express();


// HTTP DE USOS:
// GET: se utiliza para traer datos
// POST: se utiliza para crear datos
// PUT: se utiliza para modificar los datos
// DELETE: se utiliza para borrar datos.


// COPY Se copiar datos de un lado a otro
// REQUEST WebHook, Pagina A y le pide a Pag B que me de info, le da la info a pagina A y lo guarda.

app.get('/', (req, res, next) => {
    /**
     *  req, vamos a tener 3 variables basicas, 
     *       - Params, parametros URL EJ: localhost:2000/api/usuarios/:id 
     *         (:id ya es un parametro)) req.params.id
     *       - Query parametros URL pero query params, localhost:2000/api/usuarios?nuestra-id, req.query.id
     *       - Body caso de que sea POST y PUST req.body
     * 
     *  res:
     *       res.sendStatus (200, 204, 403); nos va dar el estado de nuestra APP.
     *       res.send(); para enviar el dato, en caso de que tengamos que devolver INFO.
     * 
     *  next:
     *       continuar con nuestra ejecución
     * 
     *  app.get('/sincronizar', preSalvadoDatos, trabadeDatos)
     * 
     *  preSalvado(req,res,next) => {... se trabajan datos de pre guardado... next();}
     * 
     *  trabadeDatos(req,res,next) => {... trabajar datos... res.send()}
     */

    res.send('Hola Mundo')
})


app.get('/query', (req,res,next) => {res.send(req.query.id)});
app.get('/:id', (req,res,next) => {res.send(req.params.id)});
app.listen(1000, () => console.log("Iniciado en puerto 1000"))