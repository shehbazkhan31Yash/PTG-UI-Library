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
    isDisable : {
     control: 'boolean',
    },
    isBlock : {
      control:'boolean' 
    },
    backgroundColor: { 
      control: 'color',
      category: 'Colors',
       },
       
    size: {
      options: ['small','medium', 'large'],
      mapping: {
        small: 'small',
        medium: 'medium',
        large:'large',
      },
      description: 'Size options for the button',
      // variant: {
      //   options: ['small','medium', 'large'],
      //   control: { type: 'radio' },
      // },
         
     
      control: {
        type: 'radio',
        labels: {
          small: 'small',
          medium: 'medium',
          large:'large',
        }
      },
    },
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
    type: 'button',
    isDisable: false,
    isBlock: false,
    accessKey: '', 
    
  };


  
  
export const Small = Template.bind({});
  Small.args = {
    type: 'button',
    label: 'Button',
    isDisable: false,
    isBlock: false,
    accessKey: '',
    size: 'small',
  };
  
export const Medium = Template.bind({});
  Medium.args = {
    type: 'button',
    label: 'Button',
    isDisable: false,
    isBlock: false,
    accessKey: '',
    size: 'medium',
  };
  
export const Large = Template.bind({});
  Large.args = {
    type: 'button',
    isDisable: false,
    isBlock: false,
    label: 'Button',
    accessKey: '',
    size: 'large',
  };


  export const isDisable = Template.bind({});
  isDisable.args = {
    type: 'button',
    isDisable: true,
    label: 'Button',
    isBlock: false,
  };


  export const isBlock = Template.bind({});
  isBlock.args = {
    label: 'Button',
    type: 'button',
    isDisable: false,
    isBlock: true,
  };



































