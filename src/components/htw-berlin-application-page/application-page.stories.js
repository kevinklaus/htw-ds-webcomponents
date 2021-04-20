import readme from './readme.md';
import exampleImg from '../../../dist/collection/global/exampleUser.jpg';

export default {
  title: 'Design System/Templates/Application Page',
  parameters: {
    notes: readme,
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3G68UamepjyuhaTgi6knvD/HTW-Berlin-Design-System?node-id=194%3A1703',
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
  },
};

const Template = ({ dark, color }) => {
  const htmlTemplate =
    `<htw-berlin-top-menu color="` +
    color +
    `" dark="` +
    dark +
    `">

  <htw-berlin-link slot="links" dark="` +
    dark +
    `" color="` +
    color +
    `"  
  title="Nothing will happen if you click." 
  href="#"
  >
      Start
  </htw-berlin-link>
  <htw-berlin-link slot="links" dark="` +
    dark +
    `" color="` +
    color +
    `"  
  title="Nothing will happen if you click." 
  href="#"
  >
      Members
  </htw-berlin-link>
  <htw-berlin-link slot="links" dark="` +
    dark +
    `" color="` +
    color +
    `"  
  title="Nothing will happen if you click." 
  href="#"
  >
      Control Center
  </htw-berlin-link>
  <htw-berlin-link slot="links" dark="` +
    dark +
    `" color="` +
    color +
    `"  
  title="Nothing will happen if you click." 
  href="#"
  >
      System
  </htw-berlin-link>

  <htw-berlin-dropdown slot="dropdown" topmenu="true" 
    droptext="My Functions" dark="` +
    dark +
    `" color="` +
    color +
    `"
  >
    <htw-berlin-link variant="dropdown" dark="` +
    dark +
    `" color="` +
    color +
    `" 
        title="Nothing will happen if you click." 
        href="#"
        >
        My Profile
    </htw-berlin-link>
    <htw-berlin-link variant="dropdown" dark="` +
    dark +
    `" color="` +
    color +
    `" 
        title="Nothing will happen if you click." 
        href="#"
        >
        Member Accounts
    </htw-berlin-link>
    <htw-berlin-link variant="dropdown" dark="` +
    dark +
    `" color="` +
    color +
    `" 
        title="Nothing will happen if you click." 
        href="#"
        >
        Settings
    </htw-berlin-link>
  </htw-berlin-dropdown>

  <htw-berlin-avatar slot="avatar" 
    link="javascript:void(0)" 
      src="` +
    exampleImg +
    `" 
    fullname="Example Student" 
    size="s">
  </htw-berlin-avatar>

</htw-berlin-top-menu>

<div class="app-area">
  <htw-berlin-content-box dark="` +
    dark +
    `">

      <htw-berlin-breadcrumb>
          <htw-berlin-link dark="` +
    dark +
    `" color="` +
    color +
    `"
          variant="breadcrumb"
          state="visited"
          title="Nothing will happen if you click." 
          href="#">
          Home
          </htw-berlin-link>
          <htw-berlin-link dark="` +
    dark +
    `" color="` +
    color +
    `"
          variant="breadcrumb"
          title="Nothing will happen if you click." 
          href="#">
          Fachbereich 4
          </htw-berlin-link>
          <htw-berlin-link dark="` +
    dark +
    `" color="` +
    color +
    `"
          variant="breadcrumb"
          state="active"
          title="Nothing will happen if you click." 
          href="#">
          Internationaler Studiengang Medieninformatik (B)
          </htw-berlin-link>  
      </htw-berlin-breadcrumb>



      <htw-berlin-content-box variant="secondary">

      <div class="m10 mb20">
        <htw-berlin-typography tag="h2" color="` +
    color +
    `" fontstyle="bold">
          Important Features
        </htw-berlin-typography>
      </div>
      <div class="m10 mb20">
        <htw-berlin-typography tag="p" color="copy" dark="` +
    dark +
    `" fontstyle="italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </htw-berlin-typography>
      </div>
      <div class="m10 mb20">
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
      </div>
    </htw-berlin-content-box>
  </htw-berlin-content-box>
</div>
    
<htw-berlin-chat dark="` +
    dark +
    `" color="` +
    color +
    `" fullname="Betra Dons">

    <htw-berlin-avatar slot="avatar" 
    src="https://images.unsplash.com/photo-1549853230-b66d322703fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" 
    fullname="Betra Dons">
    </htw-berlin-avatar>

    <htw-berlin-chat-bubble slot="messages" received="true" dark="` +
    dark +
    `">Hi there Kevin!</htw-berlin-chat-bubble>
    <htw-berlin-chat-bubble slot="messages" received="true" dark="` +
    dark +
    `">Hi there Betra! How are you doing? It's been quite a while since we saw each other!</htw-berlin-chat-bubble>
    <htw-berlin-chat-bubble slot="messages" dark="` +
    dark +
    `">Hi there Kevin!</htw-berlin-chat-bubble>
    <htw-berlin-chat-bubble slot="messages" dark="` +
    dark +
    `">Hi there Betra! How are you doing? It's been quite a while since we saw each other!</htw-berlin-chat-bubble>
    <htw-berlin-chat-bubble slot="messages" received="true" dark="` +
    dark +
    `">Hi there Kevin!</htw-berlin-chat-bubble>
    <htw-berlin-chat-bubble slot="messages" dark="` +
    dark +
    `">Hi there Betra! How are you doing? It's been quite a while since we saw each other!</htw-berlin-chat-bubble>  

</htw-berlin-chat>
 <style>
    .app-area {
      padding-top: 62px;
    }
    .m10 {
      margin: 10px;
    }
    .mb20 {
      margin-bottom: 20px;
    }
</style>`;
  return htmlTemplate;
};

export const ApplicationPage = Template.bind({});

ApplicationPage.args = {
  color: 'green',
  dark: false,
};
