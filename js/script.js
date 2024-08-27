const backTo = document.getElementById('back-to');

document.addEventListener('DOMContentLoaded', function () {
    // input nama dengan javascript
    let fullName = prompt('Siapakah nama Anda?', 'Ismail Akromul Jundi');

    document.getElementById('username').innerText = fullName;

    // mengubah warna navbar ketika discroll
    window.addEventListener('scroll', navScroll);
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