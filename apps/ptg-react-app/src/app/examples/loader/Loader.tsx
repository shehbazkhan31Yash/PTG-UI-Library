import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { PtgUiLoading } from '@ptg-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './loader.css';

export default function Loader() {
    const [showDotCode, setShowDotCode] = useState<boolean>(false);
    const [showLinearCode, setShowLinearCode] = useState<boolean>(false);
    const [showCircularCode, setShowCircularCode] = useState<boolean>(false);
    const { t } = useTranslation();

    const handleShowDotCode = () => {
        setShowDotCode(!showDotCode)
    }
   
    const dotComponentCode = `
    import { PtgUiLoading } from '@ptg-ui/react';
    import "@ptg-ui/react/lib/styles/index.css";
  `;
    const dotHtmlCode = `<PtgUiLoading type='dot' color='#a2e56b' />`;

    const handleShowLinearCode = () => {
        setShowLinearCode(!showLinearCode)
    }

    const linearComponentCode = `
    import { PtgUiLoading } from '@ptg-ui/react';
    import "@ptg-ui/react/lib/styles/index.css";
  `;
    const linearHtmlCode = `<PtgUiLoading type='linear' color='#CCC' />`;

    const handleShowCircularCode = () => {
        setShowCircularCode(!showCircularCode)
    }

    const circularComponentCode = `
    import { PtgUiLoading } from '@ptg-ui/react';
    import "@ptg-ui/react/lib/styles/index.css";
  `;
    const circularHtmlCode = `<PtgUiLoading type='circular' color='#a2e56b' />`;

    return (
        <>
            <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2 mb-4">
                <div className="row">
                    <div className="col-10 mb-2 mt-2">
                        <h5 className="font-weight-bold example-heading">
                            {t('DOT-LOADER')}
                        </h5>
                    </div>
                    <div className="col-2">
                        <CodeIcon
                            onClick={handleShowDotCode}
                            fontSize="large"
                            className="show-code-icon"
                        ></CodeIcon>
                    </div>
                    <hr className="horizontal-line" />
                    {showDotCode && (
                        <ShowCodeComponent
                            componentCode={dotComponentCode}
                            htmlCode={dotHtmlCode}
                        />
                    )}
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 mb-2 mt-2">
                        <PtgUiLoading type='dot' color='#a2e56b' />
                    </div>
                </div>
            </section>
            <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2 mb-4">
                <div className="row">
                    <div className="col-10 mb-2 mt-2">
                        <h5 className="font-weight-bold example-heading">
                            {t('LINEAR-LOADER')}
                        </h5>
                    </div>
                    <div className="col-2">
                        <CodeIcon
                            onClick={handleShowLinearCode}
                            fontSize="large"
                            className="show-code-icon"
                        ></CodeIcon>
                    </div>
                    <hr className="horizontal-line" />
                    {showLinearCode && (
                        <ShowCodeComponent
                            componentCode={linearComponentCode}
                            htmlCode={linearHtmlCode}
                        />
                    )}
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 mb-2 mt-2">
                        <PtgUiLoading type='linear' color='#CCC' />
                    </div>
                </div>
            </section>
            <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2 mb-4">
                <div className="row">
                    <div className="col-10 mb-2 mt-2">
                        <h5 className="font-weight-bold example-heading">
                            {t('CIRCULAR-LOADER')}
                        </h5>
                    </div>
                    <div className="col-2">
                        <CodeIcon
                            onClick={handleShowCircularCode}
                            fontSize="large"
                            className="show-code-icon"
                        ></CodeIcon>
                    </div>
                    <hr className="horizontal-line" />
                    {showCircularCode && (
                        <ShowCodeComponent
                            componentCode={circularComponentCode}
                            htmlCode={circularHtmlCode}
                        />
                    )}
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 mb-2 mt-2">
                        <PtgUiLoading type='circular' color='#a2e56b' />
                    </div>
                </div>
            </section>
        </> 
    );
}
