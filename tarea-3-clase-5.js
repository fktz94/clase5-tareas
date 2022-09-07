const $calcular = document.querySelector('#calcular');


$calcular.onclick = function () {

    const clase1Segundos = document.querySelector('#clase1-segundos').value;
    const clase2Segundos = document.querySelector('#clase2-segundos').value;
    const clase3Segundos = document.querySelector('#clase3-segundos').value;
    const clase4Segundos = document.querySelector('#clase4-segundos').value;
    const clase5Segundos = document.querySelector('#clase5-segundos').value;

    function sumarSegundos() {
        return Number(clase1Segundos) + Number(clase2Segundos) + Number(clase3Segundos) + Number(clase4Segundos) + Number(clase5Segundos);
    }
    sumarSegundos()

    const clase1Minutos = document.querySelector('#clase1-minutos').value;
    const clase2Minutos = document.querySelector('#clase2-minutos').value;
    const clase3Minutos = document.querySelector('#clase3-minutos').value;
    const clase4Minutos = document.querySelector('#clase4-minutos').value;
    const clase5Minutos = document.querySelector('#clase5-minutos').value;

    function sumarMinutos() {
        return Number(clase1Minutos) + Number(clase2Minutos) + Number(clase3Minutos) + Number(clase4Minutos) + Number(clase5Minutos);
    }
    sumarMinutos();

    const clase1Horas = document.querySelector('#clase1-horas').value;
    const clase2Horas = document.querySelector('#clase2-horas').value;
    const clase3Horas = document.querySelector('#clase3-horas').value;
    const clase4Horas = document.querySelector('#clase4-horas').value;
    const clase5Horas = document.querySelector('#clase5-horas').value;

    function sumarHoras() {
        return Number(clase1Horas) + Number(clase2Horas) + Number(clase3Horas) + Number(clase4Horas) + Number(clase5Horas);
    }
    sumarHoras();


    function resultadoTiempo() {

        const horasSumadas = sumarHoras() * 60

        const minutosSumados = (sumarMinutos() + horasSumadas) * 60;

        const segundosSumados = (sumarSegundos() + minutosSumados);
        // document.querySelector('#resultado').textContent = `Todo pasado a segundos da ${segundosSumados} segundos.`

        let segundos = segundosSumados % 60;
        if (segundos < 10) {
            segundos = `0${segundos}`
        }
        // document.querySelector('#resultado-segundos').textContent = `Segundos : ${segundos}`;

        let minutos = Math.floor((segundosSumados % 3600) / 60)
        if (minutos < 10) {
            minutos = `0${minutos}`
        }
        // document.querySelector('#resultado-minutos').textContent = `Minutos : ${minutos}`

        let horas = Math.floor((segundosSumados / 3600) % 3600)
        if (horas < 10) {
            horas = `0${horas}`
        }
        // document.querySelector('#resultado-horas').textContent = `Horas : ${horas}`

        document.querySelector('#resultado').textContent = `El resultado es ${horas} hs ${minutos} min ${segundos} segs. `
        // console.log(`El resultado es ${horas}hs ${minutos}mins ${segundos}secs `);

    }
    resultadoTiempo();
}

