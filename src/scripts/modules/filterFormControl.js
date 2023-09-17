import {API_URL, filterForm, appData, vacanciesFilter, vacanciesFilterButton, VACANCY_URL} from "../script.js";
import {getData} from "./getData.js";
import {renderVacancies} from "./renderVacancies.js";
import {closeFilter} from "./filterControl.js";
import {renderError} from "./renderError.js";

export const filterFormControl = () => {
  filterForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(filterForm)

    const urlWithParam = new URL(`${API_URL}${VACANCY_URL}`)

    formData.forEach((value, key) => {
      urlWithParam.searchParams.append(key, value)
    })


    getData(
        urlWithParam,
        renderVacancies,
        renderError).then(() => {
      appData.lastUrl = urlWithParam
    }).then(() => {
      closeFilter(
          vacanciesFilterButton,
          vacanciesFilter,
          'vacancies__filter-button_active',
          'vacancies__filter_active',)
    })
  })
}
