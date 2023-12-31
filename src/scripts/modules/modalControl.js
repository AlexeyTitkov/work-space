import {API_URL, VACANCY_URL} from "../script.js";
import {getData} from "./getData.js";
import {renderError} from "./renderError.js";

const createDetailVacancy = ({
                               title,
                               company,
                               description,
                               email,
                               salary,
                               type,
                               format,
                               experience,
                               location,
                               logo,
                             }) => {
  return `

    <article class="detail">
      <div class="detail__header">
        <img class="detail__logo" src="${API_URL}${logo}" alt="logo Creative People">
        <p class="detail__company">${company}</p>
        <h2 class="detail__title">${title}</h2>
      </div>

      <div class="detail__main">
        <p class="detail__description">
         ${description.replaceAll('\n', '<br>')}
        </p>
        <ul class="detail__fields">
          <li class="detail__field">${salary}</li>
          <li class="detail__field">${type}</li>
          <li class="detail__field">${format}</li>
          <li class="detail__field">${experience}</li>
          <li class="detail__field">${location}</li>
        </ul>
      </div>

      <p class="detail__resume">Отправляйте резюме на
        <a class="blue-text" href="mailto:${email}">${email}</a></p>
    </article>
  `
}

const scrollService = {
  scrollPosition: 0,
  disabledScroll() {
    this.scrollPosition = window.scrollY;
    document.documentElement.style.scrollBehavior = "auto";
    document.body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: -${this.scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px;
      transition: all 0s ease-in-out;
    `;
  },
  enabledScroll() {
    document.body.style.cssText = "";
    document.body.style.cssText = `transition: all 0s ease-in-out;`;
    window.scroll({top: this.scrollPosition});
    document.documentElement.style.scrollBehavior = "";
    setTimeout(() => {
      document.body.style.cssText = "";
    }, 200)
  },
};

const renderModal = (data) => {
  const modal = document.createElement('div')
  modal.classList.add('modal')
  const modalMain = document.createElement('div')
  modalMain.classList.add('modal__main')
  modalMain.innerHTML = createDetailVacancy(data)
  const modalClose = document.createElement('button')
  modalClose.classList.add('modal__close')
  modalClose.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.7831 6L11.3887 1.39444C11.4797 1.28816 11.5272 1.15145 11.5218 1.01163C11.5164 0.871815 11.4585 0.739182 11.3595 0.640241C11.2606 0.541299 11.128 0.483337 10.9881 0.477936C10.8483 0.472535 10.7116 0.520094 10.6053 0.611109L5.99977 5.21666L1.39421 0.605553C1.2896 0.50094 1.14771 0.442169 0.999768 0.442169C0.851823 0.442169 0.709937 0.50094 0.605324 0.605553C0.50071 0.710167 0.441939 0.852053 0.441939 0.999998C0.441939 1.14794 0.50071 1.28983 0.605324 1.39444L5.21643 6L0.605324 10.6056C0.547167 10.6554 0.499934 10.7166 0.466587 10.7856C0.433241 10.8545 0.414502 10.9296 0.411547 11.0061C0.408592 11.0826 0.421483 11.1589 0.449414 11.2302C0.477344 11.3015 0.51971 11.3662 0.573851 11.4204C0.627993 11.4745 0.692741 11.5169 0.764033 11.5448C0.835325 11.5727 0.91162 11.5856 0.988131 11.5827C1.06464 11.5797 1.13972 11.561 1.20864 11.5276C1.27757 11.4943 1.33885 11.447 1.38866 11.3889L5.99977 6.78333L10.6053 11.3889C10.7116 11.4799 10.8483 11.5275 10.9881 11.5221C11.128 11.5167 11.2606 11.4587 11.3595 11.3598C11.4585 11.2608 11.5164 11.1282 11.5218 10.9884C11.5272 10.8485 11.4797 10.7118 11.3887 10.6056L6.7831 6Z"
          fill="#CCCCCC"/>
      </svg>
  `
  modalMain.append(modalClose)
  modal.append(modalMain)
  document.body.append(modal)
  scrollService.disabledScroll();

  modal.addEventListener('click', ({target}) => {
    if (target === modal || target.closest('.modal__close')) {
      modal.remove()
    }
  })

  const closeModal = () => {
    modal.remove();
    document.removeEventListener('keydown', handleEscKey);
    scrollService.enabledScroll();
  };

  const handleEscKey = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  modal.addEventListener('click', ({target}) => {
    if (target === modal || target.closest('.modal__close')) {
      closeModal();
    }
  });

  document.body.append(modal);
  document.addEventListener('keydown', handleEscKey);
}

export const openModal = (id) => {
  getData(`${API_URL}${VACANCY_URL}/${id}`, renderModal, renderError)
}
