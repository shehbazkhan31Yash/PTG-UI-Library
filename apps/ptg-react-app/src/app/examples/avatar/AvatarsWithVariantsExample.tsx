import React from 'react';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { PtgUiCustomAvatar } from '@ptg-ui/react';
import { IAvatarsWithVariants } from '@ptg-react-app/interfaces';
import HomeIcon from '@mui/icons-material/Home';

export default function AvatarsWithVariantsExample(
  props: Readonly<IAvatarsWithVariants>
) {
  const iconData = [{ id: 1, icon: <HomeIcon />, backgroundColor: '#1976d2' }];

  const variants: Array<'square' | 'rounded' | 'circle'> = [
    'square',
    'rounded',
    'circle',
  ];

  const componentCode = `
  import { PtgUiCustomAvatar } from '@ptg-ui/react';
  import HomeIcon from '@mui/icons-material/Home';
  import PersonIcon from '@mui/icons-material/Person';
  import SettingsIcon from '@mui/icons-material/Settings';
  import EmailIcon from '@mui/icons-material/Email';

  const iconData = [
    { id: 1, icon: <HomeIcon />, backgroundColor: '#1976d2' },
  ];

  const variants = ['square', 'rounded', 'circle'];
  `;

  const htmlCode = `
  {variants.map((variant) => (
    <div key={variant} style={{ marginBottom: '10px' }}>
      <h4 style={{marginLeft:"10px" }}>{variant.charAt(0).toUpperCase() + variant.slice(1)} Variant</h4>
      <div style={{ display: 'flex', gap: '5px' }}>
        {iconData.map((iconItem) => (
          <div key={iconItem.id} style={{ margin: '10px' }}>
            <PtgUiCustomAvatar
              size={40}
              backgroundColor={iconItem.backgroundColor}
              variant={variant}
            >
              {iconItem.icon}
            </PtgUiCustomAvatar>
          </div>
        ))}
      </div>
    </div>
  ))}
  `;

  return (
    <section>
      {props?.showCodeAvatarsWithVariants && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        {variants.map((variant) => (
          <div key={variant} style={{ marginBottom: '10px' }}>
            <h4 style={{ marginLeft: '10px' }}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant
            </h4>
            <div style={{ display: 'flex', gap: '5px' }}>
              {iconData.map((iconItem) => (
                <div key={iconItem.id} style={{ margin: '10px' }}>
                  <PtgUiCustomAvatar
                    size={40}
                    backgroundColor={iconItem.backgroundColor}
                    variant={variant}
                  >
                    {iconItem.icon}
                  </PtgUiCustomAvatar>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
