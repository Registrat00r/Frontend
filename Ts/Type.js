fetch('scripts/cards.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    console.log('Данные из card.json:', data);
    renderCards(data);
})
    .catch(function (error) {
    console.error('Ошибка при загрузке данных:', error);
});
function createCard(cardData) {
    return "\n    <div class=\"creator__card creator__card-".concat(cardData.id, "\">\n      <div class=\"creator__card__content\">\n        <p class=\"creator__card__description\">").concat(cardData.description, "</p>\n        <img class=\"creator__card__image\" src=\"").concat(cardData.image, "\" alt=\"").concat(cardData.name, "\">\n        <p class=\"creator__card__name\">\n          ").concat(cardData.name, "<br>\n          <span class=\"creator__card__role\">").concat(cardData.role, "</span>\n        </p>\n      </div>\n    </div>\n  ");
}
function renderCards(cards) {
    var cardContainer = document.querySelector(".creator__card__container");
    if (!cardContainer) {
        console.warn("Контейнер для карточек не найден");
        return;
    }
    cardContainer.innerHTML = '';
    cards.forEach(function (card) {
        var cardHTML = createCard(card);
        cardContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    var swiperEl = document.querySelector('.swiper');
    if (swiperEl) {
        var swiper = new Swiper(swiperEl, {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
});
var form = document.getElementById('contactForm');
var dataInputs = document.querySelectorAll('input');
var modal = document.getElementById('formModal');
var openModalBtns = document.querySelectorAll('.button-sign');
var closeModalBtn = document.querySelector('.exit-button');
var cancelBtn = document.querySelector('.cansel-button');
dataInputs.forEach(function (input, index) {
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            var nextIndex = (index + 1) % dataInputs.length;
            dataInputs[nextIndex].focus();
        }
    });
});
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var formData = new FormData(form);
        var formObject = {};
        formData.forEach(function (value, key) {
            formObject[key] = value.toString();
        });
        console.log(formObject);
        closeModal();
    });
}
// Открытие модалки
openModalBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
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
modal === null || modal === void 0 ? void 0 : modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModal();
    }
});
//-------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    var preloader = document.querySelector('.preloader');
    if (preloader) {
        document.body.style.overflow = 'hidden';
        setTimeout(function () {
            preloader.remove();
            document.body.style.overflow = '';
        }, 500);
    }
});
