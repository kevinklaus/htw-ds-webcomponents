import readme from './readme.md';
import exampleImg from '../../../dist/collection/global/exampleUser.jpg';

export default {
  title: 'Design System/Atoms/Avatar',
  parameters: {
    notes: readme,
    backgrounds: { default: 'light' },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3G68UamepjyuhaTgi6knvD/HTW-Berlin-Design-System?node-id=194%3A839',
    },
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['s', 'm', 'l'],
      },
    },
    src: {
      control: {
        type: 'text',
      },
    },
    link: {
      control: {
        type: 'text',
      },
    },
    fullname: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ link, size, src, fullname }) => {
  const htmlTemplate = `<htw-berlin-avatar link="` + link + `" src="` + src + `" fullname="` + fullname + `" size="` + size + `"></htw-berlin-avatar>`;
  return htmlTemplate;
};

export const Avatar = Template.bind({});

Avatar.args = {
  size: 'l',
  src: exampleImg,
  link: 'javascript:void(0)',
  fullname: 'Example User',
};

export const Empty = Template.bind({});

Empty.args = {
  size: 's',
  src: 'undefined',
  link: 'javascript:void(0)',
  fullname: 'Example User',
};
