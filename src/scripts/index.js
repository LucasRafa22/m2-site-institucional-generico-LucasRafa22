function modal(){
    const modal = document.querySelector('.modal');
    const button = document.querySelector('.header__button');
    const button2 = document.querySelector('.faq__button');

    button.addEventListener('click', () => {
        modal.showModal();

        closeModal()
    })

    button2.addEventListener('click', () => {
        modal.showModal();

        closeModal()
    })
}

function closeModal(){
    const button = document.querySelector('.modal__header-close');
    const modal = document.querySelector('.modal');

    button.addEventListener('click', () => {
        modal.close()
    })
}

modal();