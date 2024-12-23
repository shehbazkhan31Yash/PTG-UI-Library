import React, { useState } from 'react';
import { PtgUiButton } from '@ptg-ui/react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import { useTranslation } from 'react-i18next';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './button.scss';

export default function Button() {
  const [showCode, setShowCode] = useState(false);
  const [showCodeForBtn, setShowCodeForBtn] = useState(false);

  const { t } = useTranslation();

  const onClick = () => {};

  const componentCode = `
    const onClick = () => {};
  `;

  const htmlCode = `
    import { PtgUiButton } from '@ptg-ui/react';
    import "@ptg-ui/react/lib/styles/index.css";

    <PtgUiButton
      text="Primary"
      data-testid="openButton"
      appearance="btn-primary"
      onClick={onClick}
      width="80px"
      fontSize="12px"
      disabled={false}>
    </PtgUiButton>
    <PtgUiButton text="Secondary" appearance="btn-secondary" onClick={onClick}></PtgUiButton>
    <PtgUiButton text="Warning" appearance="btn-warning" onClick={onClick}></PtgUiButton>
    <PtgUiButton text="Success" appearance="btn-success" onClick={onClick}></PtgUiButton>
    <PtgUiButton text="Danger" appearance="btn-danger" onClick={onClick}></PtgUiButton>
    <PtgUiButton text="Info" appearance="btn-info" onClick={onClick}></PtgUiButton>
    <PtgUiButton text="Light" appearance="btn-light" onClick={onClick}></PtgUiButton>
    <PtgUiButton text="Dark" appearance="btn-dark" onClick={onClick}></PtgUiButton>
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
      appearance="btn-primary"
      btnIconAlignment="left"
      onClick={onClick}
      width="110px"
      fontSize="12px"
      hasbtnIconSlot={true}
      disabled={false}
    >
      <div slot="btnIcon">
        <AddCircleIcon />
      </div>
    </PtgUiButton>

    <PtgUiButton
      text="Primary"
      data-testid="openButton"
      appearance="btn-primary"
      btnIconAlignment="right"
      onClick={onClick}
      width="110px"
      fontSize="12px"
      hasbtnIconSlot={true}
    >
      <div slot="btnIcon">
        <AddCircleIcon />
      </div>
    </PtgUiButton>

    <PtgUiButton
      data-testid="openButton"
      appearance="btn-secondary"
      onClick={onClick}
      width="60px"
      fontSize="12px"
      hasbtnIconSlot={true}
    >
      <div slot="btnIcon">
        <AddCircleIcon />
      </div>
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
              onClick={() => setShowCode((prev) => !prev)}
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
              <div className="col mb-2">
                <PtgUiButton
                  text="Primary"
                  data-testid="openButton"
                  appearance="primary"
                  onClick={onClick}
                  width="80px"
                  fontSize="12px"
                ></PtgUiButton>
              </div>

              <div className="col mb-2">
                <PtgUiButton
                  text="Secondary"
                  data-testid="openButton"
                  appearance="secondary"
                  onClick={onClick}
                  width="100px"
                  fontSize="12px"
                ></PtgUiButton>
              </div>

              <div className="col mb-2">
                <PtgUiButton
                  text="Warning"
                  data-testid="openButton"
                  appearance="warning"
                  onClick={onClick}
                  width="90px"
                  fontSize="12px"
                ></PtgUiButton>
              </div>

              <div className="col mb-2">
                <PtgUiButton
                  text="Success"
                  data-testid="openButton"
                  appearance="success"
                  onClick={onClick}
                  width="90px"
                  fontSize="12px"
                ></PtgUiButton>
              </div>

              <div className="col mb-2">
                <PtgUiButton
                  text="Danger"
                  data-testid="openButton"
                  appearance="danger"
                  onClick={onClick}
                  width="80px"
                  fontSize="12px"
                ></PtgUiButton>
              </div>

              <div className="col mb-2">
                <PtgUiButton
                  text="Info"
                  data-testid="openButton"
                  appearance="info"
                  onClick={onClick}
                  width="80px"
                  fontSize="12px"
                ></PtgUiButton>
              </div>

              <div className="col mb-2">
                <PtgUiButton
                  text="Light"
                  data-testid="openButton"
                  appearance="light"
                  onClick={onClick}
                  width="80px"
                  fontSize="12px"
                ></PtgUiButton>
              </div>

              <div className="col mb-2">
                <PtgUiButton
                  text="Dark"
                  data-testid="openButton"
                  appearance="dark"
                  onClick={onClick}
                  width="80px"
                  fontSize="12px"
                ></PtgUiButton>
              </div>
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
              onClick={() => setShowCodeForBtn((prev) => !prev)}
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
            {/* <div className='row'> */}
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
                <div slot="btnIcon">
                  <AddCircleIcon />
                </div>
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
                <div slot="btnIcon">
                  <AddCircleIcon />
                </div>
              </PtgUiButton>
            </div>

            <div className="col-2 mb-2">
              <h6>Icon</h6>
              <PtgUiButton
                data-testid="openButton"
                appearance="secondary"
                onClick={onClick}
                width="60px"
                fontSize="12px"
                hasbtnIconSlot={true}
              >
                <div slot="btnIcon">
                  <AddCircleIcon />
                </div>
              </PtgUiButton>
            </div>
            <div className="col-2 mb-2">
              <h6>Custom Button</h6>
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
