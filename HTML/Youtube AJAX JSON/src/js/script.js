const switcher = document.querySelector('#cbx'),
      more = document.querySelector('.more'),
      modal = document.querySelector('.modal'),
      videos = document.querySelectorAll('.videos__item');

let player;

const bindSlideToggle = (trigger, boxBody, content, openClass) =>{
    let button = {
        'element' : document.querySelector(trigger),
        'active' : false,
    };
    const box = document.querySelector(boxBody),
          boxContent = document.querySelector(content);
    button.element.addEventListener('click', () => {
        if (!button.active) {
            button.active = true;
            box.style.height = boxContent.clientHeight + 'px';
            box.classList.add(openClass); // ищет доступные классы и добавляет класс
        } else {
            button.active = false;
            box.style.height = 0 + 'px';
            box.classList.remove(openClass);
        }
    })
};

bindSlideToggle('.hamburger', '[data-slide="nav"]', '.header__menu', 'slide-active');