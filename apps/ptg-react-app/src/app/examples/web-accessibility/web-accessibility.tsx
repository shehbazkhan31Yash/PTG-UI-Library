/**
 * @since April 2022
 * @author Ahilyabai Netaji Pawar
 * @updatedBy Harsha zalawa
 * @desc Web-accessibility Example
 */

/* eslint-disable jsx-a11y/no-access-key */
import './web-accessibility.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PtgUiInput,
  PtgUiSelect,
  PtgUiCheckbox,
  PtgUiRadio,
  PtgUiDatePicker,
  PtguseFetch
} from '@ptg-ui/react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { authClass } from '@ptg-react-app/auth/services/auth.service';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';

/* eslint-disable-next-line */
export interface WebAccessibilityProps {}
export function WebAccessibility(props: WebAccessibilityProps) {
  const [cityList, setCityList]= useState([])
  const [genders, setGenders]= useState([])
  const [user, setUser]: any = useState({
    isLoading: false,
    username: '',
    email: '',
    gender: 'male',
    city: '',
    password: '',
    selectedCheck: '',
    error: null,
    disable: true,
  });
  const [formErr, setFormErr] = useState({
    username: false,
    email: false,
    gender: false,
    city: false,
    password: false,
  });

  const [showCode, setShowCode] = useState(false);
  const {data:apiData} = PtguseFetch('city-lists') as any
  const { data: apiDataGender } = PtguseFetch('gender-lists') as any
  const { t } = useTranslation();
  
  useEffect(() => {
    if(apiData[0]){
      setCityList(apiData[0].attributes?.city)
    }
  },[apiData])

  useEffect(() => {
    if(apiDataGender[0]){
      setGenders(apiDataGender[0].attributes?.gender)
    }
  },[apiDataGender])
  const ShowExampleCode = () => {
    if(!showCode){
      setShowCode(true);
    }
    else{
      setShowCode(false);
    }
  };

  const setState: any = (field: string, value: any) => {
    setUser((preState: any) => {
      return {
        ...preState,
        [field]: value,
      };
    });
  };
  const setErrState: any = (field: string, value: any) => {
    setFormErr((preState: any) => {
      return {
        ...preState,
        [field]: value,
      };
    });
  };
  const handleChange: any = (e: any) => {
    const { name, value } = e.target;
    validate(name, value);
    setUser((preState: any) => {
      return {
        ...preState,
        [name]: value,
      };
    });
  };
  const [date, setDate] = useState(null);
  const dateChange = (date: any) => {
    setDate(date);
  };
  const [selectedCheck, setSelectedCheck] = useState<boolean>(false);
  const checkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCheck(event.target.checked);
  };
  const isDisabled: any = () => {
    setState(
      'disable',
      !(
        user.email.length > 0 &&
        user.password.length > 0 &&
        !formErr.email &&
        !formErr.password &&
        user.username.length > 0 &&
        user.city.length > 0 &&
        user.gender.length > 0 &&
        selectedCheck &&
        date
      )
    );
  };
  const validate = (fieldName: string, value: any) => {
    let disabled = false;
    let formErr = false;
    switch (fieldName) {
      case 'username':
        if (value !== '') {
          disabled = true;
        }
        break;
      case 'email':
        // eslint-disable-next-line no-case-declarations
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (value === '' || value ? true : false !== regexEmail.test(value)) {
          disabled = true;
          if (!regexEmail.test(value)) {
            formErr = true;
          }
        }
        break;
      case 'city':
        if (value !== '') {
          disabled = true;
        }
        break;
      case 'gender':
        if (value !== '') {
          disabled = true;
        }
        break;
      case 'password':
        if (value !== '') {
          disabled = true;
        }
        break;
      default: {
        disabled = true;
      }
    }
    setErrState(fieldName, formErr);
  };
  useEffect(() => {
    isDisabled();
  }, [
    user.username,
    user.email,
    date,
    user.city,
    user.gender,
    user.password,
    selectedCheck,
  ]);

  //validate on focus out or blur input
  const handleBlur: any = (e: any) => {
    const { name } = e.target;
    setFormErr((preState: any) => {
      return {
        ...preState,
        [name]: true,
      };
    });
  };

  const navigate = useNavigate();
  const handleRegister = (event: any) => {
    event.preventDefault();
    setState('error', null);
    setState('isLoading', true);
    authClass
      .signUp({
        username: user.value,
        email: user.email,
        DOB: user.date,
        city: user.city,
        gender: user.gender,
        password: user.password,
      })
      .then((response: any) => {
        if (response) {
          setState('isLoading', false);
          localStorage.setItem('token', response);
          navigate('/login');
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const componentCode =  `

  export const CITY_LIST = [
    // { value: '', label: 'Select' },
    { value: 'pune', label: 'Pune', name:'city' },
    { value: 'indore', label: 'Indore',name:'city' },
    { value: 'gujarat', label: 'Gujarat',name:'city' },
    { value: 'Karnataka', label: 'Karnataka',name:'city' },
    { value: 'goa', label: 'Goa',name:'city' },
  ];

  export const GENDER_LIST = [
    { id: '1', name: 'Male', value:'male' },
    { id: '2', name: 'Female', value: 'female' },
    { id: '3',   name: 'Other', value: 'other' },
  ];


    import React, { useEffect, useRef, useState } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { CITY_LIST, GENDER_LIST } from '../../mock/mocks';
    import {
      PtgUiButton,
      PtgUiInput,
      PtgUiSelect,
      PtgUiCheckbox,
      PtgUiRadio,
      PtgUiDatePicker,
    } from '@ptg-ui/react';
    
    import { authClass } from '@ptg-react-app/auth/services/auth.service';
    import { resources } from '../../resource/resource';
    
    /* eslint-disable-next-line */
    export interface WebAccessibilityProps {}
    export function WebAccessibility(props: WebAccessibilityProps) {
    
    
      const [user, setUser]: any = useState({
        isLoading: false,
        username: '',
        email: '',
        gender: 'male',
        city: '',
        password: '',
        selectedCheck: '',
        error: null,
        disable: true,
      });
      const [formErr, setFormErr] = useState({
        username: false,
        email: false,
        gender: false,
        city: false,
        password: false,
      });
      const setState: any = (field: string, value: any) => {
        setUser((preState: any) => {
          return {
            ...preState,
            [field]: value,
          };
        });
      };
      const setErrState: any = (field: string, value: any) => {
        setFormErr((preState: any) => {
          return {
            ...preState,
            [field]: value,
          };
        });
      };
      const handleChange: any = (e: any) => {
        const { name, value } = e.target;
        console.log('name' + name);
        console.log('value' + value);
        validate(name, value);
        setUser((preState: any) => {
          return {
            ...preState,
            [name]: value,
          };
        });
      };
      const [date, setDate] = useState(null);
      const dateChange = (date: any) => {
        setDate(date);
      };
      const [selectedCheck, setSelectedCheck] = useState<boolean>(false);
      const checkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCheck(event.target.checked);
      };
      const isDisabled: any = () => {
        setState(
          'disable',
          !(
            user.email.length > 0 &&
            user.password.length > 0 &&
            !formErr.email &&
            !formErr.password &&
            user.username.length > 0 &&
            user.city.length > 0 &&
            user.gender.length > 0 &&
            selectedCheck &&
            date
          )
        );
      };
      const validate = (fieldName: string, value: any) => {
        let disabled = false;
        let formErr = false;
        switch (fieldName) {
          case 'username':
            if (value !== '') {
              disabled = true;
            }
            break;
          case 'email':
            // eslint-disable-next-line no-case-declarations
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            if (value === '' || value ? true : false !== regexEmail.test(value)) {
              disabled = true;
              if (!regexEmail.test(value)) {
                formErr = true;
              }
            }
            break;
          case 'city':
            if (value !== '') {
              disabled = true;
            }
            break;
          case 'gender':
            if (value !== '') {
              disabled = true;
            }
            break;
          case 'password':
            if (value !== '') {
              disabled = true;
            }
            break;
          default: {
            disabled = true;
          }
        }
        setErrState(fieldName, formErr);
      };
      useEffect(() => {
        isDisabled();
      }, [
        user.username,
        user.email,
        date,
        user.city,
        user.gender,
        user.password,
        selectedCheck,
      ]);
    
      //validate on focus out or blur input
      const handleBlur: any = (e: any) => {
        const { name } = e.target;
        setFormErr((preState: any) => {
          return {
            ...preState,
            [name]: true,
          };
        });
      };
    
      const navigate = useNavigate();
      const handleRegister = (event: any) => {
        event.preventDefault();
        setState('error', null);
        setState('isLoading', true);
        authClass
          .signUp({
            username: user.value,
            email: user.email,
            DOB: user.date,
            city: user.city,
            gender: user.gender,
            password: user.password,
          })
          .then((response: any) => {
            if (response) {
              setState('isLoading', false);
              localStorage.setItem('token', response);
              navigate('/login');
            }
          })
          .catch((error: any) => {
            console.log(error);
          });
      };
     
    export default WebAccessibility;`

const htmlCode = `

<form>
  <label htmlFor="inputUsername" tabIndex={0} aria-label="User Name">USER_NAME</label>
  <PtgUiInput
    type="text"
    name="username"
    id="inputUsername"
    data-testid="username"
    placeholder="USER_NAME_PLACEHOLDER"
    value={user.username}
    onChange={handleChange}
    className={"w-100 form-control bg_0 ${
      formErr.username ? 'border-danger' : ''
    }"}
    onBlur={user.username === '' ? handleBlur : null}
  />
  <label htmlFor="inputEmail" tabIndex={0} aria-label="Email">LABEL_EMAIL</label>

  <PtgUiInput
    type="email"
    name="email"
    id="inputEmail"
    data-testid="email"
    placeholder="INPUT_PLACEHOLDER_EMAIL"
    value={user.email}
    onChange={handleChange}
    className={"w-100 form-control bg_0 ${
      formErr.email ? 'border-danger' : ''
    }"}
    onBlur={user.email === '' ? handleBlur : null}
  />
  
  <label htmlFor="inputDOB" tabIndex={0} aria-label="DOB" id="enterDOB">DOB</label>

  <PtgUiDatePicker
    variant="inline"
    className="date-picker mt-1 w-100"
    format="MM/dd/yyyy"
    id="inputDOB"
    data-testid="inputDOB"
    placeholder="DATE_PLACEHOLDER"
    inputVariant="outlined"
    value={date}
    onChange={dateChange}
    ariaLabel="date"
    disableRipple={true}
    disableTouchRipple={true}
  />
               
  <label htmlFor="inputCity" tabIndex={0} aria-label="city">CITY</label>

  <PtgUiSelect
    name="city"
    list={CITY_LIST}
    id="inputCity"
    data-testid="city"
    className={"sel-placeholder w-100 ${
      formErr.city ? 'border-danger' : ''
    }"}
    onChange={handleChange}
    value={user.city}
    aria-label="given-name"
    onBlur={user.city === '' ? handleBlur : null}
  />
                      
  <fieldset>
    <legend className="gender-align"> <label tabIndex={0} aria-label="Gender">GENDER</label>
  
    <div className="d-flex">
      <PtgUiRadio
        name="gender"
        htmlFor="radioinputForGender"
        id="radioinputForGender"
        list={GENDER_LIST}
        onChange={handleChange}
        value={user.gender}
      />
    </div>
  </fieldset>
                   
  <label htmlFor="inputPassword" tabIndex={0} aria-label="Password">LABEL_PASSWORD</label>
  <PtgUiInput
    type="password"
    className={"w-100 form-control bg_0"}
    value={user.password}
    onChange={handleChange}
    name="password"
    id="inputPassword"
    data-testid="password"
    placeholder="ENTER_PASSWORD_PLACEHOLDER"
  />
                      
  <PtgUiCheckbox
    label={t('CONFIRM_LABEL')}
    htmlFor="confirm"
    id="confirm"
    name="confirm-registration"
    data-testid="confirm-registration"
    checked={selectedCheck}
    onChange={checkHandler}
    className={"form-check-input"}
  />
                   
  <PtgUiButton
    className="w-100"
    type="button"
    onClick={handleRegister}
    disabled={user.disable}
    aria-label="submit"
    data-testid="register"
  >SUBMIT</PtgUiButton>

  <h2>ACHIEVED_HEADING</h2>
    <ol>
      <li> ACHIEVED_PNT_ONE </li>
      <li> ACHIEVED_PNT_TWO </li>
      <li> ACHIEVED_PNT_THREE </li>
      <li> ACHIEVED_PNT_FOUR </li>
      <li> ACHIEVED_PNT_FIVE </li>
    </ol>
</form>`

  return (
     <section className="card-section-two bg-white rounded pt-2 mt-2 mb-2 pb-4">
      <div className='row'>
        <div className="ms-4 col-6 mb-2 mt-2">
          <h5 className='web-accessibitlity-heading '>{t('WEB_ACCESSIBILITY_TEXT')}</h5>
        </div>

        <div className="col mb-2 mt-1">
          <CodeIcon onClick={ShowExampleCode} fontSize="large" className='show-code-icon'></CodeIcon>
        </div>
        <hr className='horizontal-line'/>
      </div>

    {!showCode ? (
      <div className=" signup-wrappper container-fluid p-0 d-flex  align-items-center">
      <div className="signup-container">
        <div className="signup-form-wrapperr">
          <div className="row access-wrapper">
            <div className="col-12">
              <form className="form-login p-4">
                <div className="login-form">
                  <div className="form-container">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="form-group required mb-2 web-field">
                          <label
                            htmlFor="inputUsername"
                            tabIndex={0}
                            aria-label="User Name"

                          >
                            {t('USER_NAME')}
                          </label>
                          <PtgUiInput
                            type="text"
                            name="username"
                            id="inputUsername"
                            data-testid="username"
                            placeholder={t('USER_NAME_PLACEHOLDER')}
                            value={user.username}
                            onChange={handleChange}
                            className={`w-100  form-control bg_0 ${
                              formErr.username ? 'border-danger' : ''
                            }`}
                            onBlur={user.username === '' ? handleBlur : null}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="form-group required mb-2 web-field">
                          <label
                            htmlFor="inputEmail"
                            tabIndex={0}
                            aria-label="Email"
                          >
                            {t('LABEL_EMAIL')}
                          </label>
                          <PtgUiInput
                            type="email"
                            name="email"
                            id="inputEmail"
                            data-testid="email"
                            placeholder={t('INPUT_PLACEHOLDER_EMAIL')}
                            value={user.email}
                            onChange={handleChange}
                            className={`w-100 form-control bg_0 ${
                              formErr.email ? 'border-danger' : ''
                            }`}
                            onBlur={user.email === '' ? handleBlur : null}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="form-group required mb-2 web-field">
                          <label
                            htmlFor="inputDOB"
                            tabIndex={0}
                            aria-label="DOB"
                            id="enterDOB"
                          >
                            {t('DOB')}
                          </label>
                          <PtgUiDatePicker
                            variant="inline"
                            className="date-picker mt-1 w-100"
                            format="MM/dd/yyyy"
                            id="inputDOB"
                            
                            data-testid="inputDOB"
                            placeholder={t('DATE_PLACEHOLDER')}
                            inputVariant="outlined"
                            value={date}
                            onChange={dateChange}
                            ariaLabel="date"
                            disableRipple={true}
                            disableTouchRipple={true}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="form-group required mb-2 field">
                          <label
                            htmlFor="inputCity"
                            tabIndex={0}
                            aria-label="city"
                          >
                            {t('CITY')}
                          </label>
                          <PtgUiSelect
                            name="city"
                            list={cityList}
                            id="inputCity"
                            data-testid="city"
                            className={`sel-placeholder w-100 ${
                              formErr.city ? 'border-danger' : ''
                            }`}
                            onChange={handleChange}
                            value={user.city}
                            aria-label="given-name"
                            onBlur={user.city === '' ? handleBlur : null}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 select-gender">
                        <div className="form-group required mb-2">
                          <fieldset>
                            <legend className="gender-align">
                              <label tabIndex={0} aria-label="Gender">
                                {t('GENDER')}
                              </label>
                            </legend>

                            <div className="d-flex gender-list">
                              <PtgUiRadio
                                name="gender"
                                htmlFor="radioinputForGender"
                                id="radioinputForGender"
                                list={genders}
                                onChange={handleChange}
                                value={user.gender}
                              />
                            </div>
                         </fieldset>
                        </div>
                      </div>
                    </div>
                    <div className="row"></div>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group required mb-2 field">
                          <label
                            htmlFor="inputPassword"
                            tabIndex={0}
                            aria-label="Password"
                          >
                            {t('LABEL_PASSWORD')}
                          </label>
                          <PtgUiInput
                            type="password"
                            className={`w-100 form-control bg_0`}
                            value={user.password}
                            onChange={handleChange}
                            name="password"
                            id="inputPassword"
                            data-testid="password"
                            placeholder={t('ENTER_PASSWORD_PLACEHOLDER')}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row declaration-check">
                      <div className="col-12">
                        <div className="form-group required mb-2">
                          <PtgUiCheckbox
                            label={t('CONFIRM_LABEL')}
                            htmlFor="confirm"
                            id="confirm"
                            name="confirm-registration"
                            data-testid="confirm-registration"
                            checked={selectedCheck}
                            onChange={checkHandler}
                            className={`form-check-input`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <PtgUiButton
                    className="w-100 web-button"
                    type="button"
                    aria-label="submit"
                    data-testid="register"
                  >
               
                  </PtgUiButton> */}
                  <div className='row'>
                    <div className='col-auto ml-auto'>
                  <button type="button" className=" btn btn-primary web-field"  onClick={handleRegister}
                    disabled={user.disable}>     
                  {t('SUBMIT')}
                  </button>
                  </div>
                  </div>
                </div>
                <hr className='mt-5'/>
                <div className="row mt-5 achieved-heading">
                  <div className="col-md-12">
                    <h6 className='mb-3'>{t('ACHIEVED_HEADING')}</h6>
                        <ol>
                          <li>{t('ACHIEVED_PNT_ONE')}</li>
                          <li>{t('ACHIEVED_PNT_TWO')}</li>
                          <li>{t('ACHIEVED_PNT_THREE')}</li>
                          <li>{t('ACHIEVED_PNT_FOUR')}</li>
                          <li>{t('ACHIEVED_PNT_FIVE')}</li>
                        </ol>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    ):(
      <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
    )}
    </section>
  );
}
export default WebAccessibility;
