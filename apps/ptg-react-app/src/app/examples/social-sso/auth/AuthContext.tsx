import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  AuthProviderProps,
  AuthContextType,
  SocialUser,
  SignupFormData,
} from '../interface/index';
import { environment } from '@ptg-ui/apps/ptg-react-app/src/environments/environment';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any>(null);
  const [jwt, setJwt] = useState<string | null>(
    localStorage.getItem('token') || null
  );
  const [pendingSocialUser, setPendingSocialUser] = useState<SocialUser | null>(
    null
  );
  const isAuthenticated = !!user;

  // Login via Strapi
  const loginWithStrapi = useCallback(
    async (identifier: string, password: string) => {
      const res = await axios.post('http://localhost:1337/api/auth/local', {
        identifier,
        password,
      });
      const token = res.data.jwt;
      localStorage.setItem('token', token);
      setJwt(token);

      const userRes = await axios.get('http://localhost:1337/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(userRes.data);
    },
    []
  );

  const loginWithSocial = useCallback(
    async (socialUser: SocialUser) => {
      try {
        const res = await axios.get(`${environment.baseUrl}user-check/email`, {
          params: {
            email: socialUser.email,
          },
        });
        const existingUser = res?.data?.exists;
        if (existingUser) {
          setUser({
            id: existingUser.id,
            username: socialUser.name,
            email: socialUser.email,
            picture: socialUser.picture,
          });

          setJwt(null); // no token from social
        } else {
          setPendingSocialUser(socialUser); // trigger signup flow
        }
      } catch (err) {
        console.error('Error checking/updating user in Strapi:', err);
      }
    },
    [setUser, setJwt, setPendingSocialUser]
  );

  const completeSignup = useCallback(
    async (formData: SignupFormData) => {
      try {
        await axios.post(
          `${environment.baseUrl}custom-user-table/create-custom-user`,
          {
            data: {
              username: formData.username,
              email: pendingSocialUser?.email,
              age: formData.age,
              phone: formData.phone,
            },
          }
        );
        setPendingSocialUser(null);
      } catch (err) {
        console.error('Signup failed:', err);
      }
    },
    [pendingSocialUser]
  );

  const logout = useCallback(() => {
    setUser(null);
    setJwt(null);
    localStorage.removeItem('token');
    setPendingSocialUser(null);
  }, [setUser, setJwt, setPendingSocialUser]);

  const contextValue = useMemo(
    () => ({
      user,
      jwt,
      isAuthenticated,
      loginWithStrapi,
      loginWithSocial,
      completeSignup,
      pendingSocialUser,
      logout,
    }),
    [
      user,
      jwt,
      isAuthenticated,
      loginWithStrapi,
      loginWithSocial,
      completeSignup,
      pendingSocialUser,
      logout,
    ]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
