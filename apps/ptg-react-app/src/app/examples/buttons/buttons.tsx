import CodeIcon from '@mui/icons-material/Code';
import { BUTTON_BACKGROUND_COLOR, BUTTON_VARIANT, COLOR_WHITE, FONT_SIZE_12, WIDTH_110, WIDTH_200, WIDTH_60 } from '@ptg-react-app/constants/Constant';
import { PtgUiButton } from '@ptg-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import './button.css';

export default function Button() {
  const [showCode, setShowCode] = useState<boolean>(false);
  const [showCodeForBtn, setShowCodeForBtn] = useState<boolean>(false);

  // Note HandleShowCode and handleShowCode button code
  const handleShowCode = () => setShowCode((prev) => !prev);

  // Note HandleShowCode and handleShowCode button with icon code
  const handleShowCodeForBtn = () => setShowCodeForBtn((prev) => !prev);

  // Note Button variant code
  const buttonVariant: string[] = Object.values(BUTTON_VARIANT);

  const { t } = useTranslation();


  // Note: Button component code
  const componentCode = `
    const onClick = () => {};
   export const  BUTTON_VARIANT= {
     PRIMARY: 'primary',
     SUCCESS: 'success',
     DANGER:'danger',
     WARNING: 'warning',
     INFO: 'info',
     LIGHT: 'light',
     DARK: 'dark',
     LINK: 'link',     
}
    const buttonVariant: string[] = Object.values(BUTTON_VARIANT);
  `;

  const htmlCode = `
    import { PtgUiButton } from '@ptg-ui/react';
    import "@ptg-ui/react/lib/styles/index.css";
    {buttonVariant?.map((variant: string) => (
      <PtgUiButton
          key={variant}
          text={variant}
          data-testid="openButton"
          appearance={variant}
          onClick={onClick}
          width="80px"
          fontSize="12px"
          disabled={false}>
      </PtgUiButton>
))}
 `;

  const componentCodeWithIcon = `
    const onClick = () => {}
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
              {buttonVariant?.map((variant: string) => (
                <div className="col-auto mb-2" key={variant}>
                  <PtgUiButton
                    text={variant}
                    data-testid="openButton"
                    appearance={variant}
                  ></PtgUiButton>
                </div>
              )
              )}
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
            <div className="col-2 mb-2">
              <PtgUiButton
                text="Primary"
                data-testid="openButton"
                appearance="primary"
                btnIconAlignment="left"
                width={WIDTH_110}
                fontSize={FONT_SIZE_12}
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
                width={WIDTH_110}
                fontSize={FONT_SIZE_12}
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
                width={WIDTH_60}
                fontSize={FONT_SIZE_12}
                hasbtnIconSlot={true}
              >
                <div className="btn-icon">+</div>
              </PtgUiButton>
            </div>
            <div className="col-5 mb-2">
              <h6>{t('CUSTOM_BUTTON')}</h6>
              <PtgUiButton
                text="Click Here"
                textColor={COLOR_WHITE}
                backgroundColor={BUTTON_BACKGROUND_COLOR}
                width={WIDTH_200}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
