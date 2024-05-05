import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  meta1,
  starbucks,
  starbuckslogo,
  tesla,
  shopify,
  shopify1,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Про нас",
  },
  {
    id: "work",
    title: "Наші переваги",
  },
  {
    id: "contact",
    title: "Контакти",
  },
];

const services = [
  {
    title: "Професійна команда",
    icon: web,
    discription: "Кожен співробітник оформляється офіційно та проходить трирівневу систему відбору з інтерв'ю, адаптацією та стажуванням, наслідуючи наші цінності.",
  },
  {
    title: "Гарантії безпеки",
    icon: mobile,
    discription: "Власний закритий двір з камерами спостереження, регулярна перевірка приміщень дитячого садка, ігрових майданчиків та обладнання на предмет потенційних небезпек",
  },
  {
    title: "Фінансова лояльність",
    icon: backend,
    discription: "Знижки на відвідування садочку кількох дітей з однієї сім'ї. Можливість отримання фінансових канікул терміном 21 день на рік із збереженням місця у групі.",
  },
  {
    title: "Власни кухня",
    icon: creator,
    discription: "Наші досвідчені кухарі готують блюда, які відповідають дієтичним потребам дітей різного віку. Ми використовуємо свіжі інгредієнти, щоб забезпечити дітей повноцінним раціоном.",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Інтелектуальний розвиток",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "white",
    date: starbuckslogo,
    points: [
      "Система занять побудована на основі 9-тирічного досвіду та напрацювань нашої команди з використанням елементів методик М. Шичидо (ейдетика), нейроіграми, творчою та проектною діяльністю.",
    ],
  },
  {
    title: "Фізичне виховання",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "white",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Прогулянки, за будь-яких погодних умов, окрім стихійних лих; зарядки, літні загартування, рухливі ігри, спортивні сенсорні доріжки, додаткові спортивні гуртки в садочку (футбол, черлідинг, танці тощо)",
    ],
  },
  {
    title: "Музичний розвиток",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "white",
    date: shopify1,
    points: [
      "Музичні заняття: навчають реалізовувати творчий потенціал дітей, формують емоційний інтелект, допомагають пізнати можливості власного тіла, розвивають розуміння краси та стилю в мистецтві і житті.",
    ],
  },
  {
    title: "Знайомимось зі світом",
    company_name: "Meta",
    icon: meta,
    iconBg: "white",
    date: meta1,
    points: [
      `"Щоп'ятниці - день цікавинок, чергуватимуться:
      1) Занурення у культуру іншої країни + кулінарний майстер-клас;
      2) Ознайомлення з найвідомішими мистецькими творами + творчий майстер-клас;
      3) Поглиблене вивчення цікавих природничих тематик та презентація проектних робіт;
      4) Яскраві свята з аніматорами для усіх діток садочку та особливі привітання цьогомісячних іменинників."`,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Остапчик повний позитивних емоцій, не зупинається розказувати про новий садочок дякую Вам за ваше відношення до справи...",
    name: "Олена Коваленко",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Ми обрали цей дитячий садочок для нашого малюка, і це стало праильним рішенням! Професійні педагоги, а також чистота порядок...",
    name: "Ігор Білан",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Чудова команда педагогів, безтурботна атмосфера и разнобічні розвиваючі заняття роблять кожний день нашої дитини яскравим...",
    name: "Ольга Гуч",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
 
  
];

const projects = [
  {
    name: "Міжнародний День захисту дітей",
    description:
      "Дивіться самі😉 Зібрали для вас декілька фото веселих розваг на нашому подвір'ї.",
    tags: [
      {
        name: "великдень",
        color: "blue-text-gradient",
      },
      {
        name: "свято",
        color: "green-text-gradient",
      },
      
    ],
    image: carrent,
    source_code_link: "https://www.instagram.com/p/CeTslX6DV0P/?img_index=1",
  },
  {
    name: "Відзначаємо День Сім'ї",
    description:
      "Як він пройшов - ми прикрасили подвір’я сімейними фотокартками😎😎. Ми провели день весело🤗 і з користю: пікнік у парку, ігри на свіжому повітрі та багато сміху.",
    tags: [
      {
        name: "день сім'ї",
        color: "blue-text-gradient",
      },
      {
        name: "свято",
        color: "green-text-gradient",
      },
      {
        name: "діти",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.instagram.com/p/CsRFcf6Nk8I/",
  },
  {
    name: "Вітаємо з днем народження",
    description:
      "Де можна дуже круто😉 його відсвяткувати😍, не витрачаючи часу на організацію?...",
    tags: [
      {
        name: "свято",
        color: "blue-text-gradient",
      },
      {
        name: "день народження",
        color: "green-text-gradient",
      },
      {
        name: "україна",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.instagram.com/p/CocbCUGtkpN/?img_index=4",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
