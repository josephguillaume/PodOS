jest.mock('../../pod-os');

import { newSpecPage } from '@stencil/core/testing';
import { createPodOS } from '../../pod-os';
import { PosApp } from '../pos-app/pos-app';
import { PosResource } from '../pos-resource/pos-resource';
import { PosLabel } from './pos-label';

describe('pos-label', () => {
  it('renders label for successfully loaded resource', async () => {
    mockPodOS('https://resource.test', Promise.resolve(), 'Test Resource');
    const page = await newSpecPage({
      components: [PosApp, PosResource, PosLabel],
      html: `<pos-app>
            <pos-resource uri="https://resource.test">
              <pos-label />
            </pos-resource>
        </pos-app>`,
    });
    expect(page.root).toEqualHtml(`
    <pos-app>
      <ion-app>
        <pos-resource uri="https://resource.test">
          <mock:shadow-root>
            <slot></slot>
          </mock:shadow-root>
          <pos-label>
            <mock:shadow-root>
              Test Resource
            </mock:shadow-root>
          </pos-label>
        </pos-resource>
      </ion-app>
    </pos-app>
  `);
  });

  it('renders label after successfully loading resource', async () => {
    const loadingPromise = new Promise(resolve => setTimeout(resolve, 1));
    mockPodOS('https://resource.test', loadingPromise, 'Test Resource');
    const page = await newSpecPage({
      components: [PosApp, PosResource, PosLabel],
      html: `<pos-app>
            <pos-resource uri="https://resource.test">
              <pos-label />
            </pos-resource>
        </pos-app>`,
    });
    await loadingPromise;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <pos-app>
      <ion-app>
        <pos-resource uri="https://resource.test">
          <mock:shadow-root>
            <slot></slot>
          </mock:shadow-root>
          <pos-label>
            <mock:shadow-root>
              Test Resource
            </mock:shadow-root>
          </pos-label>
        </pos-resource>
      </ion-app>
    </pos-app>
  `);
  });

  it('renders nothing while loading resource', async () => {
    const loadingPromise = new Promise(resolve => setTimeout(resolve, 1));
    mockPodOS('https://resource.test', loadingPromise);
    const page = await newSpecPage({
      components: [PosApp, PosResource, PosLabel],
      html: `<pos-app>
            <pos-resource uri="https://resource.test">
              <pos-label />
            </pos-resource>
        </pos-app>`,
    });
    expect(page.root).toEqualHtml(`
<pos-app>
  <ion-app>
    <pos-resource uri="https://resource.test">
      <mock:shadow-root>
        <ion-progress-bar type="indeterminate"></ion-progress-bar>
      </mock:shadow-root>
      <pos-label>
        <mock:shadow-root>
        </mock:shadow-root>
      </pos-label>
    </pos-resource>
  </ion-app>
</pos-app>
  `);
    await loadingPromise;
  });

  it('renders nothing when resource loading failed', async () => {
    mockPodOS('https://resource.test', Promise.reject(new Error('not found')));
    const page = await newSpecPage({
      components: [PosApp, PosResource, PosLabel],
      html: `<pos-app>
            <pos-resource uri="https://resource.test">
              <pos-label />
            </pos-resource>
        </pos-app>`,
    });
    expect(page.root).toEqualHtml(`
<pos-app>
  <ion-app>
    <pos-resource uri="https://resource.test">
      <mock:shadow-root>
        <div>
          not found
        </div>
      </mock:shadow-root>
      <pos-label>
        <mock:shadow-root>
        </mock:shadow-root>
      </pos-label>
    </pos-resource>
  </ion-app>
</pos-app>
  `);
  });

  function mockPodOS(expectedUri, fetchResult, label = 'default label') {
    (createPodOS as jest.Mock).mockReturnValue({
      fetch: (uri: string) => {
        if (uri === expectedUri) {
          return fetchResult;
        } else {
          throw new Error(`uri mismatch. Expected: ${expectedUri}, but was: ${uri}`);
        }
      },
      store: {
        get: (uri: string) => {
          return {
            label: () => (uri === expectedUri ? label : 'unexpected label'),
          };
        },
      },
      trackSession: () => null,
      handleIncomingRedirect: () => Promise.resolve(),
    });
  }
});
