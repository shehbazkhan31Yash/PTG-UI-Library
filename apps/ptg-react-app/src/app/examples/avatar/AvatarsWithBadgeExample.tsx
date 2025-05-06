import React from 'react';
import './AvatarsWithBadgeExample.css';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { PtgUiCustomAvatar } from '@ptg-ui/react';
import { IAvatarsWithBadge } from '@ptg-react-app/interfaces';

export default function AvatarsWithBadgeExample(
  props: Readonly<IAvatarsWithBadge>
) {
  const imageData = [
    {
      id: 1,
      src: 'https://randomuser.me/api/portraits/men/1.jpg',
      alt: 'User Avatar 1',
      status: 'online',
      badgePosition: 'top-right',
    },
    {
      id: 2,
      src: 'https://randomuser.me/api/portraits/women/2.jpg',
      alt: 'User Avatar 2',
      status: 'offline',
      badgePosition: 'bottom-right',
    },
  ];

  const componentCode = `
  import { PtgUiCustomAvatar } from '@ptg-ui/react';
  const imageData = [
    { id: 1, src: 'https://randomuser.me/api/portraits/men/1.jpg', alt: 'User Avatar 1', status: 'online', badgePosition: 'top-right' },
    { id: 2, src: 'https://randomuser.me/api/portraits/women/2.jpg', alt: 'User Avatar 2', status: 'offline', badgePosition: 'bottom-right' },
  ];
  `;

  const htmlCode = `
  {imageData.map((image) => (
    <div key={image.id} className="avatar-wrapper">
      <PtgUiCustomAvatar
        size={40}
        src={image.src}
        alt={image.alt}
      />
      <span
        className={\`status-badge \${image.badgePosition} \${image.status === 'online' ? 'online' : 'offline'}\`}
      ></span>
    </div>
  ))}
  `;

  return (
    <section>
      {props?.showCodeAvatarsWithBadge && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <div className="avatar-component">
          {imageData.map((image) => (
            <div key={image.id} className="avatar-wrapper">
              <PtgUiCustomAvatar size={40} src={image.src} alt={image.alt} />
              <span
                className={`status-badge ${image.badgePosition} ${
                  image.status === 'online' ? 'online' : 'offline'
                }`}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
