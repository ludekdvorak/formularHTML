window.addEventListener('load', function (e) {
    function trim(value) {
        return value.replace(/^[\s\t]+/g, '').replace(/[\s\t]+$/g, '');
    }
    // Načtení uložených hodnot formuláře ukládá se pouze ale po odeslání formuláře :/
    var nameValue = localStorage.getItem('nf');
    var icoValue = localStorage.getItem('icoo');
    var birthDateValue = localStorage.getItem('birthDate');
    var emailValue = localStorage.getItem('email');

    // Nastavení hodnot formuláře ukládá se pouze ale po odeslání formuláře :/
    if (nameValue) {
        document.getElementById('nf').value = nameValue;
    }
    if (icoValue) {
        document.getElementById('icoo').value = icoValue;
    }
    if (birthDateValue) {
        document.getElementById('birth-date').value = birthDateValue;
    }
    if (emailValue) {
        document.getElementById('email').value = emailValue;
    }

    document.getElementById('person-form').addEventListener('submit', function (e) {
        var
            name = trim(document.getElementById('nf').value),
            ico = trim(document.getElementById('icoo').value),
            bd = trim(document.getElementById('birth-date').value),
            em = trim(document.getElementById('email').value);

        // Uložení hodnot
        localStorage.setItem('nf', name);
        localStorage.setItem('icoo', ico);
        localStorage.setItem('birthDate', bd);
        localStorage.setItem('email', em);

        if (!name || /[^a-záčďéěíňóřšťúůýž]\s+[^a-záčďéěíňóřšťúůýž]/gi.test(name)) { // regulární výraz pro jakkýkoliv název
            alert('Formulářové pole „Nazev firmy“ musí být správně vyplněno!');
            e.preventDefault();
            return false;
        }
        if (!/[0-9]|[1-9][0-9]$/gi.test(ico)) { // regulární výraz pro jakkékoliv číslo
            alert('Formulářové pole „IČO“ musí být správně vyplněno!');
            e.preventDefault();
            return false;
        }
        if (!/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/gi.test(bd)) { // regulární výraz pro datum
            alert('Formulářové pole „Datum narození“ musí být správně vyplněno!');
            e.preventDefault();
            return false;
        }
        if (!/^[a-z_\.\-]+@[a-z_\.\-]+[a-z]{2,3}$/gi.test(em)) { // regulární výraz pro email
            alert('Formulářové pole „Email“ musí být správně vyplněno!');
            e.preventDefault();
            return false;
        }
        document.getElementById('person-form').action = 'ukol_dvorak_sporitelna2.html'; // dostane nás na jinou stránku
        return true;
    });
});