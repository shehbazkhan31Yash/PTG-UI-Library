# ptg-pagination



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description | Type       | Default     |
| ----------------- | ------------------- | ----------- | ---------- | ----------- |
| `itemCount`       | `item-count`        |             | `number`   | `undefined` |
| `page`            | `page`              |             | `number`   | `0`         |
| `pageSize`        | `page-size`         |             | `number`   | `10`        |
| `pageSizeOptions` | `page-size-options` |             | `number[]` | `[]`        |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `pageChanged` |             | `CustomEvent<any>` |
| `sizeChanged` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [ptg-table](../ptg-table)

### Graph
```mermaid
graph TD;
  ptg-table --> ptg-pagination
  style ptg-pagination fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
