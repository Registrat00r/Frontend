declare const Swiper: any;
interface CardData {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

interface FormObject {
  [key: string]: string;
}

fetch('scripts/cards.json')
  .then(response => response.json())
  .then((data: CardData[]) => {
    console.log('Данные из card.json:', data);
    renderCards(data);
  })
  .catch(error => {
    console.error('Ошибка при загрузке данных:', error);
  });

function createCard(cardData: CardData): string {
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

function renderCards(cards: CardData[]): void {
  const cardContainer = document.querySelector(".creator__card__container") as HTMLElement | null;

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

  const swiperEl = document.querySelector('.swiper');
  if ( swiperEl) {
    const swiper = new Swiper(swiperEl as HTMLElement, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
});

const form = document.getElementById('contactForm') as HTMLFormElement | null;
const dataInputs = document.querySelectorAll<HTMLInputElement>('input');
const modal = document.getElementById('formModal') as HTMLElement | null;
const openModalBtns = document.querySelectorAll<HTMLButtonElement>('.button-sign');
const closeModalBtn = document.querySelector<HTMLButtonElement>('.exit-button');
const cancelBtn = document.querySelector<HTMLButtonElement>('.cansel-button');

dataInputs.forEach((input, index) => {
  input.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      const nextIndex = (index + 1) % dataInputs.length;
      dataInputs[nextIndex].focus();
    }
  });
});

if (form) {
  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const formObject: FormObject = {};

    formData.forEach((value, key) => {
      formObject[key] = value.toString();
    });

    console.log(formObject);
    closeModal();
  });
}

// Открытие модалки
openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (modal) {
      modal.style.display = 'flex';
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    }
  });
});

function closeModal(): void {
  if (modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
  }
}

closeModalBtn?.addEventListener('click', closeModal);
cancelBtn?.addEventListener('click', closeModal);

modal?.addEventListener('click', (e: MouseEvent) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.querySelector('.preloader') as HTMLElement | null;

  if (preloader) {
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      preloader.remove();
      document.body.style.overflow = '';
    }, 500);
  }
});