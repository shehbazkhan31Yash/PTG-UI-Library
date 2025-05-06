import React from 'react';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { PtgUiCustomAvatar } from '@ptg-ui/react';
import { IAvatarsWithImage } from '@ptg-react-app/interfaces';
import { imageData } from '@ptg-react-app/mock/avatar';

export default function AvatarsWithImageExample(
  props: Readonly<IAvatarsWithImage>
) {
 

  const componentCode = `
  import { PtgUiCustomAvatar } from '@ptg-ui/react';
  import { imageData } from '@ptg-react-app/mock/avatar';
  `;

  const htmlCode = `
  {imageData.map((image) => (
    <div key={image.id} style={{ margin: '5px' }}>
      <PtgUiCustomAvatar
        size={40}
        src={image.src}
        alt={image.alt}
      />
    </div>
  ))}
  `;

  return (
    <section>
      {props?.showCodeAvatarsWithImage && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <div
          className="avatar-component"
        >
          {imageData.map((image) => (
            <div key={image.id} style={{ margin: '5px' }}>
              <PtgUiCustomAvatar size={40} src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
