const form = document.getElementById('form-numerico');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);
    
    if (valorB > valorA) {
        successMessage.textContent = `Formulario enviado com sucesso.`;
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        
        campoA.value = '';
        campoB.value = '';

    } else {
        errorMessage.textContent = `Campo B (${valorB}) deve ser maior que Campo A (${valorA}).`;
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});