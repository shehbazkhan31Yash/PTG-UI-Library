import { useState, ChangeEvent, FormEvent } from 'react';
import { useAuth } from '../auth/AuthContext';
import './SocialSignupForm.css';
import { FormData } from '../interface';

const SocialSignupForm = () => {
  const { completeSignup, pendingSocialUser, logout } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    username: pendingSocialUser?.name ?? '',
    age: '',
    phone: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await completeSignup({
      ...formData,
      age: formData.age === '' ? 0 : Number(formData.age),
    });
  };

  const handleBack = () => {
    logout(); // or create a resetPendingUser() in context if you don't want to fully logout
  };

  return (
    <div className="socialsignup-container">
      <h2 className="socialsignup-title">Complete Your Signup</h2>
      <form onSubmit={handleSubmit} className="socialsignup-form">
        <p className="socialsignup-warning">
          Email <strong>{pendingSocialUser?.email}</strong> not found. Please
          complete signup.
        </p>

        <div className="form-group">
          <label className="socialsignup-label" htmlFor="socialsignup-email">
            Email
          </label>
          <input
            id="socialsignup-email"
            name="email"
            value={pendingSocialUser?.email ?? ''}
            readOnly
            className="socialsignup-input readonly"
          />
        </div>

        <div className="form-group">
          <label className="socialsignup-label" htmlFor="socialsignup-username">
            Username
          </label>
          <input
            id="socialsignup-username"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
            className="socialsignup-input"
          />
        </div>

        <div className="form-group">
          <label className="socialsignup-label" htmlFor="socialsignup-age">
            Age
          </label>
          <input
            id="socialsignup-age"
            name="age"
            placeholder="Enter age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            className="socialsignup-input"
          />
        </div>

        <div className="form-group">
          <label className="socialsignup-label" htmlFor="socialsignup-phone">
            Phone Number
          </label>
          <input
            id="socialsignup-phone"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            className="socialsignup-input"
          />
        </div>

        <div className="socialsignup-buttons">
          <button type="submit" className="socialsignup-button">
            Sign Up
          </button>
          <button
            type="button"
            className="socialback-button"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default SocialSignupForm;
