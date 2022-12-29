(() => {
  const refs = {
    openFormBtn: document.querySelector('[data-form-open]'),

    closeFormBtn: document.querySelector('[data-form-close]'),

    form: document.querySelector('[data-form]'),
  };

  refs.openFormBtn.addEventListener('click', toggleForm);

  refs.closeFormBtn.addEventListener('click', toggleForm);

  function toggleForm() {
    refs.form.classList.toggle('is-hiddenForm');
  }
})()