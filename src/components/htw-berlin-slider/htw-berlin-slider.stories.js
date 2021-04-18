import readme from './readme.md';
import exampleImg from '../../../dist/collection/global/exampleUser.jpg';

export default {
  title: 'Design System/Organisms/Slider',
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
    showStatus: {
      control: {
        type: 'boolean',
      },
    },
    exampleContent: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = ({ dark, color, showStatus, exampleContent }) => {
  var slideHtml = `
    <li>
      Slide 1
    </li>      
    <li>
      Slide 2
    </li>
    <li>        
      Slide 3
    </li>
    <li>        
      Slide 4
    </li>`;

  if (exampleContent) {
    slideHtml =
      `<li>
        <htw-berlin-typography tag="h1" dark="` +
      dark +
      `" color="` +
      color +
      `">
            Example Slide 1
          </htw-berlin-typography>
          <htw-berlin-table dark="` +
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
        </li>
        <li>
          <htw-berlin-typography tag="h1" dark="` +
      dark +
      `" color="` +
      color +
      `">
            Example Slide 2
          </htw-berlin-typography>
          <htw-berlin-avatar size="l" src="` +
      exampleImg +
      `"></htw-berlin-avatar>
        </li>
         <li>
          <htw-berlin-typography tag="h1" dark="` +
      dark +
      `" color="` +
      color +
      `">
            Example Slide 3
          </htw-berlin-typography>
          <htw-berlin-typography tag="p" color="copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis ligula eget massa faucibus bibendum. Nam in enim et sapien dapibus dapibus ac vel arcu. Aliquam urna arcu, consequat vitae euismod a, vulputate vel lectus. In ut porta urna, nec imperdiet massa. Quisque euismod mi vel eros convallis molestie. Sed vitae ligula massa. Nulla malesuada sollicitudin dapibus. Integer ornare tempor lectus sit amet commodo. Sed maximus turpis arcu, non interdum tortor sagittis at. Aenean pellentesque nulla eu condimentum sodales. Aliquam nec felis quis velit semper congue eu eu odio.

            Duis eu ligula rhoncus, tincidunt quam sit amet, varius massa. Sed feugiat felis at lectus consequat egestas. Sed vulputate, nulla quis tempor varius, felis tortor fermentum erat, eget aliquet mauris purus sed dui. Nulla euismod nisl eu augue cursus, at venenatis dui malesuada. Ut dignissim quam sed interdum ultricies. Morbi placerat quam eget arcu pellentesque sagittis. Fusce justo mi, rutrum vitae eros id, egestas eleifend eros. Aenean turpis risus, hendrerit sit amet magna sit amet, aliquet interdum lectus. Nam tempus, libero eget ornare cursus, massa erat gravida nisi, ac pharetra mi tortor ac ante. Maecenas eu dapibus mi. Quisque leo sem, ultrices eu commodo in, mattis a libero. 
          </htw-berlin-typography>
        </li>`;
  }

  var htmlTemplate =
    `<htw-berlin-slider show-status="` +
    showStatus +
    `"
    dark="` +
    dark +
    `" color="` +
    color +
    `">
      ` +
    slideHtml +
    `
    </htw-berlin-slider>`;

  return htmlTemplate;
};

export const Standard = Template.bind({});

Standard.args = {
  color: 'green',
  dark: false,
  showStatus: true,
  exampleContent: false,
};

export const WithContent = Template.bind({});

WithContent.args = {
  color: 'green',
  dark: false,
  showStatus: true,
  exampleContent: true,
};

export const WithContentDarkOrange = Template.bind({});

WithContentDarkOrange.args = {
  color: 'orange',
  dark: true,
  showStatus: true,
  exampleContent: true,
};
