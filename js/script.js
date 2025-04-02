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

const arrayOfVitaminsObjects = [
  {
    "id": 1,
    "title": "Вітамін C",
    "photo":"vitaminC.png",
    "description":"Аскорбíнова кислотá  гамма-лактон 2,3-дегідро-L-гулонової кислоти, вітамін C) — відносно проста органічна кислота. Хімічна формула C6H8O6. Міститься у свіжих фруктах (яблука, сливи, персики тощо) та овочах. Відносять до водорозчинних вітамінів.",
    "rating":"⭐⭐⭐⭐⭐",
    "type":"Водорозчинний",
  },
  {
    "id": 2,
    "title": "Омега-3",
    "photo":"vitaminOMEGA3.png",
    "description":"Омега-3 поліненасичені жирні кислоти належать до родини ненасичених жирних кислот, що мають подвійний вуглець-вуглецевий зв'язок в омега-3 позиції, тобто біля третього атома вуглецю від метильного кінця жирної кислоти.",
    "rating":"⭐⭐⭐⭐",
    "type":"Жиророзчинний",
  },
  {
    "id": 3,
    "title": "Вітамін B3",
    "photo":"vitaminB3.png",
    "description":"Нікоти́нова кислота́, також ніацин, вітамін B3, вітамін PP (від англ. pellagra preventing), нікотинамід — розчинний у воді вітамін; необхідний для багатьох реакцій окиснення у живих клітинах.",
    "rating":"⭐⭐⭐⭐",
    "type":"Водорозчинний",
  },
  {
    "id": 4,
    "title": "Вітамін D3",
    "photo":"vitaminD3.png",
    "description":"Вітамін D3 – це активний антирахітичний фактор. Найважливішою функцією вітаміну D є регулювання метаболізму кальцію та фосфатів, що сприяє правильній мінералізації і росту скелета. Вітамін D3 – це природна форма вітаміну D, що утворюється у тварин і людей.",
    "rating":"⭐⭐⭐⭐",
    "type":"Жиророзчинний",
    
  },
  {
    "id": 5,
    "title": "Вітамін B12",
    "photo":"vitaminB12.png",
    "description":"Вітамін В12 (інколи кобаламін) — це вітамін групи В, бере участь у кровотворенні, регулює вуглеводний і жировий обмін в організмі. При авітамінозі розвивається недокрів'я — анемія. Кобаламін відіграє надзвичайно важливу роль у правильному функціонуванні нервової системи, впливаючи, таким чином, на роботу всіх органів.",
    "rating":"⭐⭐⭐⭐⭐",
    "type":"Водорозчинний",
  },
]

//console.log(arrayOfVitaminsObjects)

arrayOfVitaminsObjects.forEach((item) => {
  console.log(item);

  let divVitamin = document.createElement('div');
  divVitamin.classList.add('vitamin');
  divVitamin.innerHTML = `
    <div class='vitamins'>
      <p>ID: ${item.id}</p>
      <h3>${item.title}</h3>
      <hr>
      <img src="img/vitamins/${item.photo}" alt="${item.title}">
      <p>${item.description}</p>
      <span>Рейтинг: ${item.rating}</span>
      <p>Тип: ${item.type}</p>
    </div>
  `;

  document.getElementById('p-vitamins').appendChild(divVitamin);
});

