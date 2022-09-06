const $submit = document.querySelector('#submit');

$submit.onclick = function () {

    const $titulo = document.querySelector('#titulo');
    const $nombreUsuario = document.querySelector('#nombre-usuario') || '';

    $titulo.textContent = `Bienvenidx ${$nombreUsuario.value}`;

    const $edadUsuario = Number(document.querySelector('#edad-usuario').value);
    const $apellidoUsuario = document.querySelector('#apellido-usuario') || '';

    const datosUsuarioDiv = document.createElement('div');
    const datosUsuarioP = document.createElement('p');
    const textoDatosUsuario = document.createTextNode(`Hola ${$nombreUsuario.value} ${$apellidoUsuario.value}, parece que tienes ${$edadUsuario} años de edad`);

    datosUsuarioP.appendChild(textoDatosUsuario);
    datosUsuarioDiv.appendChild(datosUsuarioP);
    document.querySelector('main').appendChild(datosUsuarioDiv);
}

