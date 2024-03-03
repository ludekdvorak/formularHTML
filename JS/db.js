window.addEventListener('load', function (e) { // getovací funkce čistě pro zobrazení výsledného formuláře
    var nameValue = localStorage.getItem('nf');
    var icoValue = localStorage.getItem('icoo');
    var birthDateValue = localStorage.getItem('birthDate');
    var emailValue = localStorage.getItem('email');

    document.getElementById('nf').textContent = nameValue;
    document.getElementById('icoo').textContent = icoValue;
    document.getElementById('birth-date').textContent = birthDateValue;
    document.getElementById('email').textContent = emailValue;
});