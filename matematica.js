

function sumar(n1, n2) {
    return n1 + n2;
}

function restar(n1, n2) {
    return n1 - n2;
}

function multiplicar(n1, n2) {
    return n1 * n2;
}

function dividir(n1, n2) {
    if (n2 === 0) {
        throw new Error('No se puede dividir por cero');
    }
    return n1 / n2;
}

module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
};
