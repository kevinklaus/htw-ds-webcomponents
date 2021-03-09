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

const Template = ({ dark, color }) => {
  const htmlTemplate =
    `
    <htw-berlin-breadcrumb>
      <htw-berlin-link dark="` +
    dark +
    `" color="` +
    color +
    `" variant="breadcrumb" state="visited" title="Nothing will happen if you click." href="#">
        Home
      </htw-berlin-link>
      <htw-berlin-link dark="` +
    dark +
    `" color="` +
    color +
    `" variant="breadcrumb" title="Nothing will happen if you click." href="#">
        Fachbereich 4
      </htw-berlin-link>
      <htw-berlin-link dark="` +
    dark +
    `" color="` +
    color +
    `" variant="breadcrumb" state="active" title="Nothing will happen if you click." href="#">
        Internationaler Studiengang Medieninformatik (B)
      </htw-berlin-link>
    </htw-berlin-breadcrumb>
  `;
  return htmlTemplate;
};

export const Breadcrumb = Template.bind({});

Breadcrumb.args = {
  color: 'green',
  dark: false,
};
