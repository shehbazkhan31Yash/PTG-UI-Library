import { ReactNode } from 'react';

export interface AuthProviderProps {
  children: ReactNode;
}

export interface SocialUser {
  email: string;
  name: string;
  picture?: string;
  provider?: 'google' | 'facebook';
}

export interface SignupFormData {
  username: string;
  age: number;
  phone: string;
}

export interface AuthContextType {
  user: any;
  jwt: string | null;
  isAuthenticated: boolean;
  loginWithStrapi: (identifier: string, password: string) => Promise<void>;
  loginWithSocial: (socialUser: SocialUser) => Promise<void>;
  completeSignup: (formData: SignupFormData) => Promise<void>;
  pendingSocialUser: SocialUser | null;
  logout: () => void;
}

export interface UserProfile {
  username: string;
  email: string;
  age?: number | string;
  phone?: string;
}

export interface FacebookResponse {
  status: string;
  name?: string;
  email?: string;
  picture?: {
    data?: {
      url?: string;
    };
  };
}

export interface GoogleJwtPayload {
  name: string;
  email: string;
  picture?: string;
  [key: string]: any;
}

export interface FormData {
  username: string;
  age: number | string;
  phone: string;
}
