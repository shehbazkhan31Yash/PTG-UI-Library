import React from 'react';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { PtgUiCustomAvatar } from '@ptg-ui/react';
import { IAvatarsWithSizes } from '@ptg-react-app/interfaces';
import { avatarWithDifferentSizes } from '@ptg-react-app/mock/avatar';

export default function AvatarsWithSizesExample(
  props: Readonly<IAvatarsWithSizes>
) {
 

  const componentCode = `
  import { PtgUiCustomAvatar } from '@ptg-ui/react';
  import { avatarWithDifferentSizes } from '@ptg-react-app/mock/avatar';
  `;

  const htmlCode = `
  {avatarWithDifferentSizes.map((avatar) => (
    <div key={avatar.id} style={{ margin: '5px' }}>
      <PtgUiCustomAvatar
        backgroundColor={avatar.backgroundColor}
        textColor={avatar.textColor}
        size={avatar.size}
      >
        {avatar.letter}
      </PtgUiCustomAvatar>
    </div>
  ))}
  `;

  return (
    <section>
      {props?.showCodeAvatarsWithSizes && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <div
          className="avatar-component"
        >
          {avatarWithDifferentSizes.map((avatar) => (
            <div key={avatar.id} style={{ margin: '5px' }}>
              <PtgUiCustomAvatar
                backgroundColor={avatar.backgroundColor}
                textColor={avatar.textColor}
                size={avatar.size}
              >
                {avatar.letter}
              </PtgUiCustomAvatar>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
