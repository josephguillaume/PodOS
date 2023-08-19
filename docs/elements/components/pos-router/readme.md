# pos-router



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [pos-app-browser](../../apps/pos-app-browser)

### Depends on

- [pos-add-new-thing](../pos-add-new-thing)
- [pos-navigation-bar](../pos-navigation-bar)
- [pos-resource](../pos-resource)
- [pos-type-router](../pos-type-router)

### Graph
```mermaid
graph TD;
  pos-router --> pos-add-new-thing
  pos-router --> pos-navigation-bar
  pos-router --> pos-resource
  pos-router --> pos-type-router
  pos-add-new-thing --> ion-icon
  pos-add-new-thing --> pos-dialog
  pos-add-new-thing --> pos-new-thing-form
  pos-dialog --> ion-icon
  pos-new-thing-form --> pos-select-term
  pos-navigation-bar --> ion-searchbar
  ion-searchbar --> ion-icon
  pos-resource --> ion-progress-bar
  pos-resource --> ion-card
  pos-resource --> ion-card-header
  pos-resource --> ion-card-content
  ion-card --> ion-ripple-effect
  pos-app-browser --> pos-router
  style pos-router fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
