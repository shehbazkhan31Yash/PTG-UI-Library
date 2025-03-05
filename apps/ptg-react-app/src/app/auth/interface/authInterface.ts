export interface UserState {
  isLoading: boolean;
  isAlert: boolean;
  email: string;
  password: string;
  error: string | null;
  disable: boolean;
}
