import { Story } from '@storybook/react/types-6-0';

import StatusIndicator, { StatusIndicatorProps } from './StatusIndicator';

export default {
  component: StatusIndicator,
  title: 'Components/StatusIndicator',
  parameters: {
    componentSubtitle: 'Short description of component.',
  },
}

const Template: Story<StatusIndicatorProps> = (args) => (
  <StatusIndicator {...args} />
);

export const Error = Template.bind({});

Error.args = {
  type: "Error"
};

export const Warning = Template.bind({});

Warning.args = {
  type: "Warning"
};

export const Success = Template.bind({});

Success.args = {
  type: "Success"
};

export const Information = Template.bind({});

Information.args = {
  type: "Information"
};

export const ActiveProcess = Template.bind({});

ActiveProcess.args = {
  type: "Active Process"
};

export const InactiveProcess = Template.bind({});

InactiveProcess.args = {
  type: "Inactive Process"
};
