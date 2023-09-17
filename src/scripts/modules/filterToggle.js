import {vacanciesFilter, vacanciesFilterButton} from "../script.js";

export const openFilter = (button, dropDown, classNameButton, classNameDropDown) => {
  dropDown.style.height = `${dropDown.scrollHeight}px`
  button.classList.add(classNameButton)
  dropDown.classList.add(classNameDropDown)
}

export const closeFilter = (button, dropDown, classNameButton, classNameDropDown) => {
  button.classList.remove(classNameButton)
  dropDown.classList.remove(classNameDropDown)
  dropDown.style.height = ``
}

export const filterToggle = () => {
  vacanciesFilterButton.addEventListener('click', () => {
    if (vacanciesFilterButton.classList.contains('vacancies__filter-button_active')) {
      closeFilter(
          vacanciesFilterButton,
          vacanciesFilter,
          'vacancies__filter-button_active',
          'vacancies__filter_active',)
    } else {
      openFilter(
          vacanciesFilterButton,
          vacanciesFilter,
          'vacancies__filter-button_active',
          'vacancies__filter_active',)
    }

  })

  window.addEventListener('resize', () => {
    if (vacanciesFilterButton.classList.contains('vacancies__filter-button_active')) {
      closeFilter(
          vacanciesFilterButton,
          vacanciesFilter,
          'vacancies__filter-button_active',
          'vacancies__filter_active',)
    }
  })
}
