/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example showing how to use the role based method.
 *
 */
import './role-based.scss';
import { useState } from 'react';
import { PtgUiButton } from '@ptg-ui/react';
import { Role } from './role';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';

/* eslint-disable-next-line */
export interface RoleBasedProps {}

export function RoleBased(props: RoleBasedProps) {
  const { t } = useTranslation();
  //const [flag, setFlag] = useState(authClass.getRole() == 'admin' ? true : false);
  const [showCode, setShowCode] = useState(false);
  
  const ShowExampleCode = () => {
    if(!showCode){
      setShowCode(true);
    }
    else{
      setShowCode(false);
    }
  };

  const flag = Role();
  const componentCode = `
    import { useState } from 'react';
    import { PtgUiButton } from '@ptg-ui/react';
    import { authClass } from '../../auth/services/auth.service';
    import { Role } from './role';
    
    /* eslint-disable-next-line */
    export interface RoleBasedProps {}
    
    export function RoleBased(props: RoleBasedProps) {
      const flag = Role();
      export default RoleBased;`

  const htmlCode = `
  {flag && (
    <>
      <PtgUiButton className="w-100">
        <i className="fa-solid fa-user-plus m-2"></i>
        ADD_USER_TEXT
      </PtgUiButton>
  
      <PtgUiButton className="w-100">
        <i className="fa-solid fa-user-pen m-2"></i>
        EDIT_USER_TEXT
      </PtgUiButton>
    </>
  )}
      <PtgUiButton className="w-100">
        <i className="fa-solid fa-users m-2"></i>
        VIEW_USER_TEXT
      </PtgUiButton> `

  return (
      <section className="card-section-two bg-white rounded pt-2 mt-2 mb-2 pb-4">
       <div className="row">
       <div className="col-10 mb-2 mt-2">
         <h5 className="example-heading heading">{t('ROLE_BASED_EXAMPLE_TEXT')}</h5>
       </div>
       <div className="col-2">
         <CodeIcon onClick={ShowExampleCode} fontSize="large" className='show-code-icon'></CodeIcon>
       </div>
       <hr className='horizontal-line' />
      </div>
      
      {!showCode ? (
      <>
      {flag && (
        <>
          <div className="row align-items-center mb-2">
            <div className=" col-lg-4 col-md-6 col-sm-6 col-xs-6">
              <h6 className="mt-2">
                {t('BUTTON_VISIBLE_FOR_ADMIN_ROLE_TEXT')}
              </h6>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
              <PtgUiButton className="w-100">
                <i className="fa-solid fa-user-plus m-2"></i>
                {t('ADD_USER_TEXT')}
              </PtgUiButton>
            </div>
          </div>
          <div className="row align-items-center mb-2">
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
              <h6>{t('BUTTON_VISIBLE_FOR_ADMIN_ROLE_TEXT')}</h6>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
              <PtgUiButton className="w-100">
                <i className="fa-solid fa-user-pen m-2"></i>
                {t('EDIT_USER_TEXT')}
              </PtgUiButton>
            </div>
          </div>
        </>
      )}
      <div className="row align-items-center mb-2">
        <div className="ms-4 me-4 col-lg-4 col-md-6 col-sm-6 col-xs-6">
          <h6 className='view-user-text'>{t('BUTTON_VISIBLE_FOR_EVERYONE_TEXT')}</h6>
        </div>
        <div className="view-user-button col-lg-4 col-md-6 col-sm-6 col-xs-6">
          <PtgUiButton className="ms-4 w-100">
            <i className="fa-solid fa-users m-2"></i>
            {t('VIEW_USER_TEXT')}
          </PtgUiButton>
        </div>
      </div>
      </>
    ): (
      <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
    )}
     </section>
  );
}

export default RoleBased;
