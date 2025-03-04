// const baseUrl = 'https://ptg-ui-apps.azurewebsites.net/';
const baseUrl = 'https://yash-ui-strapi.azurewebsites.net/api/';
export const environment = {
  production: true,
  baseUrl: baseUrl,
  login: `${baseUrl}auth/local`,
  signup: `${baseUrl}auth/local/register`,
  msal_postLogoutRedirectUri: 'https://ptg-ui-apps.azurewebsites.net/',
  msal_redirectUri: 'https://ptg-ui-apps.azurewebsites.net/',
  msal_clientId: '688a4bcc-30fe-44ce-88ca-9e9750714b92',
  msal_authority:
    'https://login.microsoftonline.com/yashtechnologies841.onmicrosoft.com',
};
