const backTo = document.getElementById('back-to');
const hamburger = document.querySelector('#hamburger-menu');
const navbarNav = document.querySelector('.navbar-list');
const form = document.getElementById('contact-form');

document.addEventListener('DOMContentLoaded', function () {
    // input nama dengan javascript
    let fullName = prompt('Siapakah nama Anda?', 'Ismail Akromul Jundi');

    document.getElementById('username').innerText = fullName;

    // mengubah warna navbar ketika discroll + back to top
    window.addEventListener('scroll', navScroll);

    // klik hamburger menu
    hamburger.addEventListener('click', hamburgClick)

    // form submit
    form.addEventListener('submit', formSubmit);
})

function navScroll() {
    if (window.scrollY > 100) {
        document.querySelector('.nav-bar').classList.add('solid');
        backTo.classList.add('appear');
    } else {
        document.querySelector('.nav-bar').classList.remove('solid');
        backTo.classList.remove('appear');
    }
}

function hamburgClick() {
    navbarNav.classList.toggle('active');
    hamburger.classList.toggle('slide');
}

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
        hamburger.classList.remove('slide');
    }
})

document.querySelectorAll('.navbar-list').forEach(n => n.addEventListener('click', () => {
    navbarNav.classList.remove('active');
    hamburger.classList.remove('slide');
}))

function formSubmit(event) {
    event.preventDefault();
    const inputName = document.getElementById('input-name').value;
    const inputEmail = document.getElementById('input-email').value;
    const inputMessage = document.getElementById('input-message').value;
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');

    // membuat cardName
    const cardName = document.createElement('div');
    cardName.classList = 'card-name';

    if (inputName.trim() !== "") {
        // membuat outputName
        const outputName = document.createElement('div');
        outputName.classList = 'output-name';

        // membuat labelName
        const labelName = document.createElement('p');
        labelName.classList = 'label-name';
        labelName.textContent = 'Name';

        // membuat contentName
        const contentName = document.createElement('p');
        contentName.classList = 'content-name';
        contentName.textContent = inputName;

        // memasukkan content, label name ke dalam card
        outputName.appendChild(labelName);
        outputName.appendChild(contentName);
        cardName.append(outputName);

        // memasukkan card ke div output
        document.querySelector('.output-contact').appendChild(cardName);

        document.getElementById('input-name').value = "";
    } else if (inputName == "") {
        nameError.textContent = 'INPUT NAME CORRECTLY!';
        document.getElementById('input-name').addEventListener('input', function () {
            nameError.textContent = "";
        })
    } else {
        nameError.textContent = '';
    }

    if (inputEmail !== "") {
        // membuat outputEmail
        const outputEmail = document.createElement('div');
        outputEmail.classList = 'output-email';

        // membuat labelEmail
        const labelEmail = document.createElement('p');
        labelEmail.classList = 'label-email';
        labelEmail.textContent = 'Email';

        // membuat contentEmail
        const contentEmail = document.createElement('p');
        contentEmail.classList = 'content-email';
        contentEmail.textContent = inputEmail;

        // memasukkan content, label email ke dalam card
        outputEmail.appendChild(labelEmail);
        outputEmail.appendChild(contentEmail);
        cardName.append(outputEmail);

        // memasukkan card ke div output
        document.querySelector('.output-contact').appendChild(cardName);

        document.getElementById('input-email').value = "";
    } else if (inputEmail == "") {
        emailError.textContent = 'INPUT EMAIL CORRECTLY!';
        document.getElementById('input-email').addEventListener('input', function () {
            emailError.textContent = "";
        })
    } else {
        emailError.textContent = '';
    }

    if (inputMessage.trim() !== "") {
        // membuat outputMessage
        const outputMessage = document.createElement('div');
        outputMessage.classList = 'output-message';

        // membuat labelMessage
        const labelMessage = document.createElement('p');
        labelMessage.classList = 'label-message';
        labelMessage.textContent = 'Message';

        // membuat contentMessage
        const contentMessage = document.createElement('p');
        contentMessage.classList = 'content-message';
        contentMessage.textContent = inputMessage;

        // memasukkan content, label email ke dalam card
        outputMessage.appendChild(labelMessage);
        outputMessage.appendChild(contentMessage);
        cardName.append(outputMessage);

        // memasukkan card ke div output
        document.querySelector('.output-contact').appendChild(cardName);

        document.getElementById('input-message').value = "";
    }
}