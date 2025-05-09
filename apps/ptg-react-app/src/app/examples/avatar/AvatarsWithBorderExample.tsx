import React from 'react';
import './AvatarsWithBorderExample.css';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { PtgUiCustomAvatar } from '@ptg-ui/react';
import { IAvatarsWithBorder } from '@ptg-react-app/interfaces';

export default function AvatarsWithBorderExample( props: Readonly<IAvatarsWithBorder>) {
  const imageData = [
    {
      id: 1,
      src: 'https://randomuser.me/api/portraits/men/1.jpg',
      alt: 'User Avatar 1',
      borderColor: 'blue',
    },
    {
      id: 2,
      src: 'https://randomuser.me/api/portraits/women/2.jpg',
      alt: 'User Avatar 2',
      borderColor: 'orange',
    },
  ];

  const componentCode = `
  import { PtgUiCustomAvatar } from '@ptg-ui/react';
  const imageData = [
    { id: 1, src: 'https://randomuser.me/api/portraits/men/1.jpg', alt: 'User Avatar 1', borderColor: 'blue' },
    { id: 2, src: 'https://randomuser.me/api/portraits/women/2.jpg', alt: 'User Avatar 2', borderColor: 'orange' },
  ];
  `;

  const htmlCode = `
  {imageData.map((image) => (
    <div key={image.id} className="avatar-border-wrapper" style={{ borderColor: image.borderColor }}>
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
         {props?.showCodeAvatarsWithBorder && (
      <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
         )}
      <div className="mb-3">
        <div className="avatar-border-component">
          {imageData.map((image) => (
            <div
              key={image.id}
              className="avatar-border-wrapper"
              style={{ borderColor: image.borderColor }}
            >
              <PtgUiCustomAvatar size={40} src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
