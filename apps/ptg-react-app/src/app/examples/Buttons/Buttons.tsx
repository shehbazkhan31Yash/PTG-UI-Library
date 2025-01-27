import './button.scss';
import { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import { PtgUiButton } from '@ptg-ui/react';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import { useTranslation } from 'react-i18next';
import { BUTTON_VARIANT } from '@ptg-react-app/constants/Constant';

export default function Button() {
  const [showCode, setShowCode] = useState<boolean>(false);
  const [showCodeForBtn, setShowCodeForBtn] = useState<boolean>(false);
  const handleShowCode = () => setShowCode((prev) => !prev);
  const handleShowCodeForBtn = () => setShowCodeForBtn((prev) => !prev);
const button_variants:string[] = Object.values(BUTTON_VARIANT);
console.log(button_variants)
  const { t } = useTranslation();

  const onClick = () => {
    console.log('Button clicked');
  };

  const componentCode = `
    const onClick = () => {};
  `;

  const htmlCode = `
    import { PtgUiButton } from '@ptg-ui/react';
    import "@ptg-ui/react/lib/styles/index.css";

    <PtgUiButton
      text="Primary"
      data-testid="openButton"
      appearance="primary"
      onClick={onClick}
      width="80px"
      fontSize="12px"
      disabled={false}>
    </PtgUiButton>
    <PtgUiButton text="Secondary" appearance="secondary" onClick={onClick}></PtgUiButton>
    <PtgUiButton text="Warning" appearance="warning" onClick={onClick}></PtgUiButton>
    <PtgUiButton text="Success" appearance="success" onClick={onClick}></PtgUiButton>
    <PtgUiButton text="Danger" appearance="danger" onClick={onClick}></PtgUiButton>
    <PtgUiButton text="Info" appearance="info" onClick={onClick}></PtgUiButton>
    <PtgUiButton text="Light" appearance="light" onClick={onClick}></PtgUiButton>
    <PtgUiButton text="Dark" appearance="dark" onClick={onClick}></PtgUiButton>
 `;

  const componentCodeWithIcon = `
    const onClick = () => {};
  `;

  const htmlCodeWithIcon = `
    import { PtgUiButton } from '@ptg-ui/react';
    import "@ptg-ui/react/lib/styles/index.css";
    
    <PtgUiButton
      text="Primary"
      data-testid="openButton"
      appearance="primary"
      btnIconAlignment="left"
      onClick={onClick}
      width="110px"
      fontSize="12px"
      hasbtnIconSlot={true}
      disabled={false}
    >
      <div className="btn-icon">+</div>
    </PtgUiButton>

    <PtgUiButton
      text="Primary"
      data-testid="openButton"
      appearance="primary"
      btnIconAlignment="right"
      onClick={onClick}
      width="110px"
      fontSize="12px"
      hasbtnIconSlot={true}
    >
      <div className="btn-icon">+</div>
    </PtgUiButton>

    <PtgUiButton
      data-testid="openButton"
      appearance="secondary"
      onClick={onClick}
      width="60px"
      fontSize="12px"
      hasbtnIconSlot={true}
    >
      <div className="btn-icon">+</div>
    </PtgUiButton>

    <PtgUiButton
      text="Click Here"
      textColor="#fff"
      backgroundColor={'#052982'}
      width="200px"
      onClick={onClick}
    />
 `;

  return (
    <>
      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mb-2 mt-2">
            <h5 className="font-weight-bold example-heading">{t('BUTTONS')}</h5>
          </div>
          <div className="col-2">
            <CodeIcon
              onClick={handleShowCode}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          {showCode && (
            <ShowCodeComponent
              componentCode={componentCode}
              htmlCode={htmlCode}
            />
          )}
          <div className="col-lg-12 col-md-12 col-sm-6 col-xs-2 ms-3 mt-2">
            <div className="row me-2">
              {button_variants?.map((btn:string)=>{
                return (
                <div className="col mb-2">
                <PtgUiButton
                  text={btn}
                  data-testid="openButton"
                  appearance={btn}
                  onClick={onClick}
                  width="80px"
                  fontSize="12px"
                ></PtgUiButton>
              </div>
               )})}
            </div>
          </div>
        </div>
      </section>

      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-4">
        <div className="row">
          <div className="col-10 mb-2 mt-2">
            <h5 className="font-weight-bold example-heading">
              {t('BUTTON_WITH_ICON')}
            </h5>
          </div>
          <div className="col-2">
            <CodeIcon
              onClick={handleShowCodeForBtn}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          {showCodeForBtn && (
            <ShowCodeComponent
              componentCode={componentCodeWithIcon}
              htmlCode={htmlCodeWithIcon}
            />
          )}
          <div className="col-lg-12 col-md-12 col-sm-6 col-xs-4 ms-3 mt-2">
            <h6>{t('ICON_ALIGNMENT_LEFT')}</h6>
            {}
            <div className="col-2 mb-2">
              <PtgUiButton
                text="Primary"
                data-testid="openButton"
                appearance="primary"
                btnIconAlignment="left"
                onClick={onClick}
                width="110px"
                fontSize="12px"
                hasbtnIconSlot={true}
                disabled={false}
              >
                <div className="btn-icon">+</div>
              </PtgUiButton>
            </div>

            <div className="col-5 mb-2 mt-4">
              <h6>{t('ICON_ALIGNMENT_RIGHT')}</h6>
              <PtgUiButton
                text="Primary"
                data-testid="openButton"
                appearance="primary"
                btnIconAlignment="right"
                onClick={onClick}
                width="110px"
                fontSize="12px"
                hasbtnIconSlot={true}
              >
                <div className="btn-icon">+</div>
              </PtgUiButton>
            </div>

            <div className="col-2 mb-2">
              <h6>{t('ICON')}</h6>
              <PtgUiButton
                data-testid="openButton"
                appearance="secondary"
                onClick={onClick}
                width="60px"
                fontSize="12px"
                hasbtnIconSlot={true}
              >
                <div className="btn-icon">+</div>
              </PtgUiButton>
            </div>
            <div className="col-5 mb-2">
              <h6>{t('CUSTOM_BUTTON')}</h6>
              <PtgUiButton
                text="Click Here"
                textColor="#fff"
                backgroundColor={'#052982'}
                width="200px"
                onClick={onClick}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
