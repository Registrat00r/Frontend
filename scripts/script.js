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
  console.log(cardContainer);
  cardContainer.innerHTML = '';
  
  cardData.forEach(cardData => {
    console.log(cardData);

    const cardElement = createCard(cardData);
    console.log(cardElement);

    console.log(cardContainer);


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
