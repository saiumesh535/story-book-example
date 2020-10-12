import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, Props } from './Button';

export default {
  title: 'Custom/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonText: 'Primary Button',
  backgroundColor: 'blue'
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonText: 'Secondary Button',
  backgroundColor: 'white'
};

export const Large = Template.bind({});
Large.args = {
  buttonText: 'Large Button',
  backgroundColor: 'blue'
};

export const Small = Template.bind({});
Small.args = {
  buttonText: 'Small Button',
  backgroundColor: 'blue'
};
