export const textOpportunity = `Услуги клуба`;
export const textTeach = `Обучение азам конного спорта`;
export const textRent = `Аренда лошади с тренером`;
export const textFotoSession = `Фотосессия и видеосъёмка`;
export const textContest = `Организация мероприятий`;
export const serviceInfo: {
  [key: string]: {
    answer: string;
    question: string;
    title: string;
  };
} = {
  photo: {
    title: 'Фотосессия и видеосъёмка',
    question: 'Давно не обновляли фотоальбом?',
    answer: 'Время пришло!',
  },
  study: {
    title: 'Обучение',
    question: 'Хотите уметь обращаться с лошадьми?',
    answer: 'Мы поможем вам!',
  },
  contest: {
    title: 'Мероприятия',
    question: 'Хотите хорошо провести время?',
    answer: 'Мы организуем ваше мероприятие!',
  },
  rent: {
    title: 'Аренда',
    question: 'Хотите прогуляться верхом на лошади?',
    answer: 'Мы предоставим лошадь!',
  },
};
