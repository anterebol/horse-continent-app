export const FormReviews = () => {
  const sendReviews = (e: unknown) => console.log(e);
  return (
    <div className="review-body">
      <h2 className="review-title">Напишите нам письмо</h2>
      <form className="review-form" onSubmit={sendReviews} autoComplete="off">
        <div className="box-review-input">
          <input className="input-review name" placeholder="Имя" type="text" name="name" />
        </div>
        <div className="box-review-input">
          <textarea className="input-review messege" placeholder="Напишите отзыв" name="review" />
        </div>
        <button className="mail-button" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};
