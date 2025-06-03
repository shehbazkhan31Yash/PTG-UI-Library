import { useState, FormEvent, ChangeEvent } from 'react';
import { useAuth } from '../auth/AuthContext';
import { Link } from 'react-router-dom';
import './SignInForm.css';

const SignInForm = () => {
  const { loginWithStrapi } = useAuth();
  const [credentials, setCredentials] = useState({
    identifier: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      await loginWithStrapi(credentials.identifier, credentials.password);
    } catch {
      setError('Invalid email/username or password.');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">Sign In</h2>

      {error && <div className="signin-error">{error}</div>}

      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
          <label htmlFor="signin-identifier">Email or Username</label>
          <input
            id="signin-identifier"
            name="identifier"
            type="text"
            placeholder="Enter your email or username"
            value={credentials.identifier}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="signin-password">Password</label>
          <input
            id="signin-password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="signin-button">
          Sign In
        </button>
      </form>

      <div className="signin-footer">
        Don’t have an account?{' '}
        <Link to="/signup" className="link">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignInForm;
