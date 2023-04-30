// обрати елементів DOM для роботи;
// зберегти поточні поля форми в локал;
// після перезавантаження внести дані з локалу(якщо там є ) в поля форми;
// стерти поля форми та вивести в консоль значення полів під час сaбміту;
// тротле добавити.

const feedbackFormRef = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');
const button = document.querySelector('button');
const STORAGE_KEY = 'feedback-form-state';
const currentValueOfForm = {};

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

feedbackFormRef.addEventListener('input', getCurrentValueOfForm);

function getCurrentValueOfForm(e) {
  const nameField = e.target.tagName;
  const valueOfField = e.target.value;

  if (nameField === 'INPUT') {
    currentValueOfForm.email = valueOfField;
    save(STORAGE_KEY, currentValueOfForm);
  } else {
    if (nameField === 'TEXTAREA') {
      currentValueOfForm.message = valueOfField;
      save(STORAGE_KEY, currentValueOfForm);
    }
  }
}

window.addEventListener('DOMContentLoaded', fillFromStorage);
function fillFromStorage(e) {
  const currentState = load(STORAGE_KEY);

  if (currentState.email !== undefined) {
    input.value = currentState.email;
  }

  if (currentState.message !== undefined) {
    textArea.value = currentState.message;
  }
}

button.addEventListener('click', handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  console.log(load(STORAGE_KEY));

  clearStorage();
  clearForm();
}

function clearStorage() {
  save(STORAGE_KEY, '');
}
function clearForm() {
  input.value = '';
  textArea.value = '';
}
