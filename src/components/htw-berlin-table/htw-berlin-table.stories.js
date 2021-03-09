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
    `<htw-berlin-table dark="` +
    dark +
    `" color="` +
    color +
    `">
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table>
    </htw-berlin-table>
  `;

  return htmlTemplate;
};

export const Table = Template.bind({});

Table.args = {
  color: 'green',
  dark: false,
};
