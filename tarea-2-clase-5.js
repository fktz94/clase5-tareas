//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*/


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

