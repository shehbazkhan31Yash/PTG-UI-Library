import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiModal } from './modal';
import { PtgUiButton } from '../button/button';

export default {
  title: 'Components/Modal',
  component: PtgUiModal,
  argTypes: {
    isOpen: { control: 'boolean' },
    modalSize: { control: 'radio', options: ['sm', 'md', 'lg'] },
    showHeader: { control: 'boolean' },
    header: { control: 'text' },
    showFooter: { control: 'boolean' },
    confirmButton: { control: 'text' },
    cancelButton: { control: 'text' },
    content: { control: 'text' },
    confirmButtonColor: { control: 'color' },
    cancelButtonColor: { control: 'color' },
  },
} as Meta<typeof PtgUiModal>;

const Template: StoryFn<typeof PtgUiModal> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalConfirm = () => {
    alert('Confirmed!');
    setIsOpen(false);
  };

  return (
    <>
      <PtgUiButton
        text="Open Modal"
        onClick={() => setIsOpen(true)}
        textColor="#fff"
        backgroundColor="#007bff"
      />
      <PtgUiModal
        {...args}
        isOpen={isOpen}
        onModalClose={handleModalClose}
        onConfirmed={handleModalConfirm}
      />
    </>
  );
};

// Default Modal Story
export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  modalSize: 'md',
  showHeader: true,
  header: 'Default Modal Header',
  showFooter: true,
  confirmButton: 'Confirm',
  cancelButton: 'Cancel',
  content: 'This is the default modal content.',
  confirmButtonColor: '#2196f3',
  cancelButtonColor: '#dd3434',
};

// Small Modal Story
export const SmallModal = Template.bind({});
SmallModal.args = {
  isOpen: false,
  modalSize: 'sm',
  showHeader: true,
  header: 'Small Modal Header',
  showFooter: true,
  confirmButton: 'Okay',
  cancelButton: 'Close',
  content: 'This modal is smaller in size.',
};

// Large Modal Story
export const LargeModal = Template.bind({});
LargeModal.args = {
  isOpen: false,
  modalSize: 'lg',
  showHeader: true,
  header: 'Large Modal Header',
  showFooter: true,
  confirmButton: 'Save',
  cancelButton: 'Discard',
  content: 'This is a larger modal, suitable for more content.',
};

// Modal Without Footer
export const NoFooterModal = Template.bind({});
NoFooterModal.args = {
  isOpen: false,
  modalSize: 'md',
  showHeader: true,
  header: 'No Footer Modal Header',
  showFooter: false,
  content: 'This modal does not have a footer.',
};

// Modal Without Header
export const NoHeaderModal = Template.bind({});
NoHeaderModal.args = {
  isOpen: false,
  modalSize: 'md',
  showHeader: false,
  showFooter: true,
  confirmButton: 'Proceed',
  cancelButton: 'Go Back',
  content: 'This modal does not have a header.',
};
