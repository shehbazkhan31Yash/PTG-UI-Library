import React from 'react';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { PtgUiCustomAvatar } from '@ptg-ui/react';
import { IAvatarsWithGrouped } from '@ptg-react-app/interfaces';
import { groupedImageData } from '@ptg-react-app/mock/avatar';

export default function AvatarsWithGroupedExample(
  props: Readonly<IAvatarsWithGrouped>
) {

  const componentCode = `
  import { PtgUiCustomAvatar } from '@ptg-ui/react';
  import { groupedImageData } from '@ptg-react-app/mock/avatar';
  `;
  

  const htmlCode = `
  {groupedImageData.slice(0, 4).map((image) => (
    <div key={image.id} style={{ margin: '5px' }}>
      <PtgUiCustomAvatar
        size={40}
        src={image.src}
        alt={image.alt}
      />
    </div>
  ))}
  {groupedImageData.length > 4 && (
    <div style={{ margin: '5px' }}>
      <PtgUiCustomAvatar
        size={40}
        backgroundColor="#ccc"
        textColor="#fff"
      >
        +{groupedImageData.length - 4}
      </PtgUiCustomAvatar>
    </div>
  )}
  `;

  return (
    <section>
      {props?.showCodeAvatarsWithGrouped && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <div
          className="avatar-component"
          style={{ display: 'flex',gap:'0', marginLeft: '10px' }}
        >
          {groupedImageData.slice(0, 4).map((image) => (
            <div key={image.id}>
              <PtgUiCustomAvatar size={40} src={image.src} alt={image.alt} />
            </div>
          ))}
          {groupedImageData.length > 4 && (
            <div>
              <PtgUiCustomAvatar
                size={40}
                backgroundColor="#ccc"
                textColor="#fff"
              >
                +{groupedImageData.length - 4}
              </PtgUiCustomAvatar>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
