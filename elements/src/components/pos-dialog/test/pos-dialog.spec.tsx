import { newSpecPage } from '@stencil/core/testing';
import { screen } from '@testing-library/dom';
import { PosDialog } from '../pos-dialog';

describe('pos-dialog', () => {
  it('renders a dialog with the given slot content', async () => {
    const page = await newSpecPage({
      components: [PosDialog],
      html: `<pos-dialog><span slot="dialog-title">Title</span><span slot="dialog-content">Content</span></pos-dialog>`,
    });
    expect(page.root).toEqualHtml(`
<pos-dialog>
    <mock:shadow-root>
        <dialog>
            <header>
                <span id="title">
                    <slot name="dialog-title"/>
                </span>
                <button tabindex="-1" id="close" title="Close">
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </header>
            <slot name="dialog-content"/>
        </dialog>
    </mock:shadow-root>
    <span slot="dialog-title">
        Title
    </span>
    <span slot="dialog-content">
        Content
    </span>
</pos-dialog>
    `);
  });

  it('showModal method calls showModal of the underlying dialog', async () => {
    const page = await newSpecPage({
      components: [PosDialog],
      html: `<pos-dialog><span slot="dialog-title">Title</span><span slot="dialog-content">Content</span></pos-dialog>`,
      supportsShadowDom: false,
    });

    const dialog = page.root.querySelector('dialog');
    dialog.showModal = jest.fn();

    page.rootInstance.showModal()

    expect(dialog.showModal).toHaveBeenCalled();
  });

  it('close method closes the modal dialog', async () => {
    const page = await newSpecPage({
      components: [PosDialog],
      html: `<pos-dialog><span slot="dialog-title">Title</span><span slot="dialog-content">Content</span></pos-dialog>`,
      supportsShadowDom: false,
    });

    const dialog = page.root.querySelector('dialog');
    dialog.close = jest.fn();

    page.rootInstance.close()

    expect(dialog.close).toHaveBeenCalled();
  });

  it('closes the modal dialog, when the close button is clicked', async () => {
    const page = await newSpecPage({
      components: [PosDialog],
      html: `<pos-dialog><span slot="dialog-title">Title</span><span slot="dialog-content">Content</span></pos-dialog>`,
      supportsShadowDom: false,
    });

    const dialog = page.root.querySelector('dialog');
    dialog.close = jest.fn();

    const closeButton = screen.getByTitle('Close');
    closeButton.click();

    expect(dialog.close).toHaveBeenCalled();
  });

});
