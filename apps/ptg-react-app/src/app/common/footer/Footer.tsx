/**
 * @since March 2022
 * @author Ahilyabai Netaji Pawar
 * @desc Footer Component
 * 
*/
import './Footer.scss';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line no-empty-pattern
export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="d-flex justify-content-center align-items-center fixed-bottom">
      <p className="m-0">
        {t('FOOTER_TEXT')}
      </p>
    </footer>
  );
}
export default Footer;
