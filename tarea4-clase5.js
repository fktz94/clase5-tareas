//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function crearArray() {
    let $numerosDeLaOl = document.querySelectorAll('ol > li')

    function calcularPromedio() {
        let contador = 0;
        for (let i = 0; i < $numerosDeLaOl.length; i++) {
            contador += Number($numerosDeLaOl[i].textContent);
        }
        // console.log(contador);
        const promedio = contador / $numerosDeLaOl.length;
        // console.log(promedio);
        const $domPromedio = document.querySelector('#promedio')
        $domPromedio.textContent = `El promedio es de ${promedio}`;
    }
    calcularPromedio();

    function numeroPequenio() {
        for (let i = 0; i < $numerosDeLaOl.length; i++) {
            const numeros = $numerosDeLaOl[i];
            let mathMin = Math.min(numeros);
            console.log(mathMin);
        }
    }
    numeroPequenio();
}
crearArray();

