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
        $numeroMenor.textContent = `El número más pequeño de la lista es ${menor}`;
    }
    numeroMasPequenio();

    function numeroMasGrande() {
        let arrayConLosNumeros = [];
        for (let i = 0; i < $numerosDeLaLista.length; i++) {
            const numeros = Number($numerosDeLaLista[i].textContent);
            arrayConLosNumeros.push(numeros);
        }
        const mayor = Math.max(...arrayConLosNumeros);
        // console.log(mayor);

        const $numeroMayor = document.querySelector('#mayor')
        $numeroMayor.textContent = `El número más grande de la lista es ${mayor}`;
    }
    numeroMasGrande();


    function numeroFrecuente() {
        let arrayConLosNumeros = [];
        for (let i = 0; i < $numerosDeLaLista.length; i++) {
            const numeros = Number($numerosDeLaLista[i].textContent);
            arrayConLosNumeros.push(numeros);
        }
        // console.log(arrayConLosNumeros);
        let contadorBase = 1;
        let contadorInterno = 0;
        let numeroMasRepetido;
        for (let i = 0; i < arrayConLosNumeros.length; i++) {
            for (let j = i; j < arrayConLosNumeros.length; j++) {
                if (arrayConLosNumeros[i] == arrayConLosNumeros[j])
                    contadorInterno++;
                if (contadorBase < contadorInterno) {
                    contadorBase = contadorInterno;
                    numeroMasRepetido = arrayConLosNumeros[i];
                }
            }
            contadorInterno = 0;
        }
        // console.log(`${numeroMasRepetido} ( ${contadorBase} times ) `);
        const $mayorRepeticion = document.querySelector('#repeticion')
        $mayorRepeticion.textContent = `El número que más se repite es ${numeroMasRepetido}, un total de ${contadorBase} veces.`;
    }
    numeroFrecuente()

}
crearArray();

