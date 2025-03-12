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

let img = 3;

document.getElementById('btn_left-arrow').addEventListener('click', () => {  
    console.log('left');
    img--
    console.log(img)
    if (img == 0) {
        img = 3
    }
    document.getElementById('main-image').setAttribute('src', `img/gallery/${img}.jpg`)
});
document.getElementById("btn-right-arrow").addEventListener("click", () => {
  console.log('Right arrow clicked!');
  img++;
  console.log(img);
  if (img == 4) {
    img = 1;
  }
  document.getElementById('main-image').setAttribute('src', img/${img}.jpg);
});

