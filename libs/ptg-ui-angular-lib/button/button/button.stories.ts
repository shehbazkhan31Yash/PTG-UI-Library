import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';


export default {
  title: 'Component/ButtonComponent',
  component: ButtonComponent,
  parameters: {
    backgroundColor: {
      default: 'red',
      values: [
        { name: 'red', value: '#00aced' },
        { name: 'facebook', value: '#3b5998' },
      ],
    },
  },
  argTypes: {
    isDisable: {
      control: 'boolean',
      description: 'Whether the button is disabled or not',
    },
    isBlock: {
      control: 'boolean',
      description: 'Whether the button should take up the full width of its container',
    },
    size: {
      options: ['small', 'medium', 'large'],
      mapping: {
        small: 'small',
        medium: 'medium',
        large: 'large',
      },
      description: 'Size options for the button',
    },
    btnStyleType: {
      options: ['primary', 'secondary', 'warning', 'success', 'danger', 'light', 'dark', 'info'],
      mapping: {
        primary: 'primary',
        secondary: 'secondary',
        warning: 'warning',
        success: 'success',
        light: 'light',
        dark: 'dark',
        info: 'info',
      },
      description: 'Button style options',
    },
    type:{
      control: 'text',
      options: ['button', 'submit', 'resect'],
      mapping: {
        button: 'button',
        submit:'submit',
        reset:'reset',
      },
      description: 'Type of button',
    }

  },
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  component: ButtonComponent,
});


export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  btnStyleType: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  btnStyleType: 'secondary',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Button',
    btnStyleType: 'warning',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Button',
  btnStyleType: 'success',
};

export const Light = Template.bind({});
Light.args = {
  label: 'Button',
  btnStyleType: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'Button',
  btnStyleType: 'dark',
};


export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  btnStyleType: 'danger',
};

export const Info = Template.bind({});
Info.args = {
  label: 'Button',
  btnStyleType: 'info',
};


export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Button',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  size: 'large',
};


export const isDisable = Template.bind({});
isDisable.args = {
  isDisable: true,
  label: 'Button',
};


export const isBlock = Template.bind({});
isBlock.args = {
  label: 'Button',
  isBlock: true,
};



































