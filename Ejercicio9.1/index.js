const rutInput = document.getElementById('rut');
const nombreInput = document.getElementById('nombre');
const direccionInput = document.getElementById('direccion');
const comunaInput = document.getElementById('comuna');
const telefonoInput = document.getElementById('telefono');
const correoInput = document.getElementById('correo');

rutInput.addEventListener('blur', validarRut);
nombreInput.addEventListener('blur', validarNombre);
direccionInput.addEventListener('blur', validarDireccion);
comunaInput.addEventListener('blur', validarComuna);
telefonoInput.addEventListener('blur', validarTelefono);

function validarRut() {
  const rutRegex = /^\d{7,8}-[\dkK]$/;
  if (rutRegex.test(rutInput.value)) {
    rutInput.classList.remove('invalid');
    rutInput.classList.add('valid');
    document.getElementById('rut-error').textContent = '';
  } else {
    rutInput.classList.remove('valid');
    rutInput.classList.add('invalid');
    document.getElementById('rut-error').textContent = 'El RUT ingresado no es válido.';
  }
}

function validarNombre() {
  const nombreRegex = /^[a-zA-Z\s]*$/;
  if (nombreRegex.test(nombreInput.value)) {
    nombreInput.classList.remove('invalid');
    nombreInput.classList.add('valid');
    document.getElementById('nombre-error').textContent = '';
  } else {
    nombreInput.classList.remove('valid');
    nombreInput.classList.add('invalid');
    document.getElementById('nombre-error').textContent = 'El nombre ingresado no es válido.';
  }
}

function validarDireccion() {
    const direccionRegex = /^[a-zA-Z0-9\s]*$/;
    if (direccionRegex.test(direccionInput.value)) {
        direccionInput.classList.remove('invalid');
        direccionInput.classList.add('valid');
        document.getElementById('direccion-error').textContent = '';
    } else {
        direccionInput.classList.remove('valid');
        direccionInput.classList.add('invalid');
        document.getElementById('direccion-error').textContent = 'La dirección ingresada no es válida.';
    }
}

function validarComuna() {
    const comunaRegex = /^[a-zA-Z0-9\s]*$/;
    if (comunaRegex.test(comunaInput.value)) {
        comunaInput.classList.remove('invalid');
        comunaInput.classList.add('valid');
        document.getElementById('direccion-error').textContent = '';
    } else {
        comunaInput.classList.remove('valid');
        comunaInput.classList.add('invalid');
        document.getElementById('direccion-error').textContent = 'La dirección ingresada no es válida.';
    }
}

function validarTelefono() {
    const telefonoRegex = /^\d{8}$/;
    if (telefonoRegex.test(telefonoInput.value)) {
    telefonoInput.classList.remove('invalid');
    telefonoInput.classList.add('valid');
    document.getElementById('telefono-error').textContent = '';
} else {
    telefonoInput.classList.remove('valid');
    telefonoInput.classList.add('invalid');
    document.getElementById('telefono-error').textContent = 'El teléfono ingresado no es válido. Debe tener 8 dígitos.';
}
}

function validarCorreo() {
const correoRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (correoRegex.test(correoInput.value)) {
    correoInput.classList.remove('invalid');
    correoInput.classList.add('valid');
    document.getElementById('correo-error').textContent = '';
} else {
    correoInput.classList.remove('valid');
    correoInput.classList.add('invalid');
    document.getElementById('correo-error').textContent = 'El correo electrónico ingresado no es válido.';
}
}

