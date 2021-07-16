import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modalSlice';

// Название переменной в localstorage
const varName = 'vkMiniApp';

// Преобразовать объект в строку и сохранить в localStorage
const saveToLocalStorage = (state) => {
  try {
    const serialisedState = btoa(JSON.stringify(state));
    localStorage.setItem(varName, serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// Загружаем строку из localStarage и конвертируем в объект
// При ошибки возвращяем undefined
const loadFromLocalStorage = () => {
  try {
    const serialisedState = atob(localStorage.getItem(varName));
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

 const store = configureStore({
  reducer: {
    modal: modalReducer
  },
  preloadedState: loadFromLocalStorage()
})

// Сохраняем в localStorage, все кроме состояния Модального окна
store.subscribe(() => saveToLocalStorage({ ...store.getState(), modal: { showModal: null } }))

export default store;



