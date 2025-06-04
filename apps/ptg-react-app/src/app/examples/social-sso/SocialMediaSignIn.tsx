import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import AuthGate from './components/AuthGate';
import Signup from './auth/Signup';
import { AuthProvider } from './auth/AuthContext';

export default function SocialMediaSignIn() {
  const [showCode, setShowCode] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleShowCode = () => {
    setShowCode((prevState) => !prevState);
  };

  const componentCode = `

  `;
  const htmlCode = ``;

  return (
    <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2 mb-4">
      <div className="row">
        <div className="col-10 mb-2 mt-2">
          <h5 className="font-weight-bold example-heading">
            {t('Social Media Sign In Example')}
          </h5>
        </div>
        <div className="col-2">
          <CodeIcon
            onClick={handleShowCode}
            fontSize="large"
            className="show-code-icon"
          ></CodeIcon>
        </div>
        <hr className="horizontal-line" />
        {showCode && (
          <ShowCodeComponent
            componentCode={componentCode}
            htmlCode={htmlCode}
          />
        )}
      </div>
      <div>
        <GoogleOAuthProvider clientId="152055446901-ird7ugmtueb9mp68sg20hp0h60qsthq5.apps.googleusercontent.com">
          <AuthProvider>
            <AuthGate />
          </AuthProvider>
        </GoogleOAuthProvider>
      </div>
    </section>
  );
}
