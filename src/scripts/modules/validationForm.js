export const validationForm = (form) => {
  const validate = new JustValidate(form, {
    errorLabelStyle: {color: '#F00'},
    errorLabelCssClass: 'invalid',
    errorFieldStyle: {borderColor: '#F00'},
    errorFieldCssClass: 'invalid',
    errorsContainer: document.querySelector('.employer__error'),
  });
  validate
      .addField('#logo', [
        {rule: 'minFilesCount', value: 1, errorMessage: 'Добавьте один файл'},
        {
          rule: 'files',
          value: {
            files: {
              extensions: ['jpeg', 'jpg', 'png'],
              maxSize: 102400,
              types: ['image/jpeg', 'image/jpg', 'image/png'],
            },
          },
          errorMessage: 'Размер файла должен быть не больше 100КБ'
        },
      ])
      .addField('#company', [{rule: 'required', errorMessage: 'Введите название компании'}])
      .addField('#title', [{rule: 'required', errorMessage: 'Введите название вакансии'}])
      .addField('#salary', [{rule: 'required', errorMessage: 'Введите заработную плату'}])
      .addField('#location', [{rule: 'required', errorMessage: 'Введите название города'}])
      .addField('#email', [{rule: 'required', errorMessage: 'Введите e-mail'},
        {rule: 'email', errorMessage: 'Введите корректный e-mail'}])
      .addField('#description', [{rule: 'required', errorMessage: 'Введите описание'}])
      .addRequiredGroup('#format', 'Выберите формат')
      .addRequiredGroup('#experience', 'Выберите опыт')
      .addRequiredGroup('#type', 'Выберите занятость')
  return validate
}
