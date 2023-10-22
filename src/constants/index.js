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
    discription: "Власний закритий двір з камерами спостереження, та сховищем",
  },
  {
    title: "Фінансова лояльність",
    icon: backend,
    discription: "Знижки на відвідування садочку кількох дітей з однієї сім'ї. Можливість отримання фінансових канікул терміном 21 день на рік із збереженням місця у групі.",
  },
  {
    title: "Власни кухня",
    icon: creator,
    discription: "У нас працює власна кухня з можливістю корекції меню під запити дитини",
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
      "Леша полон положительных эмоций, не перестаёт рассказывать про новый сади спасибо Вам...",
    name: "Олена Коваленка",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Леша полон положительных эмоций, не перестаёт рассказывать про новый сади спасибо Вам...",
    name: "Іра Білан",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Леша полон положительных эмоций, не перестаёт рассказывать про новый сади спасибо Вам...",
    name: "Олександр Введенський",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
 
  
];

const projects = [
  {
    name: "Готуємось до Великодня",
    description:
      "Зустрічаємо велике свято .............",
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
    source_code_link: "https://www.instagram.com/stories/highlights/17944685254630445/",
  },
  {
    name: "Зустрічаємо осінь",
    description:
      "Зустрічаємо осінь 2023 у нашому просторі для дітей",
    tags: [
      {
        name: "осінь2023",
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
    source_code_link: "https://www.instagram.com/p/Cvbwr4wtbaJ/",
  },
  {
    name: "Вітаємо з днем вчителя",
    description:
      "Готуємось поздоровляти наших вчителів.............",
    tags: [
      {
        name: "свято",
        color: "blue-text-gradient",
      },
      {
        name: "день вчителя",
        color: "green-text-gradient",
      },
      {
        name: "україна",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.instagram.com/p/CZelwl9tIxb/",
  },
  /* {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  }, */
];

export { services, technologies, experiences, testimonials, projects };
