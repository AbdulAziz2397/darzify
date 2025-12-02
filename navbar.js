// user button clicked modal
const userButton = document.getElementById('user-button');
const userSlideMenu = document.getElementById('user-slide-menu');

let isSlideMenuOpen = false;

userButton.addEventListener('click', () => {
    isSlideMenuOpen = !isSlideMenuOpen;
    slideMenuToggle();
})

let slideMenuToggle = () => {
    if (isSlideMenuOpen) {
        userSlideMenu.classList.replace('opacity-0', 'opacity-100')
        userSlideMenu.classList.replace('pointer-events-none', 'pointer-events-auto')
        userSlideMenu.classList.replace('translate-y-10', 'translate-y-0')
    }
    else {
        userSlideMenu.classList.replace('opacity-100', 'opacity-0')
        userSlideMenu.classList.replace('pointer-events-auto', 'pointer-events-none')
        userSlideMenu.classList.replace('translate-y-0', 'translate-y-10')
    }
}

window.addEventListener('click', (e) => {
    if (!userSlideMenu.contains(e.target) && e.target !== userButton) {
        isSlideMenuOpen = false;
        slideMenuToggle();
    }
});

// Sign in button clicked modal
const loginButton = document.getElementById('login-button');
const loginModalXButton = document.getElementById('login-modal-xbutton');
const loginModal = document.getElementById('login-modal');
const loginInner = document.getElementById('login-inner');

let isLoginModalOpen = false;

loginButton.addEventListener('click', () => {
    isLoginModalOpen = true;
    LoginModalFunction();
})
loginModalXButton.addEventListener('click', () => {
    isLoginModalOpen = false;
    LoginModalFunction();
})
let LoginModalFunction = () => {
    if (isLoginModalOpen) {
        loginModal.classList.replace('opacity-0', 'opacity-100')
        loginModal.classList.replace('pointer-events-none', 'pointer-events-auto')
        document.body.style.overflow = 'hidden';
        isSlideMenuOpen = false;
        slideMenuToggle();
    }
    else {
        loginModal.classList.replace('opacity-100', 'opacity-0')
        loginModal.classList.replace('pointer-events-auto', 'pointer-events-none')
        document.body.style.overflow = 'auto';
    }
}
loginInner.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent bubbling to modal
});

loginModal.addEventListener('click', (e) => {
    isLoginModalOpen = false;
    LoginModalFunction();
});

// Toggle login form
let emailFormButton = document.getElementById('email-form-btn');
let phoneFormButton = document.getElementById('phone-form-btn');

let LoginWithPhoneForm = document.getElementById('phone-login');
let LoginWithEmailForm = document.getElementById('email-login');

// Show Email Login Form
emailFormButton.addEventListener('click', () => {
    LoginWithEmailForm.classList.remove('hidden');
    LoginWithEmailForm.classList.add('flex');

    LoginWithPhoneForm.classList.add('hidden');
    LoginWithPhoneForm.classList.remove('flex');
});

// Show Phone Login Form
phoneFormButton.addEventListener('click', () => {
    LoginWithPhoneForm.classList.remove('hidden');
    LoginWithPhoneForm.classList.add('flex');

    LoginWithEmailForm.classList.add('hidden');
    LoginWithEmailForm.classList.remove('flex');
});


// Phone nuber input field
const input = document.querySelector("#phone");
const output = document.querySelector("#output");

const iti = window.intlTelInput(input, {
    initialCountry: "in",
    nationalMode: true,
    loadUtils: () => import("/intl-tel-input/js/utils.js?1761771962076"), // for formatting/placeholders etc
    separateDialCode: true,
    loadUtils: () => import("/intl-tel-input/js/utils.js?1761771962076"), // for formatting/placeholders etc
});

const handleChange = () => {
    let text;
    if (input.value) {
        text = iti.isValidNumber()
            ? "Valid number! Full international format: " + iti.getNumber()
            : "Invalid number - please try again";
    } else {
        text = "Please enter a valid number below";
    }
    const textNode = document.createTextNode(text);
    output.innerHTML = "";
    output.appendChild(textNode);
};

// listen to "keyup", but also "change" to update when the user selects a country
input.addEventListener('change', handleChange);
input.addEventListener('keyup', handleChange);