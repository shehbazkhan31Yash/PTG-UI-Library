import { StrictMode } from 'react';
import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@ptg-ui/react';
import App from './app/app';
import './app/i18n/i18n';
import { Auth0Provider } from '@auth0/auth0-react';
import { environment } from './environments/environment';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    {/* <BrowserRouter basename="/ptg-react-app"> */}
    <Auth0Provider
      domain={environment.okta_domain}
      clientId={environment.okta_clientId}
      authorizationParams={{ redirect_uri: environment.okta_redirectUri }}
    >
      <BrowserRouter basename="/ptg-react-app">
        <Suspense fallback={<span>Loading...</span>}>
          <App />
        </Suspense>
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>
);

// ReactDOM.render(
//   <StrictMode>
//     <BrowserRouter>
//     <Suspense fallback={<span>Loading...</span>}>
//       <App />
//     </Suspense>
//     </BrowserRouter>
//   </StrictMode>,
//   document.getElementById('root')
// );
