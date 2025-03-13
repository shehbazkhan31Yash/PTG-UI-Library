// const baseUrl = 'https://ptg-ui-apps.azurewebsites.net/';
const baseUrl = 'https://yash-ui-strapi.azurewebsites.net/api/';
export const environment = {
  production: true,
  baseUrl: baseUrl,
  login: `${baseUrl}auth/local`,
  signup: `${baseUrl}auth/local/register`,
  msal_postLogoutRedirectUri: 'https://yash-ui-apps.azurewebsites.net/',
  msal_redirectUri: 'https://yash-ui-apps.azurewebsites.net/',
  msal_clientId: '688a4bcc-30fe-44ce-88ca-9e9750714b92',
  msal_authority:
    'https://login.microsoftonline.com/yashtechnologies841.onmicrosoft.com',
  okta_issuer: 'https://dev-mgbwsj7nuk623uv6.us.auth0.com/oauth2/default',
  okta_clientId: 'G2AaSk8Xs3SCnoKT1chhM1suw4ROqwZ5',
  okta_redirectUri: 'https://yash-ui-apps.azurewebsites.net/login',
  okta_scopes: ['openid', 'profile', 'email'],
  okta_domain: 'dev-mgbwsj7nuk623uv6.us.auth0.com',
};
