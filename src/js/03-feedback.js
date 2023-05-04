// обрати елементів DOM для роботи;
// зберегти поточні поля форми в локал;
// після перезавантаження внести дані з локалу(якщо там є ) в поля форми;
// стерти поля форми та вивести в консоль значення полів під час сaбміту;
// тротле добавити.
import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');
const button = document.querySelector('button');
const STORAGE_KEY = 'feedback-form-state';
const currentValueOfForm = {};

let IsFillEmail = false;
let IsFillMessage = false;
// console.log(IsFillEmail);
// console.log(IsFillMessage);
// console.dir(input);
// console.log(input.value);
// console.dir(textArea);
// console.log(textArea.value);

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

feedbackFormRef.addEventListener('input', throttle(getCurrentValueOfForm, 500));

function getCurrentValueOfForm(e) {
  const nameField = e.target.tagName;
  const valueOfField = e.target.value.trim();

  if (valueOfField === '') {
    alert('Потрібно ввести текст!');
    return;
  }
  {
    if (nameField === 'INPUT') {
      currentValueOfForm.email = valueOfField;
      IsFillEmail = true;
      // console.log(IfFillEmail);
      save(STORAGE_KEY, currentValueOfForm);
    } else {
      if (nameField === 'TEXTAREA') {
        currentValueOfForm.message = valueOfField;
        IsFillMessage = true;
        // console.log(IfFillMessage);
        save(STORAGE_KEY, currentValueOfForm);
      }
    }
  }
}

window.addEventListener('DOMContentLoaded', fillFromStorage);
function fillFromStorage(e) {
  const currentState = load(STORAGE_KEY);

  if (currentState.email) {
    input.value = currentState.email;
  }
  // console.log(input.value);

  if (currentState.message) {
    textArea.value = currentState.message;
  }
  // console.log(textArea.value);

  if (input.value && textArea.value) {
    IsFillMessage = true;
    IsFillEmail = true;
  }
}

button.addEventListener('click', handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  if (IsFillMessage && IsFillEmail) {
    console.log(load(STORAGE_KEY));
    clearStorage();
    clearForm();
    IsFillMessage = false;
    IsFillEmail = false;
  } else {
    alert('Незаповнені поля! Введіть дані!');
    return;
  }
}

function clearStorage() {
  save(STORAGE_KEY, {});
}

function clearForm() {
  input.value = '';
  textArea.value = '';
}
// console.dir(input);
// console.log(input.value);
// console.dir(textArea);
// console.log(textArea.value);
