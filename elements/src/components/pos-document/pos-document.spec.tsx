jest.mock('../../store/session');
jest.mock('../broken-file/BrokenFile');

import { BinaryFile, BrokenFile as BrokenFileData } from '@pod-os/core';
import { newSpecPage } from '@stencil/core/testing';
import { Blob } from 'buffer';
import { mockPodOS } from '../../test/mockPodOS';
import { BrokenFile } from '../broken-file/BrokenFile';
import { PosDocument } from './pos-document';
import { when } from 'jest-when';
import { h } from '@stencil/core';

import session from '../../store/session';

describe('pos-document', () => {
  let pdfBlob;
  beforeEach(() => {
    pdfBlob = new Blob(['1'], {
      type: 'application/pdf',
    });
  });

  beforeEach(() => {
    jest.spyOn(URL, 'createObjectURL').mockReturnValue('blob:fake-pdf-data');
  });

  it('renders loading indicator initially', async () => {
    const page = await newSpecPage({
      components: [PosDocument],
      html: `<pos-document src="https://pod.test/test.pdf" />`,
    });
    expect(page.root).toEqualHtml(`
      <pos-document src="https://pod.test/test.pdf">
        <mock:shadow-root>
          <ion-skeleton-text animated=""></ion-skeleton-text>
        </mock:shadow-root>
      </pos-document>
  `);
  });

  it('renders loading indicator while fetching', async () => {
    const page = await newSpecPage({
      components: [PosDocument],
      html: `<pos-document src="https://pod.test/test.pdf" />`,
    });
    const os = mockPodOS();
    when(os.fetchFile)
      .calledWith('https://pod.test/test.pdf')
      .mockReturnValue(new Promise(() => null));
    await page.rootInstance.setOs(os);
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <pos-document src="https://pod.test/test.pdf">
        <mock:shadow-root>
          <ion-skeleton-text animated=""></ion-skeleton-text>
        </mock:shadow-root>
      </pos-document>
  `);
  });

  it('renders iframe after loading', async () => {
    const file = mockBinaryFile(pdfBlob);
    const page = await newSpecPage({
      components: [PosDocument],
      html: `<pos-document src="https://pod.test/test.pdf" />`,
    });
    const os = mockPodOS();
    when(os.fetchFile).calledWith('https://pod.test/test.pdf').mockResolvedValue(file);
    await page.rootInstance.setOs(os);
    await page.waitForChanges();
    expect(URL.createObjectURL).toHaveBeenCalledWith(pdfBlob);
    expect(page.root).toEqualHtml(`
      <pos-document src="https://pod.test/test.pdf">
        <mock:shadow-root>
          <iframe src="blob:fake-pdf-data"></iframe>
        </mock:shadow-root>
      </pos-document>
  `);
  });

  it('emits event after loading', async () => {
    const onResourceLoaded = jest.fn();
    const file = mockBinaryFile(pdfBlob);
    const page = await newSpecPage({
      components: [PosDocument],
      html: `<pos-document src="https://pod.test/test.pdf" />`,
    });
    page.root.addEventListener('pod-os:resource-loaded', onResourceLoaded);
    const os = mockPodOS();
    when(os.fetchFile).calledWith('https://pod.test/test.pdf').mockResolvedValue(file);
    await page.rootInstance.setOs(os);
    await page.waitForChanges();
    expect(onResourceLoaded).toHaveBeenCalled();
    expect(onResourceLoaded.mock.calls[0][0].detail).toEqual('https://pod.test/test.pdf');
  });

  it('renders error when fetch failed', async () => {
    const page = await newSpecPage({
      components: [PosDocument],
      html: `<pos-document src="https://pod.test/test.pdf" />`,
    });
    const os = mockPodOS();
    when(os.fetchFile).calledWith('https://pod.test/test.pdf').mockRejectedValue(new Error('network error'));
    await page.rootInstance.setOs(os);
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <pos-document src="https://pod.test/test.pdf">
        <mock:shadow-root>
          <div class="error">
            network error
          </div>
        </mock:shadow-root>
      </pos-document>
  `);
  });

  it('renders error for inaccessible file', async () => {
    const brokenImage = {
      blob: () => null,
      toString: () => '403 - Forbidden - https://pod.test/test.pdf',
    } as unknown as BrokenFileData;
    when(BrokenFile).mockReturnValue(<div class="error">403 - Forbidden - https://pod.test/test.pdf</div>);
    const page = await newSpecPage({
      components: [PosDocument],
      html: `<pos-document src="https://pod.test/test.pdf" />`,
    });
    const os = mockPodOS();
    when(os.fetchFile).calledWith('https://pod.test/test.pdf').mockResolvedValue(brokenImage);
    await page.rootInstance.setOs(os);
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <pos-document src="https://pod.test/test.pdf">
        <mock:shadow-root>
          <div class="error">
            403 - Forbidden - https://pod.test/test.pdf
          </div>
        </mock:shadow-root>
      </pos-document>
  `);
  });

  it('updates and loads resource when src changes', async () => {
    const file = mockBinaryFile(pdfBlob);
    const page = await newSpecPage({
      components: [PosDocument],
      html: `<pos-document src="https://pod.test/test.pdf" />`,
    });
    const os = mockPodOS();
    when(os.fetchFile).calledWith('https://pod.test/test.pdf').mockResolvedValue(file);
    when(os.fetchFile)
      .calledWith('https://pod.test/other.png')
      .mockReturnValue(new Promise(() => null));
    await page.rootInstance.setOs(os);
    page.root.setAttribute('src', 'https://pod.test/other.png');
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <pos-document src="https://pod.test/other.png">
        <mock:shadow-root>
          <ion-skeleton-text animated=""></ion-skeleton-text>
        </mock:shadow-root>
      </pos-document>
  `);
  });

  it('re-fetches resource when session state changes', async () => {
    const file = mockBinaryFile(pdfBlob);
    let sessionChanged;
    // @ts-ignore
    session.onChange = (prop, callback) => {
      if (prop === 'isLoggedIn') {
        sessionChanged = callback;
      }
    };
    const page = await newSpecPage({
      components: [PosDocument],
      html: `<pos-document src="https://pod.test/test.pdf" />`,
    });
    const os = mockPodOS();
    when(os.fetchFile).calledWith('https://pod.test/test.pdf').mockResolvedValueOnce(file);
    when(os.fetchFile)
      .calledWith('https://pod.test/test.pdf')
      .mockReturnValueOnce(new Promise(() => null));
    await page.rootInstance.setOs(os);
    expect(sessionChanged).toBeDefined();
    sessionChanged();
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <pos-document src="https://pod.test/test.pdf">
        <mock:shadow-root>
          <ion-skeleton-text animated=""></ion-skeleton-text>
        </mock:shadow-root>
      </pos-document>
  `);
  });

  it('removes error message after successful loading', async () => {
    const file = mockBinaryFile(pdfBlob);
    const unauthorizedFile = {
      toString: () => 'Unauthorized',
    } as BrokenFileData;
    let sessionChanged;
    // @ts-ignore
    session.onChange = (prop, callback) => {
      if (prop === 'isLoggedIn') {
        sessionChanged = callback;
      }
    };
    const page = await newSpecPage({
      components: [PosDocument],
      html: `<pos-document src="https://pod.test/test.pdf" />`,
    });
    const os = mockPodOS();
    when(os.fetchFile).calledWith('https://pod.test/test.pdf').mockResolvedValueOnce(unauthorizedFile);
    when(os.fetchFile).calledWith('https://pod.test/test.pdf').mockResolvedValueOnce(file);
    await page.rootInstance.setOs(os);
    expect(sessionChanged).toBeDefined();
    sessionChanged();
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <pos-document src="https://pod.test/test.pdf">
        <mock:shadow-root>
          <iframe src="blob:fake-pdf-data"></iframe>
        </mock:shadow-root>
      </pos-document>
  `);
  });
});

function mockBinaryFile(pngBlob) {
  return {
    blob: () => pngBlob,
  } as BinaryFile;
}
