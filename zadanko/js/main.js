var button = document.getElementById('button');

button.addEventListener('click', function(e) {
    var email = document.getElementById('email');

    if (email.value !== 'EMAIL') {
        e.preventDefault();
        email.setCustomValidity('PROSZĘ WPISAĆ E-MAIL');
    } else {
        email.setCustomValidity('');
    }
});
