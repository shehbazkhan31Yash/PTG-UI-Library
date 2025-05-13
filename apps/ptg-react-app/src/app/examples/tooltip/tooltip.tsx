import React from 'react'
import PtgUiTooltip from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/tooltip/tooltip';
import { PtgUiButton } from '@ptg-react-libs/button/button';
import {
  BUTTON_VARIANT,
  FONT_SIZE_12,
  POSITIONS,
  WIDTH_110,
} from '@ptg-react-app/constants/Constant';

export default function tooltip() {
  return (
    <div style={{ padding: '20px' }}>
      <PtgUiTooltip content='Hello' placement='top'>
        <PtgUiButton text="Hover me"
                      data-testid="open-button"
                      appearance={BUTTON_VARIANT.PRIMARY}
                      btnIconAlignment={POSITIONS.RIGHT}
                      width={WIDTH_110}
                      fontSize={FONT_SIZE_12}>
        </PtgUiButton>
      </PtgUiTooltip>
    </div>
  )
}
