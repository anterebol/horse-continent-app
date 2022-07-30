import './mainInfo.css';
const textTitle = `Конный клуб "КОННЫЙ КОНТИНЕНТ"`;
const textOpportunity = `Услуги клуба`;
const textTeach = `Обучение азам конного спорта;`;
const textRent = `Аренда лошади с тренером`;
const textFotoSession = `Фотосессия и видеосъёмка`;
const textContest = `Организация мероприятий`;
export const MainInfo = () => {
  return (
    <div className="box-info">
      <div className="title-opp">{textOpportunity}</div>
      <div className="trunk"></div>
      <div className="main-left">{textTeach}</div>
      <div className="main-right">{textRent}</div>
      <div className="box" />
      <div className="main-left">{textFotoSession}</div>
      <div className="main-right">{textContest}</div>
      <div className="box" />
    </div>
  );
};
