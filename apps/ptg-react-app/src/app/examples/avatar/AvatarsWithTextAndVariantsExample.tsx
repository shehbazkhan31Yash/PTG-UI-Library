import React from 'react';
import './AvatarsWithTextAndVariantsExample.css';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { PtgUiCustomAvatar } from '@ptg-ui/react';
import { IAvatarsWithText } from '@ptg-react-app/interfaces';

export default function AvatarsWithTextAndVariantsExample(
  props: Readonly<IAvatarsWithText>
) {
  const avatarData: Array<{
    id: number;
    text: string;
    src: string;
    variant: 'circle' | 'rounded' | 'square';
  }> = [
    {
      id: 1,
      text: 'John Doe',
      src: 'https://randomuser.me/api/portraits/men/1.jpg',
      variant: 'circle',
    },
    {
      id: 2,
      text: 'Jane Smith',
      src: 'https://randomuser.me/api/portraits/women/2.jpg',
      variant: 'rounded',
    },
    {
      id: 3,
      text: 'Alice Brown',
      src: 'https://randomuser.me/api/portraits/women/3.jpg',
      variant: 'square',
    },
  ];

  const componentCode = `
  import { PtgUiCustomAvatar } from '@ptg-ui/react';
  const avatarData = [
    { id: 1, text: 'John Doe', src: 'https://randomuser.me/api/portraits/men/1.jpg', variant: 'circle' },
    { id: 2, text: 'Jane Smith', src: 'https://randomuser.me/api/portraits/women/2.jpg', variant: 'rounded' },
    { id: 3, text: 'Alice Brown', src: 'https://randomuser.me/api/portraits/women/3.jpg', variant: 'square' },
  ];
  `;

  const htmlCode = `
  {avatarData.map((item) => (
    <div key={item.id} className="avatar-with-text-wrapper">
      <PtgUiCustomAvatar
        size={40}
        src={item.src}
        variant={item.variant}
      />
      <span className="avatar-text">{item.text}</span>
    </div>
  ))}
  `;

  return (
    <section>
      {props?.showCodeAvatarsWithText && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <div className="avatar-with-text-component">
          {avatarData.map((item) => (
            <div key={item.id} className="avatar-with-text-wrapper">
              <PtgUiCustomAvatar
                size={40}
                src={item.src}
                variant={item.variant}
              />
              <span className="avatar-text text-white">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
