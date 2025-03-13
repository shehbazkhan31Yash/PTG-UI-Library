import * as Msal from 'msal';
import { Configuration } from 'msal';
import { environment } from '../../../environments/environment';
const msalConfig: Configuration = {
  auth: {
    postLogoutRedirectUri: environment.msal_postLogoutRedirectUri,
    redirectUri: environment.msal_redirectUri,
    clientId: environment.msal_clientId,
    authority: environment.msal_authority,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: true,
  },
};
//console.log("Msal Config",msalConfig)
//console.log( "env file",process.env)
const msalInstance = new Msal.UserAgentApplication(msalConfig);
export const requiresInteraction = (errorMessage: string | string[]) => {
  if (!errorMessage || !errorMessage.length) {
    return false;
  }
  return (
    errorMessage.indexOf('consent_required') > -1 ||
    errorMessage.indexOf('interaction_required') > -1 ||
    errorMessage.indexOf('login_required') > -1
  );
};
export const acquireToken = async (request: any) => {
  try {
    const silentToken = await msalInstance.acquireTokenSilent(request);
    return [null, silentToken];
  } catch (e: any) {
    if (requiresInteraction(e.errorCode)) {
      const popupToken = await msalInstance.acquireTokenPopup(request);
      console.log('opo:', popupToken);
      return [null, popupToken];
    } else {
      return [e];
    }
  }
};
export default msalInstance;
