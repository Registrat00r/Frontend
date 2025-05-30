fetch('scripts/cards.json')
    .then(response => response.json())
    .then((data) => {
    console.log('Данные из card.json:', data);
    renderCards(data);
})
    .catch(error => {
    console.error('Ошибка при загрузке данных:', error);
});
function createCard(cardData) {
    return `
    <div class="creator__card creator__card-${cardData.id}">
      <div class="creator__card__content">
        <p class="creator__card__description">${cardData.description}</p>
        <img class="creator__card__image" src="${cardData.image}" alt="${cardData.name}">
        <p class="creator__card__name">
          ${cardData.name}<br>
          <span class="creator__card__role">${cardData.role}</span>
        </p>
      </div>
    </div>
  `;
}
function renderCards(cards) {
    const cardContainer = document.querySelector(".creator__card__container");
    if (!cardContainer) {
        console.warn("Контейнер для карточек не найден");
        return;
    }
    cardContainer.innerHTML = '';
    cards.forEach(card => {
        const cardHTML = createCard(card);
        cardContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    // Проверяем, существует ли элемент swiper
    const swiperEl = document.querySelector('.swiper');
    if (swiperEl) {
        const swiper = new Swiper(swiperEl, {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
});
const form = document.getElementById('contactForm');
const dataInputs = document.querySelectorAll('input');
const modal = document.getElementById('formModal');
const openModalBtns = document.querySelectorAll('.button-sign');
const closeModalBtn = document.querySelector('.exit-button');
const cancelBtn = document.querySelector('.cansel-button');
// Переключение фокуса между полями формы по Tab
dataInputs.forEach((input, index) => {
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            const nextIndex = (index + 1) % dataInputs.length;
            dataInputs[nextIndex].focus();
        }
    });
});

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value.toString();
        });
        console.log(formObject);
        closeModal();
    });
}

openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (modal) {
            modal.style.display = 'flex';
            document.body.classList.add('modal-open');
            document.body.style.overflow = 'hidden';
        }
    });
});

function closeModal() {
    if (modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
    }
}
closeModalBtn === null || closeModalBtn === void 0 ? void 0 : closeModalBtn.addEventListener('click', closeModal);
cancelBtn === null || cancelBtn === void 0 ? void 0 : cancelBtn.addEventListener('click', closeModal);

modal === null || modal === void 0 ? void 0 : modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            preloader.remove();
            document.body.style.overflow = '';
        }, 500);
    }
});
//# sourceMappingURL=main.js.map