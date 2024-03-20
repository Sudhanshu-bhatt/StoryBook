import React from 'react';
import { action } from '@storybook/addon-actions';
import ActionButton from './ActionButton';


export default {
  title: 'Action Button',
  component: ActionButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ActionButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Action',
  icon: '',
  displayType: 'Text only',
  size: 'Default',
  status: 'Default',
  disabled: false,
  onClick: action('Button clicked'),
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Action',
  icon: '',
  displayType: 'Icon with text',
  size: 'Default',
  status: 'Default',
  disabled: false,
  onClick: action('Button clicked'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Action',
  icon: '',
  displayType: 'Text only',
  size: 'Default',
  status: 'Disabled',
  disabled: true,
  onClick: action('Button clicked'),
};

