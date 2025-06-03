import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [jwt, setJwt] = useState(localStorage.getItem('token') || null);
  const [pendingSocialUser, setPendingSocialUser] = useState(null); // user from Google/Facebook
  const isAuthenticated = !!user;

  // Login via Strapi
  const loginWithStrapi = async (identifier, password) => {
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
  };

  const loginWithSocial = async (socialUser) => {
    try {
      const res = await axios.get(
        'http://localhost:1337/api/user-check/email',
        {
          params: {
            email: socialUser.email,
          },
        }
      );
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
  };

  const completeSignup = async (formData) => {
    try {
      const res = await axios.post(
        'http://localhost:1337/api/cutom-user-table/create-custom-user',
        {
          data: {
            username: formData.username,
            email: pendingSocialUser.email,
            age: formData.age,
            phone: formData.phone,
          },
        }
      );
      setPendingSocialUser(null);
    } catch (err) {
      console.error('Signup failed:', err);
    }
  };

  const logout = () => {
    setUser(null);
    setJwt(null);
    localStorage.removeItem('token');
    setPendingSocialUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        jwt,
        isAuthenticated,
        loginWithStrapi,
        loginWithSocial,
        completeSignup,
        pendingSocialUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
