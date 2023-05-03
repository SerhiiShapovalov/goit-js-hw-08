import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(e) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  // if (email.value === '' || message.value === '') {
  //   return alert('Должны быть заполнены все поля!');
  // } else if (email.value !== '' && message.value !== '') {
  //   console.log({ email: email.value, message: message.value });
  // }
  if (email.value !== '' && message.value !== '') {
    console.log({ email: email.value, message: message.value });
  } else {
    return alert('Должны быть заполнены все поля!');
  }
  localStorage.removeItem(LOCAL_KEY);
  e.currentTarget.reset();
  dataForm = {};
}
