# HTW Berlin Design System

The [HTW Berlin Design System](https://kevinklaus.github.io/htw-ds-webcomponents) is built using [Storybook](https://storybook.js.org/docs/web-components/get-started/introduction) a User Interface explorer and development platform for stand-alone UI components.
It includes a range of User Interface elements that can be used to build Web Applications with a [HTW Berlin Corporate Identity](https://corporatedesign.htw-berlin.de/).

## Component Library

Visit the [HTW Berlin Design System](https://kevinklaus.github.io/htw-ds-webcomponents) and **browse example component stories by navigating to them in the sidebar.** The Canvas Tab can be used to view the components in isolation.
The components are grouped into Particles, Atoms, Molecules and Organisms following the [Atomic Design](https://atomicdesign.bradfrost.com/table-of-contents/) approach by Brad Frost.

#### Particles

Particles are the least complex components like the most basic building blocks or variables of user interfaces. This could be things like [Typography](../?path=/story/design-system-particles-typography--typography) and [Colors](../?path=/story/design-system-particles-colors--page).

#### Atoms

Atoms are simple stand alone user interface elements like [Avatars](../?path=/story/design-system-atoms-avatar--avatar), [Buttons](../?path=/story/design-system-atoms-button--button), [Links](../?path=/story/design-system-atoms-link--link) etc.

#### Molecules

Molecules are component combinations that offer over more complex funtionality to users. This could be Navigation elments like Menus or other common features. For example [Top Menu](../?path=/story/design-system-molecules-top-menu--extended-standard) and [Chat](../?path=/story/design-system-molecules-chat--chat)

#### Organisms

Organisms are the most complex components. They inlcude full user interfaces composed of many individual components e.g. an entire [Application Page](../?path=/story/design-system-organisms-application-page--application-page).

## Viewing different States, Variants & Colors

Use the fields below the Canvas to edit the properties of components to dynamically update their values.

## Documentation

Each component's documentation can be viewed in its **Docs tab**. You will find information on how they work along with **best practices** for their usage.

# Using HTW Berlin Web Components

Use the **npm package** `htw-berlin-ds-webcomponents` to implement HTW Berlin User Interfaces. The HTW Berlin Web Components are just Web Components, so they **work in any major framework or with no framework at all**.

_There are three strategies recommended for using HTW Berlin web components:_

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/htw-berlin-ds-webcomponents@1.2.0/dist/index.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules

- Run `npm install my-component --save`
- Put a script tag similar to this `<script src='node_modules/htw-berlin-ds-webcomponents/dist/index.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a [stencil](https://stenciljs.com/)-starter app

- Run `npm install htw-berlin-ds-webcomponents --save`
- Add an import to the npm packages `import htw-berlin-component;`
- Then you can use the element(s) anywhere in your template, JSX, html etc
