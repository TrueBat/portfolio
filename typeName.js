let i = 0;
let first = 'Mohammad';
let second = 'Karim';
let firstName = 'Mohammad Karim';
let lastName = 'Abo Hosa';
let speed = 100;

function typeWriter(name, elementId) {
    if (i < name.length) {
        document.getElementById(elementId).innerHTML += name.charAt(i);
        i++;
        setTimeout(() => typeWriter(name, elementId), speed);
    } else if (elementId === 'firstName') {
        i = 0;
        document.getElementById('firstName').classList.remove('beingTyped');
        document.getElementById('lastName').classList.add('beingTyped');
        typeWriter(lastName, 'lastName');
    }
}

function typeWriterMobile(name, elementId) {
    if (i < name.length) {
        document.getElementById(elementId).innerHTML += name.charAt(i);
        i++;
        setTimeout(() => typeWriterMobile(name, elementId), speed);
    } else if (elementId === 'firstName') {
        i = 0;
        document.getElementById('firstName').classList.remove('beingTyped');
        document.getElementById('secondName').classList.add('beingTyped');
        typeWriterMobile(second, 'secondName');
    } else if (elementId === 'secondName') {
        i = 0;
        document.getElementById('secondName').classList.remove('beingTyped');
        document.getElementById('lastName').classList.add('beingTyped');
        typeWriterMobile(lastName, 'lastName');
    }
}

if (window.innerWidth <= 768) {
    document.getElementById('firstName').classList.add('beingTyped');
    typeWriterMobile(first, 'firstName');

} else {
    document.getElementById('firstName').classList.add('beingTyped');
    typeWriter(firstName, 'firstName');
}

