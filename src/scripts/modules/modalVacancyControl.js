import {cardsList} from "../script.js";
import {openModal} from "./modalControl.js";

export const modalVacancyControl = () => {
  cardsList.addEventListener('click', ({target}) => {
    const vacancyCard = target.closest('.vacancy')
    if (vacancyCard) {
      const vacancyID = vacancyCard.dataset.id
      openModal(vacancyID)
    }
  })

  cardsList.addEventListener('keydown', ({code, target}) => {
    const vacancyCard = target.closest('.vacancy')
    if ((code === "Enter" || code === "NumpadEnter") && vacancyCard) {
      const vacancyID = vacancyCard.dataset.id
      openModal(vacancyID)
      target.blur()
    }
  })
}
