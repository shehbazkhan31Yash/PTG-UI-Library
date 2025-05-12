import React from 'react';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { PtgUiCustomAvatar } from '@ptg-ui/react';
import { IAvatarsWithIcon } from '@ptg-react-app/interfaces';
import { iconData } from '@ptg-react-app/mock/avatar';

export default function AvatarsWithIconExample(
  props: Readonly<IAvatarsWithIcon>
) {

  const componentCode = `
  import { PtgUiCustomAvatar } from '@ptg-ui/react';
  import { iconData } from '@ptg-react-app/mock/avatar';

  `;

  const htmlCode = `
  {iconData.map((iconItem) => (
    <div key={iconItem.id} style={{ margin: '5px' }}>
      <PtgUiCustomAvatar
        size={40}
        backgroundColor={iconItem.backgroundColor}
      >
        {iconItem.icon}
      </PtgUiCustomAvatar>
    </div>
  ))}
  `;

  return (
    <section>
      {props?.showCodeAvatarsWithIcon && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <div
          className="avatar-component"
        >
          {iconData.map((iconItem) => (
            <div key={iconItem.id} style={{ margin: '5px' }}>
              <PtgUiCustomAvatar
                size={40}
                backgroundColor={iconItem.backgroundColor}
              >
                {iconItem.icon}
              </PtgUiCustomAvatar>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
