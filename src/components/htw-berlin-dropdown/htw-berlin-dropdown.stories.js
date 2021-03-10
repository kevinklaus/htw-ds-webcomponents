import readme from './readme.md';

export default {
  title: 'Design System/Molecules/Dropdown Menu',
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
    droptext: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ dark, color, droptext }) => {
  const htmlTemplate =
    `
      <htw-berlin-dropdown dark="` +
    dark +
    `" color="` +
    color +
    `" droptext="` +
    droptext +
    `">
        <htw-berlin-link dark="` +
    dark +
    `" color="` +
    color +
    `" variant="dropdown" title="Nothing will happen if you click." href="#">
          Meine Funktionen
        </htw-berlin-link>
        <htw-berlin-link dark="` +
    dark +
    `" color="` +
    color +
    `" variant="dropdown" title="Nothing will happen if you click." href="#">
          Meine Einstellungen
        </htw-berlin-link>
        <htw-berlin-link dark="` +
    dark +
    `" color="` +
    color +
    `" variant="dropdown" title="Nothing will happen if you click." href="#">
          Team Verwaltung
        </htw-berlin-link>
        <htw-berlin-link dark="` +
    dark +
    `" color="` +
    color +
    `" variant="dropdown" title="Nothing will happen if you click." href="#">
          System Einstellungen
        </htw-berlin-link>
      </htw-berlin-dropdown>`;

  return htmlTemplate;
};

export const DropdownMenu = Template.bind({});

DropdownMenu.args = {
  color: 'green',
  dark: false,
  droptext: 'Dropdown',
};
