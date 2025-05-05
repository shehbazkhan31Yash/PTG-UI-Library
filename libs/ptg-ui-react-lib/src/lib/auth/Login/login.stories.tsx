import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiLogin } from './login';
import { PtgUiLoginProps } from '@ptg-react-libs/interfaces';
import { BrowserRouter } from 'react-router-dom';



export default {
  title: 'Components/Login',
  component: PtgUiLogin,
  argTypes: {
    emailLabel: {
      control: 'text',
      description: 'Label for the email input field',
    },
    passwordLabel: {
      control: 'text',
      description: 'Label for the password input field',
    },
    emailPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the email input field',
    },
    passwordPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the password input field',
    },
    loginButtonName: {
      control: 'text',
      description: 'Text displayed on the login button',
    },
    signupMsg: {
      control: 'text',
      description: 'Message displayed for the sign-up prompt',
    },
    signupButtonName: {
      control: 'text',
      description: 'Text displayed on the sign-up button/link',
    },
    msalButtonName: {
      control: 'text',
      description: 'Text displayed on the MSAL authentication button',
    },
    oktaButtonName: {
      control: 'text',
      description: 'Text displayed on the Okta authentication button',
    },
    forgotPasswordLabel: {
      control: 'text',
      description: 'Text displayed for the forgot password link',
    },
    imgPath: {
      control: 'text',
      description: 'Path to the login logo image',
    },
    emailType: {
      control: 'text',
      description: 'Type attribute for the email input field',
    },
    passwordType: {
      control: 'text',
      description: 'Type attribute for the password input field',
    },
    isEmailValid: {
      control: 'boolean',
      description: 'Flag indicating if the email is valid',
    },
    isForgotPassword: {
      control: 'boolean',
      description: 'Flag indicating if the forgot password feature is enabled',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
    },
    successMessage: {
      control: 'text',
      description: 'Success message to display',
    },
    handleChange: {
      action: 'changed',
      description: 'Event handler for input changes',
    },
    onLoginClick: {
      action: 'login clicked',
      description: 'Event handler for login button click',
    },
    onMsalClick: {
      action: 'MSAL clicked',
      description: 'Event handler for MSAL authentication button click',
    },
    onOktaClick: {
      action: 'Okta clicked',
      description: 'Event handler for Okta authentication button click',
    },
    onForgotPasswordSubmit: {
      action: 'forgot password submitted',
      description: 'Event handler for forgot password submission',
    },
    getForgetEmail: {
      action: 'get forget email',
      description: 'Function to get email for forgot password flow',
    },
  },
} as Meta<typeof PtgUiLogin>;

const Template: StoryFn<PtgUiLoginProps> = (args) => (
<BrowserRouter>
<PtgUiLogin {...args} /></BrowserRouter>);

// Default login form story
export const DefaultLogin = Template.bind({});
DefaultLogin.args = {
  emailLabel: 'Email',
  passwordLabel: 'Password',
  emailPlaceholder: 'Enter your email',
  passwordPlaceholder: 'Enter your password',
  loginButtonName: 'Sign In',
  signupMsg: 'Don\'t have an account?',
  signupButtonName: 'Sign Up',
  msalButtonName: 'Sign in with Microsoft',
  imgPath: 'https://www.yash.com/wp-content/themes/html5blank-stable/images/yash-logo-new.svg',
  emailType: 'email',
  passwordType: 'password',
  isEmailValid: true,
  isForgotPassword: true,
  forgotPasswordLabel: 'Forgot Password?',
  user: { email: '', password: '' },
};

// Login form with validation error
export const WithValidationError = Template.bind({});
WithValidationError.args = {
  ...DefaultLogin.args,
  isEmailValid: false,
  user: { email: 'invalid-email', password: '12345' },
  errorMessage: 'Please enter a valid email address.',
};

// Login form with success message
export const WithSuccessMessage = Template.bind({});
WithSuccessMessage.args = {
  ...DefaultLogin.args,
  user: { email: 'user@example.com', password: 'password123' },
  successMessage: 'Authentication successful! Redirecting...',
};

// Login form with filled fields
export const FilledLogin = Template.bind({});
FilledLogin.args = {
  ...DefaultLogin.args,
  user: { email: 'user@example.com', password: 'password123' },
};

// Login form with Okta option
export const WithOktaOption = Template.bind({});
WithOktaOption.args = {
  ...DefaultLogin.args,
  oktaButtonName: 'Sign in with Okta',
};

// Login form without forgot password
export const WithoutForgotPassword = Template.bind({});
WithoutForgotPassword.args = {
  ...DefaultLogin.args,
  isForgotPassword: false,
};

