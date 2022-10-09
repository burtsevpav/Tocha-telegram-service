// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Форма email
const formItem = document.forms.formone;
const userEmail = formItem.email;
const formError = document.querySelector(`.form-block__error`);
formItem.addEventListener("submit", formCancelFn);
function formCancelFn(e) {
  if (!userEmail.value) {
    e.preventDefault();
    formError.textContent = `Введите e-mail!`;
  }
}
