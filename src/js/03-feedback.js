import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');
const { email, message } = feedbackFormRef.elements;

const currentValueOfForm = {};
const STORAGE_KEY = 'feedback-form-state';

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};
const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

feedbackFormRef.addEventListener(
  'input',
  throttle(saveDataInLocaleStorage, 500)
);
window.addEventListener('DOMContentLoaded', fillFromStorage);
feedbackFormRef.addEventListener('submit', handleSubmit);

function saveDataInLocaleStorage(e) {
  currentValueOfForm.email = email.value.trim();
  currentValueOfForm.message = message.value.trim();
  save(STORAGE_KEY, currentValueOfForm);
}

function fillFromStorage(e) {
  const currentState = load(STORAGE_KEY);
  if (currentState) {
    email.value = currentState.email;
    message.value = currentState.message;
  }
}

function handleSubmit(ev) {
  ev.preventDefault();
  const valueEmail = ev.srcElement[0].value;
  const valueMessage = ev.srcElement[1].value;
  const getDataOnSubmit = {};

  if (valueEmail === '' || valueMessage === '') {
    alert('Незаповнені поля! Введіть дані!');
    return;
  } else {
    getDataOnSubmit.email = valueEmail;
    getDataOnSubmit.message = valueMessage;
    console.log(getDataOnSubmit);
    localStorage.removeItem(STORAGE_KEY);
    feedbackFormRef.reset();
  }
}



