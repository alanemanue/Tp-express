const express = require('express');
const app = express();
const port = 3000;


const matematica = require('./matematica');


app.get('/', (req, res) => {
    res.status(200).send('¡Ya estoy respondiendo!');
});


app.get('/saludar/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.status(200).send(`Hola ${nombre}`);
});


app.get('/validarfecha/:ano/:mes/:dia', (req, res) => {
    const { ano, mes, dia } = req.params;
    const fecha = new Date(`${ano}-${mes}-${dia}`);
    
    if (isNaN(fecha.getTime())) {
        res.status(400).send('Fecha no válida');
    } else {
        res.status(200).send('Fecha válida');
    }
});


app.get('/matematica/sumar', (req, res) => {
    const { n1, n2 } = req.query;
    const resultado = matematica.sumar(Number(n1), Number(n2));
    res.status(200).send(`El resultado de la suma es: ${resultado}`);
});

app.get('/matematica/restar', (req, res) => {
    const { n1, n2 } = req.query;
    const resultado = matematica.restar(Number(n1), Number(n2));
    res.status(200).send(`El resultado de la resta es: ${resultado}`);
});

app.get('/matematica/multiplicar', (req, res) => {
    const { n1, n2 } = req.query;
    const resultado = matematica.multiplicar(Number(n1), Number(n2));
    res.status(200).send(`El resultado de la multiplicación es: ${resultado}`);
});

app.get('/matematica/dividir', (req, res) => {
    const { n1, n2 } = req.query;
    if (Number(n2) === 0) {
        res.status(400).send('El divisor no puede ser cero');
    } else {
        const resultado = matematica.dividir(Number(n1), Number(n2));
        res.status(200).send(`El resultado de la división es: ${resultado}`);
    }
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
