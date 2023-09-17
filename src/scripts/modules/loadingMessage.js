import {cardsList} from "../script.js";

export const renderLoadingMessage = (loadingMessage) => {
  deleteLoadingMessage()
  const message =
      loadingMessage === 'error' ? 'Произошла ошибка при загрузке данных.' :
          loadingMessage === 'loading' ? 'Идёт загрузка данных...' :
              null;
  const loadingMessageElement = document.createElement('p');
  loadingMessageElement.classList.add('loadingMessage')
  loadingMessageElement.textContent = message
  if (loadingMessage === 'error') {
    loadingMessageElement.style.color = 'red';
  }
  cardsList.appendChild(loadingMessageElement)
}

export const deleteLoadingMessage = () => {
  const loadingMessageElement = document.querySelector(`.loadingMessage`);
  if (loadingMessageElement) {
    loadingMessageElement.remove();
  }
};


