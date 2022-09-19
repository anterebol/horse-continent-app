import './mail.css';
import emailjs from '@emailjs/browser';

export const Mail = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p0v4ncj', 'template_87708dn', e.target, 'WyQ77dQwarhDLNzP9');

    alert('Сообщение отправлено');
    e.target.reset();
  };
  return (
    <div className="mail-body">
      <h2 className="mail-title">Напишите нам письмо</h2>
      <form className="mail-form" onSubmit={(e) => sendEmail(e)} autoComplete="off">
        <div className="box-mail-input">
          <input className="input-mail name" placeholder="Имя" type="text" name="name" />
        </div>
        <div className="box-mail-input">
          <input
            className="input-mail number"
            placeholder="Номер телефона"
            type="text"
            name="phone"
          />
        </div>
        <div className="box-mail-input">
          <textarea className="input-mail messege" placeholder="Текст сообщения" name="messenge" />
        </div>
        <button className="mail-button" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};
