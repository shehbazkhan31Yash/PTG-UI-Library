import { FacebookResponse, SocialUser } from '../interface';
import { useAuth } from './AuthContext';

export const useFacebookAuth = () => {
  const { loginWithSocial } = useAuth();

  const handleResponse = (response: FacebookResponse) => {
    if (response.status !== 'unknown') {
      const userData: SocialUser = {
        name: response.name || '',
        email: response.email || '',
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
