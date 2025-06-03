import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignupForm.css';
import { UserProfile } from '../interface';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    age: '',
    phone: '',
  });
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post(
        'http://localhost:1337/api/auth/local/register',
        formData
      );
      const token = res.data.jwt;
      localStorage.setItem('token', token);

      const profileRes = await axios.get('http://localhost:1337/api/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUserProfile(profileRes.data);
    } catch (err: any) {
      const errorMsg = err.response?.data?.error?.message || err.message;
      setError(errorMsg);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Create an Account</h2>

      {error && <div className="signup-error">{error}</div>}

      <form onSubmit={handleSubmit} className="signup-form">
        {/* form groups here as before */}
        <div className="form-group">
          <label htmlFor="signup-username">Username</label>
          <input
            id="signup-username"
            name="username"
            value={formData.username ?? ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            type="email"
            name="email"
            value={formData.email ?? ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            name="password"
            value={formData.password ?? ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="signup-age">Age</label>
          <input
            id="signup-age"
            name="age"
            type="number"
            value={formData.age ?? ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="signup-phone">Phone Number</label>
          <input
            id="signup-phone"
            name="phone"
            value={formData.phone ?? ''}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="signup-button">
          Sign Up
        </button>

        <button
          type="button"
          className="back-button"
          onClick={() => navigate(-1)}
          aria-label="Back"
        >
          Back
        </button>
      </form>

      {userProfile && (
        <div className="signup-success">
          <h3>Welcome, {userProfile.username}!</h3>
          <p>Email: {userProfile.email}</p>
          <p>Age: {userProfile.age}</p>
          <p>Phone: {userProfile.phone}</p>
        </div>
      )}
    </div>
  );
};

export default Signup;
