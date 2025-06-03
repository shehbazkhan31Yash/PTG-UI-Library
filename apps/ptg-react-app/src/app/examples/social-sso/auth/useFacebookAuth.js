import { useAuth } from './AuthContext';

export const useFacebookAuth = () => {
  const { loginWithSocial } = useAuth();

  const handleResponse = (response) => {
    if (response.status !== 'unknown') {
      const userData = {
        name: response.name,
        email: response.email,
        picture: response.picture?.data?.url,
        provider: 'facebook',
      };
      loginWithSocial(userData);
    } else {
      console.error('Facebook login failed or cancelled.');
    }
  };

  return { handleResponse };
};
