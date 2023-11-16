function validateForm() {
    // Check if the required fields are filled
    var card = document.getElementById("card").value;
    var cvc = document.getElementById("cvc").value;
    var amount = document.getElementById("amount").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var postalCode = document.getElementById("postalCode").value;
    var payOptions = document.querySelector('input[name="payOptions"]:checked');

    var missingFieldsAlert = document.getElementById("missingFieldsAlert");

    if (!card || !cvc || !amount || !firstName || !lastName || !city || !state || !postalCode || !payOptions) {
        // Mostrar la alerta si falta algún campo
        missingFieldsAlert.classList.remove("d-none");
        return false; // Prevenir la presentación del formulario
    } else {
        // Ocultar la alerta si todos los campos están completos
        missingFieldsAlert.classList.add("d-none");
    }

    // Lógica de validación adicional puede ser agregada aquí

    // Si todas las validaciones pasan, permitir el envío del formulario
    return true;
}

function onlyNumbers(input) {
    // Reemplaza cualquier caracter que no sea un número con una cadena vacía
    input.value = input.value.replace(/[^0-9]/g, '');
}

// Asigna la función onlyNumbers al evento oninput de los campos de entrada
document.getElementById('card').oninput = function() {
    onlyNumbers(this);
};

document.getElementById('cvc').oninput = function() {
    onlyNumbers(this);
};

document.getElementById('amount').oninput = function() {
    onlyNumbers(this);
};

document.getElementById('postalCode').oninput = function() {
    onlyNumbers(this)
}