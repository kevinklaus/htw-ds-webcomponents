# htw-berlin-typography

Component for building HTW Berlin typography.

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                          | Type                                                    | Default    |
| ----------- | ----------- | ---------------------------------------------------- | ------------------------------------------------------- | ---------- |
| `color`     | `color`     | link color                                           | `"blue" \| "copy" \| "green" \| "grey" \| "orange"`     | `'copy'`   |
| `dark`      | `dark`      | use dark mode if true - reverses copy color to white | `boolean`                                               | `false`    |
| `fontstyle` | `fontstyle` | specify the font-style of the typogrphy element      | `"bold" \| "bolditalic" \| "italic" \| "normal"`        | `'normal'` |
| `tag`       | `tag`       | specify the html tag of the typogrphy element        | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "p" \| "span"` | `'span'`   |


## Dependencies

### Used by

 - [htw-berlin-chat](../htw-berlin-chat)
 - [htw-berlin-login](../htw-berlin-login)

### Graph
```mermaid
graph TD;
  htw-berlin-chat --> htw-berlin-typography
  htw-berlin-login --> htw-berlin-typography
  style htw-berlin-typography fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


