import readme from './readme.md';

export default {
  title: 'Design System/Molecules',
  parameters: {
    notes: readme,
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['green', 'orange', 'blue'],
      },
    },
    dark: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = ({ dark, color, droptext }) => {
  const htmlTemplate =
    `<htw-berlin-side-menu dark="` +
    dark +
    `" color="` +
    color +
    `">
      <htw-berlin-link dark="` +
    dark +
    `" color="` +
    color +
    `" variant="side-menu" 
        title="Nothing will happen if you click." 
        href="#"
        >
        System
      </htw-berlin-link>
      <htw-berlin-link dark="` +
    dark +
    `" color="` +
    color +
    `" variant="side-menu" 
        title="Nothing will happen if you click." 
        href="#"
        >
        Articles
      </htw-berlin-link>
      <htw-berlin-link dark="` +
    dark +
    `" color="` +
    color +
    `" variant="side-menu" 
        title="Nothing will happen if you click." 
        href="#"
        >
        Information
      </htw-berlin-link>
      <htw-berlin-link dark="` +
    dark +
    `" color="` +
    color +
    `" variant="side-menu" 
        title="Nothing will happen if you click." 
        href="#"
        >
        Booking Services
      </htw-berlin-link>
    </htw-berlin-side-menu>
  `;

  return htmlTemplate;
};

export const SideMenu = Template.bind({});

SideMenu.args = {
  color: 'green',
  dark: false,
};
