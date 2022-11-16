import { RdfType, Thing } from '@pod-os/core';
import { Component, Event, EventEmitter, h, State } from '@stencil/core';
import { ResourceAware, subscribeResource } from '../events/ResourceAware';

@Component({
  tag: 'pos-type-badges',
  shadow: true,
  styleUrl: 'pos-type-badges.css',
})
export class PosTypeBadges implements ResourceAware {
  @State() data: RdfType[] = [];
  @State() typeLabels: string[] = [];

  @State() isExpanded: boolean = false;

  @Event({ eventName: 'pod-os:resource' })
  subscribeResource: EventEmitter;

  componentWillLoad() {
    subscribeResource(this);
  }

  receiveResource = (resource: Thing) => {
    this.data = resource.types();
    this.typeLabels = [...new Set(resource.types().map(it => it.label))];
  };

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  render() {
    if (this.isExpanded) {
      return (
        <div class="types expanded">
          {this.data.map(it => (
            <ion-badge>{it.uri}</ion-badge>
          ))}
        </div>
      );
    } else {
      return (
        <div class="types">
          {this.typeLabels.map(it => (
            <ion-badge>{it}</ion-badge>
          ))}
        </div>
      );
    }
  }
}
