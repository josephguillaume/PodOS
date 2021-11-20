import { Component, EventEmitter, Event, h, Prop, State, Watch, Listen } from '@stencil/core';

interface GetResourceEvent extends CustomEvent {
  detail: Function;
}

@Component({
  tag: 'pos-resource',
  shadow: true,
})
export class PosResource {
  @State() os: any;

  @State() resource: any;

  @Prop() uri: string;

  @Event({ eventName: 'consumeOs' }) consumeOsEmitter: EventEmitter;

  @State()
  private error: any;

  @State()
  private loading: boolean = true;

  componentWillLoad() {
    this.consumeOsEmitter.emit(this.setOs);
  }

  setOs = async (os: any) => {
    this.os = os;
  };

  @Listen('pod-os:resource')
  async provideResource(event: GetResourceEvent) {
    event.stopPropagation();
    if (this.resource) {
      event.detail(this.resource);
    }
  }

  @Watch('os')
  async loadResource(os: any) {
    try {
      await os.fetch(this.uri);
      this.resource = os.store.get(this.uri);
    } catch (err) {
      this.error = err;
    }
    this.loading = false;
  }

  render() {
    if (this.loading) {
      return <ion-progress-bar type="indeterminate"></ion-progress-bar>;
    }
    if (this.error) {
      return <div>{this.error.message}</div>;
    }
    return <slot />;
  }
}
