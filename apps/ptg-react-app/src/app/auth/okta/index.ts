const oktaConfig = {
  issuer: 'https://dev-mgbwsj7nuk623uv6.us.auth0.com/oauth2/default',
  clientId: 'G2AaSk8Xs3SCnoKT1chhM1suw4ROqwZ5',
  redirectUri: window.location.origin + '/login',
  scopes: ['openid', 'profile', 'email'],
  domain: 'dev-mgbwsj7nuk623uv6.us.auth0.com',
};

export default oktaConfig;
