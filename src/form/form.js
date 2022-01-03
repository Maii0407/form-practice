
const Form = (function(){
    const formContainer = function(){
        const form = document.createElement('form');
        form.classList.add('form-wrapper');
        document.getElementById('container').appendChild(form);

        return form;
    };

//below is the email section of the form
    const makeEmailSection = function(){
        const emailLabel = document.createElement('label');
        emailLabel.setAttribute('for', 'email');
        emailLabel.innerText = 'Enter E-Mail';
        document.querySelector('.form-wrapper').appendChild(emailLabel);

        const emailInput = document.createElement('input');
        emailInput.id = 'email';
        emailInput.setAttribute( 'type', 'email' );
        document.querySelector('.form-wrapper').appendChild(emailInput);
    };

//below is the country section of the form
    const makeCountrySection = function(){
        const countryLabel = document.createElement('label');
        countryLabel.setAttribute('for', 'country');
        countryLabel.innerText = 'Enter Country';
        document.querySelector('.form-wrapper').appendChild(countryLabel);

        const countryInput = document.createElement('input');
        countryInput.id = 'country';
        countryInput.setAttribute( 'type', 'text' );
        document.querySelector('.form-wrapper').appendChild(countryInput);
    };

//below is zip code section of the form
    const makeZipCodeSection = function(){
        const zipCodeLabel = document.createElement('label');
        zipCodeLabel.setAttribute('for', 'zipCode');
        zipCodeLabel.innerText = 'Enter Zip Code';
        document.querySelector('.form-wrapper').appendChild(zipCodeLabel);

        const zipCodeInput = document.createElement('input');
        zipCodeInput.id = 'zipCode';
        zipCodeInput.setAttribute( 'type', 'text' );
        document.querySelector('.form-wrapper').appendChild(zipCodeInput);
    };

//below is password section of the form
    const makePasswordSection = function(){
        const passwordLabel = document.createElement('label');
        passwordLabel.setAttribute('for', 'password');
        passwordLabel.innerText = 'Enter Password';
        document.querySelector('.form-wrapper').appendChild(passwordLabel);

        const passwordInput = document.createElement('input');
        passwordInput.id = 'password';
        passwordInput.setAttribute( 'type', 'password' );
        document.querySelector('.form-wrapper').appendChild(passwordInput);
    };

//below is password confirmation section
    const makePasswordConfirmSection = function(){
        const confirmLabel = document.createElement('label');
        confirmLabel.setAttribute('for', 'confirm');
        confirmLabel.innerText = 'Confirm Password';
        document.querySelector('.form-wrapper').appendChild(confirmLabel);

        const confirmInput = document.createElement('input');
        confirmInput.id = 'confirm';
        confirmInput.setAttribute( 'type', 'password' );
        document.querySelector('.form-wrapper').appendChild(confirmInput);
    };

//below makes the button for the form
    const makeButton = function(){
        const button = document.createElement('button');
        button.innerText = 'Submit Form';
        document.querySelector('.form-wrapper').appendChild(button);

        return button;
    };

    const makeForm = function(){
        formContainer();
        makeEmailSection();
        makeCountrySection();
        makeZipCodeSection();
        makePasswordSection();
        makePasswordConfirmSection();
        makeButton();
    };

    return {
        makeForm,
    };
})();

export { Form };