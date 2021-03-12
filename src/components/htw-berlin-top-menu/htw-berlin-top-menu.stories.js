import readme from './readme.md';

export default {
  title: 'Design System/Molecules/Top Menu',
  parameters: {
    notes: readme,
    backgrounds: { default: 'light' },
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3G68UamepjyuhaTgi6knvD/HTW-Berlin-Design-System?node-id=194%3A839',
    },
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
    logo: {
      control: {
        type: 'boolean',
      },
    },
    shouldscroll: {
      control: {
        type: 'boolean',
      },
    },
    dropdown: {
      control: {
        type: 'boolean',
      },
    },
    avatar: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = ({ dark, color, logo, shouldscroll, avatar, dropdown }) => {
  var htmlTemplate =
    `<htw-berlin-top-menu logo="` +
    logo +
    `"
     shouldscroll="` +
    shouldscroll +
    `"
    dark="` +
    dark +
    `" color="` +
    color +
    `">
    <htw-berlin-link slot="links" dark="` +
    dark +
    `" color="` +
    color +
    `"
        title="Nothing will happen if you click." 
        href="#">
        Home
      </htw-berlin-link>
      <htw-berlin-link slot="links" dark="` +
    dark +
    `" color="` +
    color +
    `"
        title="Nothing will happen if you click." 
        href="#"
        >
        Profile
      </htw-berlin-link>
      <htw-berlin-link slot="links" dark="` +
    dark +
    `" color="` +
    color +
    `"
        title="Nothing will happen if you click." 
        href="#"
        >
        Team
      </htw-berlin-link>
      <htw-berlin-link slot="links" dark="` +
    dark +
    `" color="` +
    color +
    `"
        title="Nothing will happen if you click." 
        href="#"
        >
        Documentation
      </htw-berlin-link>`;

  if (avatar) {
    const avatarHtml = `<htw-berlin-avatar slot="avatar" 
      link="https://www.w3schools.com/css/paris.jpg" 
      src="https://www.w3schools.com/css/paris.jpg" 
      fullname="Example Student" 
      size="s">
    </htw-berlin-avatar>`;
    htmlTemplate += avatarHtml;
  }

  if (dropdown) {
    const dropdownHtml =
      `<htw-berlin-dropdown 
        slot="dropdown" 
        dark="` +
      dark +
      `" color="` +
      color +
      `" 
        topmenu="true" 
        droptext="Settings">
        <htw-berlin-link dark="` +
      dark +
      `" color="` +
      color +
      `" variant="dropdown" 
          title="Nothing will happen if you click." 
          href="#"
          >
          Functions
        </htw-berlin-link>
        <htw-berlin-link dark="` +
      dark +
      `" color="` +
      color +
      `" variant="dropdown" 
          title="Nothing will happen if you click." 
          href="#"
          >
          Controls
        </htw-berlin-link>
        <htw-berlin-link dark="` +
      dark +
      `" color="` +
      color +
      `" variant="dropdown" 
          title="Nothing will happen if you click." 
          href="#"
          >
          System Settings
        </htw-berlin-link>
        <htw-berlin-link dark="` +
      dark +
      `" color="` +
      color +
      `" variant="dropdown" 
          title="Nothing will happen if you click." 
          href="#"
          >
          Database
        </htw-berlin-link>
      </htw-berlin-dropdown>`;
    htmlTemplate += dropdownHtml;
  }

  return htmlTemplate + `</htw-berlin-top-menu>`;
};

export const Standard = Template.bind({});

Standard.args = {
  color: 'green',
  dark: false,
  shouldscroll: false,
  logo: true,
  dropdown: false,
  avatar: false,
};

export const ExtendedStandard = Template.bind({});

ExtendedStandard.args = {
  color: 'green',
  dark: false,
  shouldscroll: false,
  logo: true,
  dropdown: true,
  avatar: true,
};

export const DarkOrangeDropdown = Template.bind({});

DarkOrangeDropdown.args = {
  color: 'orange',
  dark: true,
  shouldscroll: false,
  logo: true,
  dropdown: true,
  avatar: false,
};

export const BlueAvatar = Template.bind({});

BlueAvatar.args = {
  color: 'blue',
  dark: false,
  shouldscroll: false,
  logo: false,
  dropdown: false,
  avatar: true,
};
