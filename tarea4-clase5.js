//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function crearArray() {
    let $numerosDeLaLista = document.querySelectorAll('ol > li')

    function calcularPromedio() {
        let contador = 0;
        for (let i = 0; i < $numerosDeLaLista.length; i++) {
            contador += Number($numerosDeLaLista[i].textContent);
        }
        // console.log(contador);
        const promedio = contador / $numerosDeLaLista.length;
        const promedioToFixed = promedio.toFixed(2)
        // console.log(promedio);
        const $domPromedio = document.querySelector('#promedio')
        $domPromedio.textContent = `El promedio es de ${promedioToFixed}`;
    }
    calcularPromedio();

    function numeroMasPequenio() {
        let arrayConLosNumeros = [];
        for (let i = 0; i < $numerosDeLaLista.length; i++) {
            const numeros = Number($numerosDeLaLista[i].textContent);
            arrayConLosNumeros.push(numeros);

        }
        const menor = Math.min(...arrayConLosNumeros);
        // console.log(menor);
        const $numeroMenor = document.querySelector('#menor')
        $numeroMenor.textContent = `El número mas pequeño de la lista es ${menor}`;
    }
    numeroMasPequenio();

    function numeroMasGrande() {
        let arrayConLosNumeros = [];
        for (let i = 0; i < $numerosDeLaLista.length; i++) {
            const numeros = Number($numerosDeLaLista[i].textContent);
            arrayConLosNumeros.push(numeros);

        }
        const mayor = Math.max(...arrayConLosNumeros);
        console.log(mayor);

        // const $numeroMayor = document.querySelector('#mayor')
        // $numeroMayor.textContent = `...`;
    }
    numeroMasGrande();


    function repeticion() {

    }
    // const $mayorRepeticion = document.querySelector('#repeticion')
    // $mayorRepeticion.textContent = `...`;
}
crearArray();

