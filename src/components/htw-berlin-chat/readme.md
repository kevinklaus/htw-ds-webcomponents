# htw-berlin-chat

The chat component can wrap any number of [htw-berlin-chat-bubble](../?path=/docs/design-system-molecules-chatbubble--chatbubble) elements as well as one [htw-berlin-avatar](../?path=/docs/design-system-molecules-avatar--avatar) can be slotted optionally.

#### Slotting Chat Bubbles and Avatar

- The [chat-bubbles](../?path=/docs/design-system-molecules-chatbubble--chatbubble) should be passed with the attribute `slot="messages"`.
- The [avatar](../?path=/docs/design-system-molecules-avatar--avatar) should be passed with the attribute `slot="avatar"`.

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                     | Type                            | Default          |
| ---------- | ---------- | ------------------------------- | ------------------------------- | ---------------- |
| `color`    | `color`    | color scheme of chat            | `"blue" \| "green" \| "orange"` | `'green'`        |
| `dark`     | `dark`     | use dark mode if true           | `boolean`                       | `false`          |
| `fullname` | `fullname` | full name of user or group name | `string`                        | `"Example User"` |


## Dependencies

### Depends on

- [htw-berlin-typography](../htw-berlin-typography)

### Graph
```mermaid
graph TD;
  htw-berlin-chat --> htw-berlin-typography
  style htw-berlin-chat fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

## Using Dark Styles 
When switching to dark mode styles, make sure to **select the dark background in the tool bar above** for best viewing results.
