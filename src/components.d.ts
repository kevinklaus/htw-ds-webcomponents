/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface HtwBerlinBreadcrumb {
        /**
          * use dark mode if true
         */
        "dark": boolean;
        /**
          * use orange color scheme if true
         */
        "orange": boolean;
    }
    interface HtwBerlinButton {
        /**
          * alternative title
         */
        "altTitle": string;
        /**
          * button color
         */
        "color": "green" | "orange" | "blue" | "disabled";
        /**
          * text to be displayed in button
         */
        "dark": boolean;
        /**
          * href property
         */
        "href": string;
        /**
          * text to be displayed in button
         */
        "text": string;
        /**
          * button variant
         */
        "variant": "filled" | "outlined" | "text";
    }
    interface HtwBerlinContentBox {
        /**
          * pick style to apply to content box
         */
        "variant": "default" | "green" | "grey" | "dark";
    }
    interface HtwBerlinInput {
        /**
          * alternative title shown on hover
         */
        "altTitle": string;
        /**
          * color applied to the input field
         */
        "color": "green" | "orange" | "blue";
        /**
          * use dark color theme if true
         */
        "dark": boolean;
        /**
          * label text to be displayed above input field
         */
        "label": string;
        /**
          * placeholder text to be displayed in input
         */
        "placeholder": string;
        /**
          * color applied to the input field
         */
        "state": "normal" | "active" | "disabled";
        /**
          * type of input
         */
        "type": string;
        /**
          * value to be saved by input
         */
        "value": string;
    }
    interface HtwBerlinLink {
        /**
          * alternative title
         */
        "altTitle": string;
        /**
          * use dark mode if true
         */
        "dark": boolean;
        /**
          * href property
         */
        "href": string;
        /**
          * use orange color scheme if true
         */
        "orange": boolean;
        /**
          * uset link state if neccessary
         */
        "state": "default" | "active" | "visited";
        /**
          * text to be displayed in link
         */
        "text": string;
        /**
          * use breadcrumb or side-menu styling if neccessary
         */
        "variant": "default" | "side-menu" | "breadcrumb";
    }
    interface HtwBerlinLogo {
        /**
          * use dark mode if true
         */
        "dark": boolean;
        /**
          * href property
         */
        "href": string;
        /**
          * use orange color scheme if true
         */
        "orange": boolean;
        /**
          * render logo in different sizes
         */
        "size": "s" | "m" | "l";
    }
    interface HtwBerlinSideMenu {
        /**
          * use dark mode if true
         */
        "dark": boolean;
        /**
          * use orange color scheme if true
         */
        "orange": boolean;
    }
    interface HtwBerlinTopMenu {
        /**
          * use dark mode if true
         */
        "dark": boolean;
        /**
          * use orange color scheme if true
         */
        "orange": boolean;
    }
}
declare global {
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
    interface HTMLHtwBerlinContentBoxElement extends Components.HtwBerlinContentBox, HTMLStencilElement {
    }
    var HTMLHtwBerlinContentBoxElement: {
        prototype: HTMLHtwBerlinContentBoxElement;
        new (): HTMLHtwBerlinContentBoxElement;
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
    interface HTMLHtwBerlinTopMenuElement extends Components.HtwBerlinTopMenu, HTMLStencilElement {
    }
    var HTMLHtwBerlinTopMenuElement: {
        prototype: HTMLHtwBerlinTopMenuElement;
        new (): HTMLHtwBerlinTopMenuElement;
    };
    interface HTMLElementTagNameMap {
        "htw-berlin-breadcrumb": HTMLHtwBerlinBreadcrumbElement;
        "htw-berlin-button": HTMLHtwBerlinButtonElement;
        "htw-berlin-content-box": HTMLHtwBerlinContentBoxElement;
        "htw-berlin-input": HTMLHtwBerlinInputElement;
        "htw-berlin-link": HTMLHtwBerlinLinkElement;
        "htw-berlin-logo": HTMLHtwBerlinLogoElement;
        "htw-berlin-side-menu": HTMLHtwBerlinSideMenuElement;
        "htw-berlin-top-menu": HTMLHtwBerlinTopMenuElement;
    }
}
declare namespace LocalJSX {
    interface HtwBerlinBreadcrumb {
        /**
          * use dark mode if true
         */
        "dark"?: boolean;
        /**
          * use orange color scheme if true
         */
        "orange"?: boolean;
    }
    interface HtwBerlinButton {
        /**
          * alternative title
         */
        "altTitle"?: string;
        /**
          * button color
         */
        "color"?: "green" | "orange" | "blue" | "disabled";
        /**
          * text to be displayed in button
         */
        "dark"?: boolean;
        /**
          * href property
         */
        "href"?: string;
        /**
          * text to be displayed in button
         */
        "text"?: string;
        /**
          * button variant
         */
        "variant"?: "filled" | "outlined" | "text";
    }
    interface HtwBerlinContentBox {
        /**
          * pick style to apply to content box
         */
        "variant"?: "default" | "green" | "grey" | "dark";
    }
    interface HtwBerlinInput {
        /**
          * alternative title shown on hover
         */
        "altTitle"?: string;
        /**
          * color applied to the input field
         */
        "color"?: "green" | "orange" | "blue";
        /**
          * use dark color theme if true
         */
        "dark"?: boolean;
        /**
          * label text to be displayed above input field
         */
        "label"?: string;
        /**
          * placeholder text to be displayed in input
         */
        "placeholder"?: string;
        /**
          * color applied to the input field
         */
        "state"?: "normal" | "active" | "disabled";
        /**
          * type of input
         */
        "type"?: string;
        /**
          * value to be saved by input
         */
        "value"?: string;
    }
    interface HtwBerlinLink {
        /**
          * alternative title
         */
        "altTitle"?: string;
        /**
          * use dark mode if true
         */
        "dark"?: boolean;
        /**
          * href property
         */
        "href"?: string;
        /**
          * use orange color scheme if true
         */
        "orange"?: boolean;
        /**
          * uset link state if neccessary
         */
        "state"?: "default" | "active" | "visited";
        /**
          * text to be displayed in link
         */
        "text"?: string;
        /**
          * use breadcrumb or side-menu styling if neccessary
         */
        "variant"?: "default" | "side-menu" | "breadcrumb";
    }
    interface HtwBerlinLogo {
        /**
          * use dark mode if true
         */
        "dark"?: boolean;
        /**
          * href property
         */
        "href"?: string;
        /**
          * use orange color scheme if true
         */
        "orange"?: boolean;
        /**
          * render logo in different sizes
         */
        "size"?: "s" | "m" | "l";
    }
    interface HtwBerlinSideMenu {
        /**
          * use dark mode if true
         */
        "dark"?: boolean;
        /**
          * use orange color scheme if true
         */
        "orange"?: boolean;
    }
    interface HtwBerlinTopMenu {
        /**
          * use dark mode if true
         */
        "dark"?: boolean;
        /**
          * use orange color scheme if true
         */
        "orange"?: boolean;
    }
    interface IntrinsicElements {
        "htw-berlin-breadcrumb": HtwBerlinBreadcrumb;
        "htw-berlin-button": HtwBerlinButton;
        "htw-berlin-content-box": HtwBerlinContentBox;
        "htw-berlin-input": HtwBerlinInput;
        "htw-berlin-link": HtwBerlinLink;
        "htw-berlin-logo": HtwBerlinLogo;
        "htw-berlin-side-menu": HtwBerlinSideMenu;
        "htw-berlin-top-menu": HtwBerlinTopMenu;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "htw-berlin-breadcrumb": LocalJSX.HtwBerlinBreadcrumb & JSXBase.HTMLAttributes<HTMLHtwBerlinBreadcrumbElement>;
            "htw-berlin-button": LocalJSX.HtwBerlinButton & JSXBase.HTMLAttributes<HTMLHtwBerlinButtonElement>;
            "htw-berlin-content-box": LocalJSX.HtwBerlinContentBox & JSXBase.HTMLAttributes<HTMLHtwBerlinContentBoxElement>;
            "htw-berlin-input": LocalJSX.HtwBerlinInput & JSXBase.HTMLAttributes<HTMLHtwBerlinInputElement>;
            "htw-berlin-link": LocalJSX.HtwBerlinLink & JSXBase.HTMLAttributes<HTMLHtwBerlinLinkElement>;
            "htw-berlin-logo": LocalJSX.HtwBerlinLogo & JSXBase.HTMLAttributes<HTMLHtwBerlinLogoElement>;
            "htw-berlin-side-menu": LocalJSX.HtwBerlinSideMenu & JSXBase.HTMLAttributes<HTMLHtwBerlinSideMenuElement>;
            "htw-berlin-top-menu": LocalJSX.HtwBerlinTopMenu & JSXBase.HTMLAttributes<HTMLHtwBerlinTopMenuElement>;
        }
    }
}
