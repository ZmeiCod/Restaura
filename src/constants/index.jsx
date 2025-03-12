import dish1 from "../assets/dish1.jpeg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";
import dish4 from "../assets/dish4.jpeg";
import dish6 from "../assets/dish6.jpeg";
import dish7 from "../assets/dish7.jpeg";
import dish8 from "../assets/dish8.jpeg";
import dish10 from "../assets/dish10.jpeg";

import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Блюда", targetId: "dishes" },
  { text: "О нас", targetId: "about" },
  { text: "Миссия", targetId: "mission" },
  { text: "Кухня", targetId: "kitchen" },
  { text: "Контакты", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Спагетти Карбонара",
    description: "Сливочная паста с беконом и сыром",
  },
  {
    image: dish2,
    title: "Куриная Тикка Масала",
    description: "Индийское карри с нежной курицей в остром соусе",
  },
  {
    image: dish3,
    title: "Салат с капрезе",
    description: "Свежие помидоры, моцарелла и базилик с бальзамической глазурью",
  },
  {
    image: dish4,
    title: "Суши-ролл",
    description: "Ассорти из морепродуктов и овощей, завернутое в морские водоросли и рис",
  },
  {
    image: dish6,
    title: "Греческий салат",
    description: "Хрустящий салат-латук, оливки, сыр фета и острый соус",
  },
  {
    image: dish7,
    title: "Пад-Тай",
    description: "Обжаренная рисовая лапша с креветками, тофу и арахисом",
  },
  {
    image: dish8,
    title: "Утка по-пекински",
    description: "Хрустящая утка с блинчиками, огурцом и соусом хойсин",
  },
  {
    image: dish10,
    title: "Тирамису",
    description:
      "Итальянский десерт со слоями пропитанного кофе печенья и маскарпоне",
  },
];

export const ABOUT = {
  header: "Мы любим готовить!",
  content:
    "В ресторане мы верим, что вкусная еда - это не только вкус; она рассказывает историю самоотверженности и креативности. От фирменных блюд нашего шеф-повара до внимательного обслуживания - каждая деталь продумана до мелочей, чтобы ваш визит был исключительным. Независимо от того, наслаждаетесь ли вы нашим знаменитым Тикка кебабом или изучаете наше разнообразное меню, вдохновленное мировыми вкусами, каждое блюдо - это праздник вкуса и инноваций. Присоединяйтесь к нашему кулинарному путешествию, где каждый кусочек оставляет неизгладимое впечатление. Посетите ресторан, где каждое блюдо — шедевр.",
};

export const MISSION =
  "Наша миссия в нашем ресторане - создавать вкусные и запоминающиеся блюда.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Итальянская",
    description:
      "Насладитесь вкусами Италии, отведав изысканные блюда итальянской кухни, приготовленные по традиционным рецептам и современным рецептам.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Японская",
    description:
      "Насладитесь искусством японской кулинарии, сочетающей классические и современные вкусы.",
  },
  {
    number: "03.",
    image: indian,
    title: "Индийская",
    description:
      "Насладитесь богатыми и разнообразными вкусами Индии с помощью меню, посвященного кулинарному наследию страны.",
  },
];

export const CONTACT = [
  { key: "address", value: "Адрес: г.Санкт-Петербург, ул. Большая Морская, 30" },
  { key: "phone", value: "Телефон: 7-(931)-XXX-XX-XX" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
