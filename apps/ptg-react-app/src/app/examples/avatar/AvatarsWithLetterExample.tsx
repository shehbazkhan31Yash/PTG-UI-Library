import React from 'react';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { PtgUiCustomAvatar } from '@ptg-ui/react';
import { IAvatarsWithLetter } from '@ptg-react-app/interfaces';
import { lettersData } from '@ptg-react-app/mock/avatar';

export default function AvatarsWithLetterExample(
  props: Readonly<IAvatarsWithLetter>
) {

  const componentCode = `
  import { PtgUiCustomAvatar } from '@ptg-ui/react';
 import { lettersData } from '@ptg-react-app/mock/avatar';
  `;

  const htmlCode = `
  {lettersData.map((item) => (
    <div key={item.id} style={{ margin: '5px' }}>
      <PtgUiCustomAvatar
        backgroundColor={item.backgroundColor}
        textColor={item.textColor}
        size={40}
      >
        {item.letters}
      </PtgUiCustomAvatar>
    </div>
  ))}
  `;

  return (
    <section>
      {props?.showCodeAvatarsWithLetter && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <div
          className="avatar-component"
        >
          {lettersData.map((item) => (
            <div key={item.id} style={{ margin: '5px' }}>
              <PtgUiCustomAvatar
                backgroundColor={item.backgroundColor}
                textColor={item.textColor}
                size={40}
              >
                {item.letters}
              </PtgUiCustomAvatar>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
