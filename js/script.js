console.log('Script connected');

const arrayOfhealthWishes = [
    "Дотримуйтесь збалансованого харчування",
  "Пийте достатньо води – не менше 1,5-2 літрів на день",
  "Регулярно займайтеся фізичною активністю",
  "Слідкуйте за режимом сну – 7-9 годин якісного відпочинку",
  "Мінімізуйте стрес за допомогою медитації та дихальних практик",
  "Відмовтесь від шкідливих звичок (куріння, алкоголь, фастфуд)",
  "Дотримуйтеся особистої гігієни – мийте руки, доглядайте за шкірою та зубами",
  "Обмежте споживання цукру та солі",
  "Ведіть активний спосіб життя – більше ходіть пішки",
  "Перевіряйте здоров'я регулярно – профілактичні огляди",
  "Зміцнюйте імунітет – гуляйте на свіжому повітрі, приймайте вітаміни",
  "Слідкуйте за рівнем стресу та намагайтеся уникати негативу",
  "Захищайтеся від сонця – використовуйте сонцезахисний крем",
  "Дбайте про психічне здоров’я – не бійтеся звертатися до психолога",
  "Контролюйте свою вагу – надлишкова вага може спричинити хвороби",
  "Підтримуйте соціальні зв’язки – спілкування з рідними покращує самопочуття",
  "Дбайте про здоров'я очей – робіть перерви від гаджетів",
  "Відпочивайте від екранів – обмежуйте час перед телевізором і смартфоном",
  "Слухайте своє тіло – не ігноруйте біль чи нездужання",
  "Робіть те, що приносить радість – позитивні емоції важливі для здоров’я"
];

let countofpills = 5;
console.log('countofpills ' + countofpills);

document.getElementById('count-of-pills').innerText = '🧡'.repeat(countofpills);

document.getElementById('btn_health_wishes').addEventListener('click', () => {
    console.log('Button clicked');
    let index = Math.floor(Math.random() * arrayOfhealthWishes.length);
    document.getElementById('p_health_wishes').innerText = arrayOfhealthWishes[index];

    countofpills--
    console.log('countofpills ' + countofpills);
    document.getElementById('count-of-pills').innerText = '🧡'.repeat(countofpills) + '🤍'.repeat(5 - countofpills);

    if (countofpills == 0) {
        document.getElementById('btn_health_wishes').style.display = 'none';
    }
});

document.getElementById('btn-buy-pills').addEventListener('click', () => {
    countofpills = 5;
    document.getElementById('count-of-pills').innerText = '🧡'.repeat(countofpills);
    document.getElementById('btn_health_wishes').style.display = 'inline-block';
    document.getElementById('p_health_wishes').innerText = '';
    console.log('btn-buy-wishes clicked');
});

let img = 1; // Початкове зображення
const totalImages = 3; // Кількість зображень у галереї

// Функція для плавної зміни зображення
function changeImage(direction) {
  const mainImage = document.getElementById('main-image');

  // Додати клас для зникнення
  mainImage.classList.add('fade-out');

  setTimeout(() => {
    // Оновити індекс зображення
    if (direction === 'left') {
      img--;
      if (img < 1) img = totalImages; // Повернутися до останнього зображення
    } else if (direction === 'right') {
      img++;
      if (img > totalImages) img = 1; // Повернутися до першого зображення
    }

    // Змінити джерело зображення
    mainImage.setAttribute('src', `img/gallery/${img}.jpg`);

    // Видалити клас зникнення та додати клас появи
    mainImage.classList.remove('fade-out');
    mainImage.classList.add('fade-in');

    // Видалити клас появи після завершення анімації
    setTimeout(() => {
      mainImage.classList.remove('fade-in');
    }, 500); // Час анімації (має збігатися з transition у CSS)
  }, 500); // Час для завершення зникнення
}

// Ліва стрілочка
document.getElementById('btn-left-arrow').addEventListener('click', () => {
  changeImage('left');
});

// Права стрілочка
document.getElementById('btn-right-arrow').addEventListener('click', () => {
  changeImage('right');
});

//робота з об'єктами

fetch('js/vitamins.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      let divVitamin = document.createElement('div');
      divVitamin.classList.add('vitamin');
      divVitamin.innerHTML = `
        <div class='vitamins'>
          <p>ID: ${item.id}</p>
          <h3>${item.title}</h3>
          <hr>
          <img src="img/vitamins/${item.photo}" alt="${item.title}" class="main-image">
          <p>${item.description}</p>
          <span>Рейтинг: ${item.rating}</span>
          <p>Тип: ${item.type}</p>
          <img src="img/vitamins/${item.additionalPhoto}" alt="Додаткове фото для ${item.title}" class="additional-image">
        </div>
      `;

      document.getElementById('p-vitamins').appendChild(divVitamin);
    });
  })
  .catch((error) => console.error('Error fetching vitamins:', error));

