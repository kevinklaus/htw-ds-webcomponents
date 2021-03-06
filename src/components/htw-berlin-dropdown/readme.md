# htw-berlin-dropdown

The dropdown menu can wrap any number of [htw-berlin-link](../?path=/story/design-system-atoms-link--link) elements. The dropdown text can be adapted by providing a string to the `droptext` attribute.

#### Dropdown Links

- For wrapped [links](../?path=/story/design-system-atoms-link--link) set the link attribute `variant="dropdown"`
- See the [link docs](../?path=/docs/design-system-atoms-link--link) for setting link color and dark mode

#### Usage in the Top Menu

- The dropdwon can be slotted within [htw-berlin-top-menu](../?path=/docs/design-system-molecules-top-menu--standard) by setting the attributes `variant="topmenu"` and `slot="dropdown"`

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                  | Type                                          | Default      |
| ---------- | ---------- | ---------------------------- | --------------------------------------------- | ------------ |
| `color`    | `color`    | color scheme                 | `"blue" \| "disabled" \| "green" \| "orange"` | `'green'`    |
| `dark`     | `dark`     | use dark mode if true        | `boolean`                                     | `false`      |
| `droptext` | `droptext` | set the dropdown link text   | `string`                                      | `"Dropdown"` |
| `topmenu`  | `topmenu`  | use top-menu styling if true | `boolean`                                     | `false`      |


----------------------------------------------

## Using Dark Styles 
When switiching to dark mode styles, make sure to **select the dark background in the tool bar above** for best viewing results.
