# htw-berlin-avatar

Circular or squared image component to display a user picture. The href of the anker wrapper can be set by defining the `link` attribute.

- When using the avatar in a [htw-berlin-chat](../?path=/docs/design-system-organisms-chat--chat) set `size="s"` and `slot="avatar"`.
- When using the avatar in a [htw-berlin-top-menu](../?path=/docs/design-system-organisms-top-menu--standard) set `size="s"` and `slot="avatar"`.

<!-- Auto Generated Below -->

## Properties

| Property   | Attribute  | Description                      | Type                | Default                |
| ---------- | ---------- | -------------------------------- | ------------------- | ---------------------- |
| `fullname` | `fullname` | set full name of user            | `string`            | `"Example User"`       |
| `link`     | `link`     | set link for avatar              | `string`            | `"javascript:void(0)"` |
| `size`     | `size`     | render avatar in different sizes | `"l" \| "m" \| "s"` | `'s'`                  |
| `squared`  | `squared`  | set true for squared avatar      | `boolean`           | `false`                |
| `src`      | `src`      | set source of image              | `string`            | `"undefined"`          |

---

## Using Dark Styles

When switiching to dark mode styles, make sure to **select the dark background in the tool bar above** for best viewing results.
