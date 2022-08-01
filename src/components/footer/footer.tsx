import { FooterLink } from './footerLink';
import github from '../../assets/contacts/github.svg';
import vk from '../../assets/contacts/vk.svg';
import inst from '../../assets/contacts/instagram.svg';
import call from '../../assets/contacts/call.svg';
import telegram from '../../assets/contacts/telegram.svg';
import './footer.css';

export const Footer = () => (
  <div className="footer">
    <div className="footer-box">
      <div className="footer-info">
        <p className="footer-title">Контакты клуба:</p>
        <div className="box-icon-links">
          <FooterLink link="tel:++375295512947" icon={call} />
          <FooterLink link="https://vk.com/k.klub.kontinent" icon={vk} />
          <FooterLink link="https://www.instagram.com/k.klub.kontinent/" icon={inst} />
        </div>
        <FooterLink title="Tell" link="tel:+375295512947" text="+375295512947" />
        <FooterLink
          title="VK"
          link="https://vk.com/k.klub.kontinent"
          text="vk.com/k.klub.kontinent"
        />
        <FooterLink
          title="Instagram"
          link="https://www.instagram.com/k.klub.kontinent/"
          text="instagram.com/k.klub.kontinent/"
        />
      </div>
      <div className="footer-info">
        <p className="footer-title">Контакты разработчика:</p>
        <div className="box-icon-links">
          <FooterLink link="tel:+375336258442" icon={call} />
          <FooterLink link="https://github.com/anterebol" icon={github} />
          <FooterLink link="https://t.me/anterebol" icon={telegram} />
          <FooterLink link="https://www.instagram.com/alex_festern/" icon={inst} />
        </div>
        <FooterLink title="Tell" link="tel:+375336258442" text="+375336258442" />
        <FooterLink
          title="GitHub"
          link="https://github.com/anterebol"
          text="github.com/anterebol"
        />
        <FooterLink title="Telegram" link="https://t.me/anterebol" text="t.me/anterebol" />
        <FooterLink
          title="Instagram"
          link="https://www.instagram.com/alex_festern/"
          text="instagram.com/alex_festern/"
        />
      </div>
    </div>
  </div>
);
