document.addEventListener('DOMContentLoaded', function () {
    // input nama dengan javascript
    const fullName = prompt('Siapakah nama Anda?', 'Ismail Akromul Jundi');

    document.getElementById('username').innerText = fullName;

    // mengubah warna navbar ketika discroll + back to top
    window.addEventListener('scroll', function () {
        const backTo = document.getElementById('back-to');

        if (window.scrollY > 100) {
            document.querySelector('.nav-bar').classList.add('solid');
            backTo.classList.add('appear');
        } else {
            document.querySelector('.nav-bar').classList.remove('solid');
            backTo.classList.remove('appear');
        }
    });

    // klik hamburger menu
    const hamburger = document.getElementById('hamburger-menu');
    const navbarNav = document.querySelector('.navbar-list');

    // jika hamburger diklik pada bagian hamburger menu
    hamburger.addEventListener('click', function () {
        navbarNav.classList.toggle('active');
        hamburger.classList.toggle('slide');
    })

    // jika hamburger diklik diluar bagian hamburger menu
    document.addEventListener('click', function (e) {
        if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
            navbarNav.classList.remove('active');
            hamburger.classList.remove('slide');
        }
    })

    // jika tiap item hamburger diklik
    document.querySelectorAll('.navbar-list').forEach(function (item) {
        item.addEventListener('click', function () {
            navbarNav.classList.remove('active');
            hamburger.classList.remove('slide');
        })
    })

    // form submit
    const myForm = document.getElementById('contact-form');

    // validasi nama dan email
    validateName();
    validateEmail();

    myForm.addEventListener('submit', function (e) {
        // agar tidak refresh halaman
        e.preventDefault();

        // deklarasi variabel
        const inputName = document.forms['contact-form']['input-name'];
        const inputEmail = document.forms['contact-form']['input-email'];
        const inputMessage = document.forms['contact-form']['input-message'];

        // membuat cardName
        const cardName = document.createElement('div');
        cardName.classList = 'card-name';

        // input name
        if (inputName.value !== '') {
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
            contentName.textContent = inputName.value;

            // memasukkan content, label name ke dalam card
            outputName.appendChild(labelName);
            outputName.appendChild(contentName);
            cardName.append(outputName);

            // memasukkan card ke div output
            document.querySelector('.output-contact').appendChild(cardName);

            document.getElementById('input-name').value = '';
        }

        // input email
        if (inputEmail.value !== "") {
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
            contentEmail.textContent = inputEmail.value;

            // memasukkan content, label email ke dalam card
            outputEmail.appendChild(labelEmail);
            outputEmail.appendChild(contentEmail);
            cardName.append(outputEmail);

            // memasukkan card ke div output
            document.querySelector('.output-contact').appendChild(cardName);

            document.getElementById('input-email').value = '';
        }

        // input message
        if (inputMessage.value !== '') {
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
            contentMessage.textContent = inputMessage.value;

            // memasukkan content, label email ke dalam card
            outputMessage.appendChild(labelMessage);
            outputMessage.appendChild(contentMessage);
            cardName.append(outputMessage);

            // memasukkan card ke div output
            document.querySelector('.output-contact').appendChild(cardName);

            document.getElementById('input-message').value = '';
        }
    })
})

function validateName() {
    const inputName = document.getElementById('input-name');
    const nameDefault = document.getElementById('name-default');
    const nameError = document.getElementById('name-error');

    if (inputName.value.length == 0) {
        nameDefault.textContent = 'Input your name';
        inputName.addEventListener('input', function () {
            nameDefault.textContent = '';
        })
    } else if (/\d/.test(inputName.value)) {
        nameError.textContent = 'Input name correctly!';
        inputName.addEventListener('input', function () {
            if (!/\d/.test(inputName.value)) {
                nameError.textContent = '';
            }
        })
    } else {
        nameError.textContent = '';
    }
}

function validateEmail() {
    const inputEmail = document.getElementById('input-email');
    const emailDefault = document.getElementById('email-default');
    const emailError = document.getElementById('email-error');
    const emailVerify = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (inputEmail.value.length == 0) {
        emailDefault.textContent = 'Input your email';
        inputEmail.addEventListener('input', function () {
            emailDefault.textContent = '';
        })
    } else if (!inputEmail.value.match(emailVerify)) {
        emailError.textContent = 'Please input email correctly!';
        document.getElementById('input-email').addEventListener('input', function () {
            emailError.textContent = '';
        })
    } else {
        emailError.textContent = '';
    }
}