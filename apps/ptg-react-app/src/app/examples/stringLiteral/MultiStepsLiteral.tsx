export const MULTISTEPCOMPONENT =` 
 const [details, setDetails] = useState<IUserDetails>({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    greeting: '',
    gender: '',
    phone: '',
    zipCode: '',
    state: '',
    homeAddress: '',
    country: '',
    cardType: '',
    cardNumber: '',
    cvc: '',
    expiration: '',
    cardHolder: '',
  });
  const [error, setError] = useState<IUserDetails>({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    greeting: '',
    gender: '',
    phone: '',
    zipCode: '',
    state: '',
    homeAddress: '',
    country: '',
    cardType: '',
    cardNumber: '',
    cvc: '',
    expiration: '',
    cardHolder: '',
  });
  
  // on blur method
  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (!value) {
      setError({ ...error, [name]: true });
    } else {
      setError({ ...error, [name]: false });
    }
    validate(name, value);
  };
  
  // validating different fields
  const validate = (field: string, value: string) => {
    const newError = { ...error };

    if (!value) {
      newError[field] = 'Field is required';
    } else {
      newError[field] = '';
      switch (field) {
        case 'email': {
          const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
          newError[field] = regexEmail.test(value) ? '' : 'Invalid email';
          break;
        }
        case 'phone': {
          const regexPhone = /^\d{10}$/;
          newError[field] = regexPhone.test(value) ? '' : 'Invalid input';
          break;
        }
        case 'cardNumber':
          {
            const regexCardNumber = /^\d{16}$/;
            newError[field] = regexCardNumber.test(value)
              ? ''
              : 'Invalid card number';
          }
          break;
        case 'cvc':
          {
            const regexCvc = /^\d{3}$/;
            newError[field] = regexCvc.test(value) ? '' : 'Invalid cvc';
          }
          break;
        case 'zipCode':
          {
            const regexZipCode = /^\d{6}$/;
            newError[field] = regexZipCode.test(value)
              ? ''
              : 'Invalid zip code';
          }
          break;
        case 'confirmPassword':
          newError[field] =
            details.password !== value ? "Passwords don't match" : '';
          break;
        case 'password':
          newError[field] =
            details.confirmPassword && details.confirmPassword !== value
              ? "Passwords don't match"
              : '';
          break;
        default:
          break;
      }
    }
    setError(newError);
  };

  // handleChange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validate(name, value);
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const stepperSteps: IStep[] = [
    { label: 'Account Info' },
    { label: 'Personal Information' },
    { label: 'Payment Details' },
    { label: 'Confirm Your Details' },
  ];
  
  const allSteps: React.ReactElement<IPtgUiMultiStep>[] = [
    <PtgUiFirstStep
      details={details}
      handleChange={handleChange}
      error={error}
      handleBlur={handleBlur}
    />,
    <PtgUiSecondStep
      details={details}
      handleChange={handleChange}
      error={error}
      handleBlur={handleBlur}
    />,
    <PtgUiThirdStep
      details={details}
      error={error}
      handleBlur={handleBlur}
      handleChange={handleChange}
    />,
    <PtgUiFinalStep
      details={details}
    />,
  ];
  
  const manageNextStepValidation = (step: number) => {
    switch (step) {
      case 0:
        return !(
          details?.userName?.length > 0 &&
          details?.password?.length > 0 &&
          details?.confirmPassword?.length > 0 &&
          !error?.userName &&
          !error?.password &&
          !error?.confirmPassword
        );
      case 1:
        return !(
          details.greeting.length &&
          details.gender.length &&
          details.firstName &&
          details.lastName &&
          details.email &&
          !error.email &&
          details.phone &&
          !error.phone &&
          details.zipCode &&
          !error.zipCode &&
          details.state &&
          details.homeAddress &&
          details.country
        );
      case 2:
        return !(
          details.cardType &&
          details.cardNumber &&
          !error.cardNumber &&
          details.cvc &&
          !error.cvc &&
          details.expiration &&
          details.cardHolder
        );
      default:
        return true;
    }
  };

  //reset form
  const resetForm = () => setDetails(initialDetailsState);

  // submit form
  const submitForm = () => {
    resetForm();
  };
`;

export const MULTISTEPHTMLCODE = `
    <PtgUiMultiStep
      allSteps={allSteps}
      stepperSteps={stepperSteps}
      resetForm={resetForm}
      submitForm={submitForm}
      manageNextStepValidation={manageNextStepValidation}
      orientation="horizontal"
    />`;
