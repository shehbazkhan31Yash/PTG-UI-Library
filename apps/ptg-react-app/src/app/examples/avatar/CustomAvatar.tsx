import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AvatarsWithImageExample from './AvatarsWithImageExample';
import AvatarsWithLetterExample from './AvatarsWithLetterExample';
import AvatarsWithSizesExample from './AvatarsWithSizesExample';
import AvatarsWithVariantsExample from './AvatarsWithVariantsExample';
import AvatarsWithGroupedExample from './AvatarsWithGroupedExample';
import AvatarsWithBadgeExample from './AvatarsWithBadgeExample';
import AvatarsWithBorderExample from './AvatarsWithBorderExample';

import CodeIcon from '@mui/icons-material/Code';
import './CustomAvatar.css';
import AvatarsWithIconExample from './AvatarsWithIconExample';
import AvatarsWithTextAndVariantsExample from './AvatarsWithTextAndVariantsExample';

export default function CustomAvatarExample() {
  const [showCodeAvatarsWithImage, setShowCodeAvatarsWithImage] =
    useState<boolean>(false);
  const [showCodeAvatarsWithLetter, setShowCodeAvatarsWithLetter] =
    useState<boolean>(false);

  const [showCodeAvatarsWithSizes, setShowCodeAvatarsWithSizes] =
    useState<boolean>(false);

  const [showCodeAvatarsWithVariants, setShowCodeAvatarsWithVariants] =
    useState<boolean>(false);

  const [showCodeAvatarsWithGrouped, setShowCodeAvatarsWithGrouped] =
    useState<boolean>(false);

  const [showCodeAvatarsWithBadge, setShowCodeAvatarsWithBadge] =
    useState<boolean>(false);

  const [showCodeAvatarsWithIcon, setShowCodeAvatarsWithIcon] =
    useState<boolean>(false);

  const [showCodeAvatarsWithBorder, setShowCodeAvatarsWithBorder] =
    useState<boolean>(false);

    const [showCodeAvatarsWithText, setShowCodeAvatarsWithText] =
    useState<boolean>(false);

  const { t } = useTranslation();

  // Note: Handle function to show code
  const ShowCodeAvatarsWithImageProps = () =>
    setShowCodeAvatarsWithImage(!showCodeAvatarsWithImage);

  const ShowCodeAvatarsWithLetterProps = () =>
    setShowCodeAvatarsWithLetter(!showCodeAvatarsWithLetter);

  const ShowCodeAvatarsWithSizesProps = () =>
    setShowCodeAvatarsWithSizes(!showCodeAvatarsWithSizes);

  const ShowCodeAvatarsWithVariantsProps = () =>
    setShowCodeAvatarsWithVariants(!showCodeAvatarsWithVariants);

  const ShowCodeAvatarsWithGroupedProps = () =>
    setShowCodeAvatarsWithGrouped(!showCodeAvatarsWithGrouped);

  const ShowCodeAvatarsWithBadgeProps = () =>
    setShowCodeAvatarsWithBadge(!showCodeAvatarsWithBadge);

  const ShowCodeAvatarsWithIconProps = () =>
    setShowCodeAvatarsWithIcon(!showCodeAvatarsWithIcon);

  const ShowCodeAvatarsWithBorderProps = () =>
    setShowCodeAvatarsWithBorder(!showCodeAvatarsWithBorder);

  const ShowCodeAvatarsWithTextProps = () =>
    setShowCodeAvatarsWithText(!showCodeAvatarsWithText);

  return (
    <div>
      {/* Avatars with Image */}
      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('AVATARS-WITH-IMAGE')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowCodeAvatarsWithImageProps}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <AvatarsWithImageExample
            showCodeAvatarsWithImage={showCodeAvatarsWithImage}
          />
        </div>
      </section>

      {/* Avatars with Icon */}
      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('AVATARS-WITH-ICON')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowCodeAvatarsWithIconProps}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <AvatarsWithIconExample
            showCodeAvatarsWithIcon={showCodeAvatarsWithIcon}
          />
        </div>
      </section>

      {/* Avatars with letter */}
      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('AVATARS-WITH-LETTER')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowCodeAvatarsWithLetterProps}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <AvatarsWithLetterExample
            showCodeAvatarsWithLetter={showCodeAvatarsWithLetter}
          />
        </div>
      </section>

      {/* Avatars with sizes */}
      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('AVATARS-WITH-SIZES')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowCodeAvatarsWithSizesProps}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <AvatarsWithSizesExample
            showCodeAvatarsWithSizes={showCodeAvatarsWithSizes}
          />
        </div>
      </section>

      {/* Avatars with variants */}
      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('AVATARS-WITH-VARIENTS')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowCodeAvatarsWithVariantsProps}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <AvatarsWithVariantsExample
            showCodeAvatarsWithVariants={showCodeAvatarsWithVariants}
          />
        </div>
      </section>

      {/* Avatars with grouped */}
      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('AVATARS-WITH-GROUPS')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowCodeAvatarsWithGroupedProps}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <AvatarsWithGroupedExample
            showCodeAvatarsWithGrouped={showCodeAvatarsWithGrouped}
          />
        </div>
      </section>

      {/* Avatars with Badge */}
      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('AVATARS-WITH-BADGE')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowCodeAvatarsWithBadgeProps}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <AvatarsWithBadgeExample
            showCodeAvatarsWithBadge={showCodeAvatarsWithBadge}
          />
        </div>
      </section>

      {/* Avatars with Border */}
      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('AVATARS-WITH-BORDER')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowCodeAvatarsWithBorderProps}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <AvatarsWithBorderExample
            showCodeAvatarsWithBorder={showCodeAvatarsWithBorder}
          />
        </div>
      </section>

      {/* Avatars with text */}
      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('AVATARS-WITH-TEXT')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowCodeAvatarsWithTextProps}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <AvatarsWithTextAndVariantsExample
            showCodeAvatarsWithText={showCodeAvatarsWithText}
          />
        </div>
      </section>
    </div>
  );
}
