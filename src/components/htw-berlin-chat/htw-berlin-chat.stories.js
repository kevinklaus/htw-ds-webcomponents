import readme from './readme.md';
import exampleImg from '../../../dist/collection/global/exampleUser.jpg';

export default {
  title: 'Design System/Organisms/Chat',
  parameters: {
    notes: readme,
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
    avatarSrc: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ dark, color, avatarSrc }) => {
  const htmlTemplate =
    `
      <htw-berlin-chat dark="` +
    dark +
    `" color="` +
    color +
    `" fullname="Betra Dons">
        <htw-berlin-avatar slot="avatar" src="` +
    avatarSrc +
    `" fullname="Betra Dons"></htw-berlin-avatar>
        <htw-berlin-chat-bubble slot="messages" received="true" dark="` +
    dark +
    `">
          Hi there, Kevin!
        </htw-berlin-chat-bubble>
        <htw-berlin-chat-bubble slot="messages" received="false" dark="` +
    dark +
    `">
          Hi there Betra! How are you doing? It's been quite a while since we saw each other!
        </htw-berlin-chat-bubble>
        <htw-berlin-chat-bubble slot="messages" received="true" dark="` +
    dark +
    `">
          Yeah right, we're long overdue! I've been good.  Let's go for a coffee together soon. 
        </htw-berlin-chat-bubble>
        <htw-berlin-chat-bubble slot="messages" dark="` +
    dark +
    `">
          Absolutely! I'm free next week.
        </htw-berlin-chat-bubble>
        <htw-berlin-chat-bubble slot="messages" received="true" dark="` +
    dark +
    `">
          Perfect, let's go to St Andras new breakfst restaurant? I've been wanting to go since we saw eachother last May at the cinema.
        </htw-berlin-chat-bubble>
        <htw-berlin-chat-bubble slot="messages" dark="` +
    dark +
    `">
          Great idea! I'll check in with you again.
        </htw-berlin-chat-bubble>
      </htw-berlin-chat>`;
  return htmlTemplate;
};

export const Chat = Template.bind({});

Chat.args = {
  color: 'green',
  dark: false,
  avatarSrc: exampleImg,
};
