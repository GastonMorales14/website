"use strict";

const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#trucazo');


$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);

    $buttonMailto.setAttribute('href', `mailto:gastonmoralestrey@gmail.com?subject=nombre: ${form.get('subject')} correo: ${form.get('email')}&body=${form.get('message')}`);
    $buttonMailto.click();
}