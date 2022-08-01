import './footer.css';
export const FooterLink = (props: {
  title?: string;
  text?: string;
  link: string;
  icon?: string | undefined;
}) => {
  const { title, text, link, icon } = props;
  return (
    <>
      {text ? (
        <p className="footer-text">
          {title}:{' '}
          <a className="footer-link" href={link} target="_blank" rel="noreferrer">
            {text}
          </a>
        </p>
      ) : (
        <a className="footer-link-icon" href={link} target="_blank" rel="noreferrer">
          <img className="footer-icon" src={icon} alt="" />
        </a>
      )}
    </>
  );
};
