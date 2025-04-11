import { Meta, StoryFn } from '@storybook/react';
import { PtgUiModal } from './modal';
import { PtgUiModalProps } from '@ptg-react-libs/interfaces';

export default {
    title: 'Components/Modal',
    component: PtgUiModal,
    argTypes: {
        isOpen: { control: 'boolean' },
        modalSize: { control: { type: 'select', options: ['sm', 'md', 'lg'] } },
        showHeader: { control: 'boolean' },
        showFooter: { control: 'boolean' },
        confirmButton: { control: 'text' },
        cancelButton: { control: 'text' },
        backdropClick: { control: 'boolean' },
        content: { control: 'text' },
        confirmButtonColor: { control: 'color' },
        cancelButtonColor: { control: 'color' },
    },
} as Meta;

const Template: StoryFn<PtgUiModalProps> = (args) => <PtgUiModal {...args} />;

export const Default = Template.bind({});
Default.args = {
    isOpen: true,
    modalSize: 'md',
    showHeader: true,
    header: 'Default Modal Header',
    showFooter: true,
    confirmButton: 'Confirm',
    cancelButton: 'Cancel',
    backdropClick: true,
    content: 'This is the default content of the modal.',
    confirmButtonColor: '#2196f3',
    cancelButtonColor: '#dd3434',
};

export const WithoutHeader = Template.bind({});
WithoutHeader.args = {
    isOpen: true,
    modalSize: 'md',
    showHeader: false,
    showFooter: true,
    confirmButton: 'Confirm',
    cancelButton: 'Cancel',
    backdropClick: true,
    content: 'This modal does not have a header.',
};

export const CustomFooter = Template.bind({});
CustomFooter.args = {
    isOpen: true,
    modalSize: 'lg',
    showHeader: true,
    header: 'Custom Footer Modal',
    showFooter: true,
    confirmButton: 'Proceed',
    cancelButton: 'Dismiss',
    backdropClick: true,
    content: 'This modal has a custom footer.',
};

export const ClosedModal = Template.bind({});
ClosedModal.args = {
    isOpen: false,
    modalSize: 'md',
    showHeader: true,
    header: 'Closed Modal',
    showFooter: true,
    confirmButton: 'Confirm',
    cancelButton: 'Cancel',
    backdropClick: true,
    content: 'This modal is closed and should not be visible.',
};