/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface HtwBerlinAvatar {
        /**
          * set full name of user
         */
        "fullname": string;
        /**
          * set link for avatar
         */
        "link": string;
        /**
          * render avatar in different sizes
         */
        "size": 's' | 'm' | 'l';
        /**
          * set true for squared avatar
         */
        "squared": boolean;
        /**
          * set source of image
         */
        "src": string;
    }
    interface HtwBerlinBreadcrumb {
    }
    interface HtwBerlinButton {
        /**
          * alternative title
         */
        "altTitle": string;
        /**
          * button color
         */
        "color": 'green' | 'orange' | 'blue' | 'disabled';
        /**
          * set true to use dark mode styling
         */
        "dark": boolean;
        /**
          * href property
         */
        "href": string;
        /**
          * button type, default is anker <a>
         */
        "type": 'default' | 'submit';
        /**
          * button variant
         */
        "variant": 'filled' | 'outlined' | 'text';
    }
    interface HtwBerlinChat {
        /**
          * color scheme of chat
         */
        "color": 'green' | 'orange' | 'blue';
        /**
          * use dark mode if true
         */
        "dark": boolean;
        /**
          * full name of user or group name
         */
        "fullname": string;
    }
    interface HtwBerlinChatBubble {
        /**
          * use dark mode if true
         */
        "dark": boolean;
        /**
          * set date and time of message
         */
        "datetime": string;
        /**
          * full name of user or group name
         */
        "fullname": string;
        /**
          * set true if this is a received message
         */
        "received": boolean;
    }
    interface HtwBerlinContentBox {
        /**
          * pick color to apply to content when variant='color'
         */
        "color": 'green' | 'orange' | 'blue';
        /**
          * set true to apply dark mode
         */
        "dark": boolean;
        /**
          * set style to apply to the content box
         */
        "variant": 'default' | 'color' | 'secondary';
    }
    interface HtwBerlinDropdown {
        /**
          * color scheme
         */
        "color": 'green' | 'orange' | 'blue' | 'disabled';
        /**
          * use dark mode if true
         */
        "dark": boolean;
        /**
          * set the dropdown link text
         */
        "droptext": string;
        /**
          * use top-menu styling if true
         */
        "topmenu": boolean;
    }
    interface HtwBerlinInput {
        /**
          * alternative title shown on hover
         */
        "altTitle": string;
        /**
          * color applied to the input field
         */
        "color": 'green' | 'orange' | 'blue';
        /**
          * use dark color theme if true
         */
        "dark": boolean;
        /**
          * id of input field
         */
        "elementId": string;
        /**
          * label text to be displayed above input field
         */
        "label": string;
        /**
          * name of input field
         */
        "name": string;
        /**
          * placeholder text to be displayed in input
         */
        "placeholder": string;
        /**
          * set the state of the input field
         */
        "state": 'normal' | 'active' | 'disabled';
        /**
          * set the [Input type](https://www.w3schools.com/html/html_form_input_types.asp)
         */
        "type": string;
    }
    interface HtwBerlinLink {
        /**
          * alternative title
         */
        "altTitle": string;
        /**
          * link color
         */
        "color": 'green' | 'orange' | 'blue' | 'disabled';
        /**
          * use dark mode if true
         */
        "dark": boolean;
        /**
          * href property
         */
        "href": string;
        /**
          * set link state if neccessary
         */
        "state": 'default' | 'active' | 'visited';
        /**
          * use breadcrumb, dropdown or side-menu styling if neccessary
         */
        "variant": 'default' | 'side-menu' | 'breadcrumb' | 'dropdown';
    }
    interface HtwBerlinLogin {
        /**
          * color scheme of login
         */
        "color": 'green' | 'orange' | 'blue';
        /**
          * use dark mode if true
         */
        "dark": boolean;
    }
    interface HtwBerlinLogo {
        /**
          * alternative title for the link wrapper
         */
        "altTitle": string;
        /**
          * color scheme
         */
        "color": 'green' | 'orange' | 'blue';
        /**
          * use dark mode if true
         */
        "dark": boolean;
        /**
          * set href property to add a link wrapper to the logo
         */
        "href": string;
        /**
          * render logo in different sizes
         */
        "size": 's' | 'm' | 'l';
    }
    interface HtwBerlinSideMenu {
        /**
          * use dark mode if true
         */
        "dark": boolean;
    }
    interface HtwBerlinSlider {
        /**
          * color scheme of wizard
         */
        "color": 'green' | 'orange' | 'blue';
        /**
          * use dark mode if true
         */
        "dark": boolean;
        /**
          * display the slide status/numbers (e.g. Slide 2/5)
         */
        "showStatus": boolean;
    }
    interface HtwBerlinTable {
        /**
          * color scheme of table
         */
        "color": 'green' | 'orange' | 'blue';
        /**
          * use dark mode if true
         */
        "dark": boolean;
    }
    interface HtwBerlinTopMenu {
        /**
          * color scheme of menu
         */
        "color": 'green' | 'orange' | 'blue';
        /**
          * use dark mode if true
         */
        "dark": boolean;
        /**
          * set to false to hide htw logo
         */
        "logo": boolean;
        /**
          * Menu fixed at top by default. Set true to scroll with content
         */
        "shouldscroll": boolean;
    }
    interface HtwBerlinTypography {
        /**
          * link color
         */
        "color": 'copy' | 'green' | 'orange' | 'blue' | 'grey';
        /**
          * use dark mode if true - reverses copy color to white
         */
        "dark": boolean;
        /**
          * specify the font-style of the typogrphy element
         */
        "fontstyle": 'normal' | 'bold' | 'italic' | 'bolditalic';
        /**
          * specify the html tag of the typogrphy element
         */
        "tag": 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span';
    }
}
declare global {
    interface HTMLHtwBerlinAvatarElement extends Components.HtwBerlinAvatar, HTMLStencilElement {
    }
    var HTMLHtwBerlinAvatarElement: {
        prototype: HTMLHtwBerlinAvatarElement;
        new (): HTMLHtwBerlinAvatarElement;
    };
    interface HTMLHtwBerlinBreadcrumbElement extends Components.HtwBerlinBreadcrumb, HTMLStencilElement {
    }
    var HTMLHtwBerlinBreadcrumbElement: {
        prototype: HTMLHtwBerlinBreadcrumbElement;
        new (): HTMLHtwBerlinBreadcrumbElement;
    };
    interface HTMLHtwBerlinButtonElement extends Components.HtwBerlinButton, HTMLStencilElement {
    }
    var HTMLHtwBerlinButtonElement: {
        prototype: HTMLHtwBerlinButtonElement;
        new (): HTMLHtwBerlinButtonElement;
    };
    interface HTMLHtwBerlinChatElement extends Components.HtwBerlinChat, HTMLStencilElement {
    }
    var HTMLHtwBerlinChatElement: {
        prototype: HTMLHtwBerlinChatElement;
        new (): HTMLHtwBerlinChatElement;
    };
    interface HTMLHtwBerlinChatBubbleElement extends Components.HtwBerlinChatBubble, HTMLStencilElement {
    }
    var HTMLHtwBerlinChatBubbleElement: {
        prototype: HTMLHtwBerlinChatBubbleElement;
        new (): HTMLHtwBerlinChatBubbleElement;
    };
    interface HTMLHtwBerlinContentBoxElement extends Components.HtwBerlinContentBox, HTMLStencilElement {
    }
    var HTMLHtwBerlinContentBoxElement: {
        prototype: HTMLHtwBerlinContentBoxElement;
        new (): HTMLHtwBerlinContentBoxElement;
    };
    interface HTMLHtwBerlinDropdownElement extends Components.HtwBerlinDropdown, HTMLStencilElement {
    }
    var HTMLHtwBerlinDropdownElement: {
        prototype: HTMLHtwBerlinDropdownElement;
        new (): HTMLHtwBerlinDropdownElement;
    };
    interface HTMLHtwBerlinInputElement extends Components.HtwBerlinInput, HTMLStencilElement {
    }
    var HTMLHtwBerlinInputElement: {
        prototype: HTMLHtwBerlinInputElement;
        new (): HTMLHtwBerlinInputElement;
    };
    interface HTMLHtwBerlinLinkElement extends Components.HtwBerlinLink, HTMLStencilElement {
    }
    var HTMLHtwBerlinLinkElement: {
        prototype: HTMLHtwBerlinLinkElement;
        new (): HTMLHtwBerlinLinkElement;
    };
    interface HTMLHtwBerlinLoginElement extends Components.HtwBerlinLogin, HTMLStencilElement {
    }
    var HTMLHtwBerlinLoginElement: {
        prototype: HTMLHtwBerlinLoginElement;
        new (): HTMLHtwBerlinLoginElement;
    };
    interface HTMLHtwBerlinLogoElement extends Components.HtwBerlinLogo, HTMLStencilElement {
    }
    var HTMLHtwBerlinLogoElement: {
        prototype: HTMLHtwBerlinLogoElement;
        new (): HTMLHtwBerlinLogoElement;
    };
    interface HTMLHtwBerlinSideMenuElement extends Components.HtwBerlinSideMenu, HTMLStencilElement {
    }
    var HTMLHtwBerlinSideMenuElement: {
        prototype: HTMLHtwBerlinSideMenuElement;
        new (): HTMLHtwBerlinSideMenuElement;
    };
    interface HTMLHtwBerlinSliderElement extends Components.HtwBerlinSlider, HTMLStencilElement {
    }
    var HTMLHtwBerlinSliderElement: {
        prototype: HTMLHtwBerlinSliderElement;
        new (): HTMLHtwBerlinSliderElement;
    };
    interface HTMLHtwBerlinTableElement extends Components.HtwBerlinTable, HTMLStencilElement {
    }
    var HTMLHtwBerlinTableElement: {
        prototype: HTMLHtwBerlinTableElement;
        new (): HTMLHtwBerlinTableElement;
    };
    interface HTMLHtwBerlinTopMenuElement extends Components.HtwBerlinTopMenu, HTMLStencilElement {
    }
    var HTMLHtwBerlinTopMenuElement: {
        prototype: HTMLHtwBerlinTopMenuElement;
        new (): HTMLHtwBerlinTopMenuElement;
    };
    interface HTMLHtwBerlinTypographyElement extends Components.HtwBerlinTypography, HTMLStencilElement {
    }
    var HTMLHtwBerlinTypographyElement: {
        prototype: HTMLHtwBerlinTypographyElement;
        new (): HTMLHtwBerlinTypographyElement;
    };
    interface HTMLElementTagNameMap {
        "htw-berlin-avatar": HTMLHtwBerlinAvatarElement;
        "htw-berlin-breadcrumb": HTMLHtwBerlinBreadcrumbElement;
        "htw-berlin-button": HTMLHtwBerlinButtonElement;
        "htw-berlin-chat": HTMLHtwBerlinChatElement;
        "htw-berlin-chat-bubble": HTMLHtwBerlinChatBubbleElement;
        "htw-berlin-content-box": HTMLHtwBerlinContentBoxElement;
        "htw-berlin-dropdown": HTMLHtwBerlinDropdownElement;
        "htw-berlin-input": HTMLHtwBerlinInputElement;
        "htw-berlin-link": HTMLHtwBerlinLinkElement;
        "htw-berlin-login": HTMLHtwBerlinLoginElement;
        "htw-berlin-logo": HTMLHtwBerlinLogoElement;
        "htw-berlin-side-menu": HTMLHtwBerlinSideMenuElement;
        "htw-berlin-slider": HTMLHtwBerlinSliderElement;
        "htw-berlin-table": HTMLHtwBerlinTableElement;
        "htw-berlin-top-menu": HTMLHtwBerlinTopMenuElement;
        "htw-berlin-typography": HTMLHtwBerlinTypographyElement;
    }
}
declare namespace LocalJSX {
    interface HtwBerlinAvatar {
        /**
          * set full name of user
         */
        "fullname"?: string;
        /**
          * set link for avatar
         */
        "link"?: string;
        /**
          * render avatar in different sizes
         */
        "size"?: 's' | 'm' | 'l';
        /**
          * set true for squared avatar
         */
        "squared"?: boolean;
        /**
          * set source of image
         */
        "src"?: string;
    }
    interface HtwBerlinBreadcrumb {
    }
    interface HtwBerlinButton {
        /**
          * alternative title
         */
        "altTitle"?: string;
        /**
          * button color
         */
        "color"?: 'green' | 'orange' | 'blue' | 'disabled';
        /**
          * set true to use dark mode styling
         */
        "dark"?: boolean;
        /**
          * href property
         */
        "href"?: string;
        /**
          * button type, default is anker <a>
         */
        "type"?: 'default' | 'submit';
        /**
          * button variant
         */
        "variant"?: 'filled' | 'outlined' | 'text';
    }
    interface HtwBerlinChat {
        /**
          * color scheme of chat
         */
        "color"?: 'green' | 'orange' | 'blue';
        /**
          * use dark mode if true
         */
        "dark"?: boolean;
        /**
          * full name of user or group name
         */
        "fullname"?: string;
    }
    interface HtwBerlinChatBubble {
        /**
          * use dark mode if true
         */
        "dark"?: boolean;
        /**
          * set date and time of message
         */
        "datetime"?: string;
        /**
          * full name of user or group name
         */
        "fullname"?: string;
        /**
          * set true if this is a received message
         */
        "received"?: boolean;
    }
    interface HtwBerlinContentBox {
        /**
          * pick color to apply to content when variant='color'
         */
        "color"?: 'green' | 'orange' | 'blue';
        /**
          * set true to apply dark mode
         */
        "dark"?: boolean;
        /**
          * set style to apply to the content box
         */
        "variant"?: 'default' | 'color' | 'secondary';
    }
    interface HtwBerlinDropdown {
        /**
          * color scheme
         */
        "color"?: 'green' | 'orange' | 'blue' | 'disabled';
        /**
          * use dark mode if true
         */
        "dark"?: boolean;
        /**
          * set the dropdown link text
         */
        "droptext"?: string;
        /**
          * use top-menu styling if true
         */
        "topmenu"?: boolean;
    }
    interface HtwBerlinInput {
        /**
          * alternative title shown on hover
         */
        "altTitle"?: string;
        /**
          * color applied to the input field
         */
        "color"?: 'green' | 'orange' | 'blue';
        /**
          * use dark color theme if true
         */
        "dark"?: boolean;
        /**
          * id of input field
         */
        "elementId"?: string;
        /**
          * label text to be displayed above input field
         */
        "label"?: string;
        /**
          * name of input field
         */
        "name"?: string;
        /**
          * placeholder text to be displayed in input
         */
        "placeholder"?: string;
        /**
          * set the state of the input field
         */
        "state"?: 'normal' | 'active' | 'disabled';
        /**
          * set the [Input type](https://www.w3schools.com/html/html_form_input_types.asp)
         */
        "type"?: string;
    }
    interface HtwBerlinLink {
        /**
          * alternative title
         */
        "altTitle"?: string;
        /**
          * link color
         */
        "color"?: 'green' | 'orange' | 'blue' | 'disabled';
        /**
          * use dark mode if true
         */
        "dark"?: boolean;
        /**
          * href property
         */
        "href"?: string;
        /**
          * set link state if neccessary
         */
        "state"?: 'default' | 'active' | 'visited';
        /**
          * use breadcrumb, dropdown or side-menu styling if neccessary
         */
        "variant"?: 'default' | 'side-menu' | 'breadcrumb' | 'dropdown';
    }
    interface HtwBerlinLogin {
        /**
          * color scheme of login
         */
        "color"?: 'green' | 'orange' | 'blue';
        /**
          * use dark mode if true
         */
        "dark"?: boolean;
    }
    interface HtwBerlinLogo {
        /**
          * alternative title for the link wrapper
         */
        "altTitle"?: string;
        /**
          * color scheme
         */
        "color"?: 'green' | 'orange' | 'blue';
        /**
          * use dark mode if true
         */
        "dark"?: boolean;
        /**
          * set href property to add a link wrapper to the logo
         */
        "href"?: string;
        /**
          * render logo in different sizes
         */
        "size"?: 's' | 'm' | 'l';
    }
    interface HtwBerlinSideMenu {
        /**
          * use dark mode if true
         */
        "dark"?: boolean;
    }
    interface HtwBerlinSlider {
        /**
          * color scheme of wizard
         */
        "color"?: 'green' | 'orange' | 'blue';
        /**
          * use dark mode if true
         */
        "dark"?: boolean;
        /**
          * display the slide status/numbers (e.g. Slide 2/5)
         */
        "showStatus"?: boolean;
    }
    interface HtwBerlinTable {
        /**
          * color scheme of table
         */
        "color"?: 'green' | 'orange' | 'blue';
        /**
          * use dark mode if true
         */
        "dark"?: boolean;
    }
    interface HtwBerlinTopMenu {
        /**
          * color scheme of menu
         */
        "color"?: 'green' | 'orange' | 'blue';
        /**
          * use dark mode if true
         */
        "dark"?: boolean;
        /**
          * set to false to hide htw logo
         */
        "logo"?: boolean;
        /**
          * Menu fixed at top by default. Set true to scroll with content
         */
        "shouldscroll"?: boolean;
    }
    interface HtwBerlinTypography {
        /**
          * link color
         */
        "color"?: 'copy' | 'green' | 'orange' | 'blue' | 'grey';
        /**
          * use dark mode if true - reverses copy color to white
         */
        "dark"?: boolean;
        /**
          * specify the font-style of the typogrphy element
         */
        "fontstyle"?: 'normal' | 'bold' | 'italic' | 'bolditalic';
        /**
          * specify the html tag of the typogrphy element
         */
        "tag"?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span';
    }
    interface IntrinsicElements {
        "htw-berlin-avatar": HtwBerlinAvatar;
        "htw-berlin-breadcrumb": HtwBerlinBreadcrumb;
        "htw-berlin-button": HtwBerlinButton;
        "htw-berlin-chat": HtwBerlinChat;
        "htw-berlin-chat-bubble": HtwBerlinChatBubble;
        "htw-berlin-content-box": HtwBerlinContentBox;
        "htw-berlin-dropdown": HtwBerlinDropdown;
        "htw-berlin-input": HtwBerlinInput;
        "htw-berlin-link": HtwBerlinLink;
        "htw-berlin-login": HtwBerlinLogin;
        "htw-berlin-logo": HtwBerlinLogo;
        "htw-berlin-side-menu": HtwBerlinSideMenu;
        "htw-berlin-slider": HtwBerlinSlider;
        "htw-berlin-table": HtwBerlinTable;
        "htw-berlin-top-menu": HtwBerlinTopMenu;
        "htw-berlin-typography": HtwBerlinTypography;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "htw-berlin-avatar": LocalJSX.HtwBerlinAvatar & JSXBase.HTMLAttributes<HTMLHtwBerlinAvatarElement>;
            "htw-berlin-breadcrumb": LocalJSX.HtwBerlinBreadcrumb & JSXBase.HTMLAttributes<HTMLHtwBerlinBreadcrumbElement>;
            "htw-berlin-button": LocalJSX.HtwBerlinButton & JSXBase.HTMLAttributes<HTMLHtwBerlinButtonElement>;
            "htw-berlin-chat": LocalJSX.HtwBerlinChat & JSXBase.HTMLAttributes<HTMLHtwBerlinChatElement>;
            "htw-berlin-chat-bubble": LocalJSX.HtwBerlinChatBubble & JSXBase.HTMLAttributes<HTMLHtwBerlinChatBubbleElement>;
            "htw-berlin-content-box": LocalJSX.HtwBerlinContentBox & JSXBase.HTMLAttributes<HTMLHtwBerlinContentBoxElement>;
            "htw-berlin-dropdown": LocalJSX.HtwBerlinDropdown & JSXBase.HTMLAttributes<HTMLHtwBerlinDropdownElement>;
            "htw-berlin-input": LocalJSX.HtwBerlinInput & JSXBase.HTMLAttributes<HTMLHtwBerlinInputElement>;
            "htw-berlin-link": LocalJSX.HtwBerlinLink & JSXBase.HTMLAttributes<HTMLHtwBerlinLinkElement>;
            "htw-berlin-login": LocalJSX.HtwBerlinLogin & JSXBase.HTMLAttributes<HTMLHtwBerlinLoginElement>;
            "htw-berlin-logo": LocalJSX.HtwBerlinLogo & JSXBase.HTMLAttributes<HTMLHtwBerlinLogoElement>;
            "htw-berlin-side-menu": LocalJSX.HtwBerlinSideMenu & JSXBase.HTMLAttributes<HTMLHtwBerlinSideMenuElement>;
            "htw-berlin-slider": LocalJSX.HtwBerlinSlider & JSXBase.HTMLAttributes<HTMLHtwBerlinSliderElement>;
            "htw-berlin-table": LocalJSX.HtwBerlinTable & JSXBase.HTMLAttributes<HTMLHtwBerlinTableElement>;
            "htw-berlin-top-menu": LocalJSX.HtwBerlinTopMenu & JSXBase.HTMLAttributes<HTMLHtwBerlinTopMenuElement>;
            "htw-berlin-typography": LocalJSX.HtwBerlinTypography & JSXBase.HTMLAttributes<HTMLHtwBerlinTypographyElement>;
        }
    }
}
