const cardData = [
  {
    id: 1,
    description: "На Splice я всегда могу найти то, что ищу, будь то именно тот звук, который мне нужен, или просто немного вдохновения.",
    image: "img/photo/people_andrew.png",
    name: "Эндрю Хуанг",
    role: "Артист"
  },
  {
    id: 2,
    description: "Наконец-то способ купить плагины, который работает. Платя понемногу за раз, продюсеры могут получить законный доступ к лучшим VST.",
    image: "img/photo/people_kshmr.png",
    name: "KSHMR",
    role: "Артист"
  },
  {
    id: 3,
    description: "Было интересно погрузиться в сообщество создателей Splices и изучить инструменты, которые поддерживают мой творческий процесс.",
    image: "img/photo/people_kesha.png",
    name: "Кеша",
    role: "Артист"
  },
  {
    id: 4,
    description: "Я всегда могу найти на Splice то, что ищу, будь то нужный мне звук или просто источник вдохновения.",
    image: "img/photo/people_andrew.png",
    name: "Эндрю Хуанг",
    role: "Артист"
  }
];

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

function renderCards() {
  const cardContainer = document.querySelector(".creator__card__container");
  cardContainer.innerHTML = '';

  cardData.forEach(card => {
    const cardElement = createCard(card);
    cardContainer.insertAdjacentHTML('beforeend', cardElement);
  });
}

renderCards();

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
});

const form = document.getElementById('contactForm');
const dataInputs = document.querySelectorAll('input');
const modal = document.getElementById('formModal');
const openModalBtns = document.querySelectorAll('.button-sign');
const closeModalBtn = document.querySelector('.exit-button');
const cancelBtn = document.querySelector('.cansel-button');


dataInputs.forEach((input, index) => {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      const nextIndex = (index + 1) % dataInputs.length;
      dataInputs[nextIndex].focus();
    }
  });
});


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const formObject = {};

  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  console.log(formObject);
  closeModal();
});

openModalBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
  document.body.style.overflow = '';
}

closeModalBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);


modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    closeModal();
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.querySelector('.preloader');
  document.body.style.overflow = 'hidden';
  
    setTimeout(() => {
      preloader.remove();
      document.body.style.overflow = '';
    }, 500);
});