/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PosAddLiteralValue {
    }
    interface PosAddNewThing {
        "referenceUri": string;
    }
    interface PosApp {
    }
    interface PosAppBrowser {
    }
    interface PosAppDocumentViewer {
    }
    interface PosAppGeneric {
    }
    interface PosAppImageViewer {
    }
    interface PosAppLdpContainer {
    }
    interface PosAppRdfDocument {
    }
    interface PosContainerContents {
    }
    interface PosContainerItem {
    }
    interface PosDescription {
    }
    interface PosDocument {
        "alt": string;
        "src": string;
    }
    interface PosErrorToast {
    }
    interface PosImage {
        "alt": string;
        "src": string;
    }
    interface PosLabel {
    }
    interface PosLiterals {
    }
    interface PosLogin {
    }
    interface PosNavigationBar {
        "uri": string;
    }
    interface PosNewThingForm {
        "referenceUri": string;
    }
    interface PosPicture {
    }
    interface PosRelations {
    }
    interface PosResource {
        "fetch": () => Promise<void>;
        "lazy": boolean;
        "uri": string;
    }
    interface PosReverseRelations {
    }
    interface PosRichLink {
        "uri": string;
    }
    interface PosRouter {
    }
    interface PosSelectTerm {
        "placeholder": string;
        "value": string;
    }
    interface PosSubjects {
    }
    interface PosTypeBadges {
    }
    interface PosTypeRouter {
    }
    interface PosValue {
        /**
          * URI of the predicate to get the value from
         */
        "predicate": string;
    }
}
export interface PosAddLiteralValueCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosAddLiteralValueElement;
}
export interface PosAppDocumentViewerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosAppDocumentViewerElement;
}
export interface PosAppImageViewerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosAppImageViewerElement;
}
export interface PosContainerContentsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosContainerContentsElement;
}
export interface PosContainerItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosContainerItemElement;
}
export interface PosDescriptionCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosDescriptionElement;
}
export interface PosDocumentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosDocumentElement;
}
export interface PosImageCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosImageElement;
}
export interface PosLabelCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosLabelElement;
}
export interface PosLiteralsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosLiteralsElement;
}
export interface PosLoginCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosLoginElement;
}
export interface PosNavigationBarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosNavigationBarElement;
}
export interface PosNewThingFormCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosNewThingFormElement;
}
export interface PosPictureCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosPictureElement;
}
export interface PosRelationsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosRelationsElement;
}
export interface PosResourceCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosResourceElement;
}
export interface PosReverseRelationsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosReverseRelationsElement;
}
export interface PosRichLinkCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosRichLinkElement;
}
export interface PosSelectTermCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosSelectTermElement;
}
export interface PosSubjectsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosSubjectsElement;
}
export interface PosTypeBadgesCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosTypeBadgesElement;
}
export interface PosTypeRouterCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosTypeRouterElement;
}
export interface PosValueCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPosValueElement;
}
declare global {
    interface HTMLPosAddLiteralValueElement extends Components.PosAddLiteralValue, HTMLStencilElement {
    }
    var HTMLPosAddLiteralValueElement: {
        prototype: HTMLPosAddLiteralValueElement;
        new (): HTMLPosAddLiteralValueElement;
    };
    interface HTMLPosAddNewThingElement extends Components.PosAddNewThing, HTMLStencilElement {
    }
    var HTMLPosAddNewThingElement: {
        prototype: HTMLPosAddNewThingElement;
        new (): HTMLPosAddNewThingElement;
    };
    interface HTMLPosAppElement extends Components.PosApp, HTMLStencilElement {
    }
    var HTMLPosAppElement: {
        prototype: HTMLPosAppElement;
        new (): HTMLPosAppElement;
    };
    interface HTMLPosAppBrowserElement extends Components.PosAppBrowser, HTMLStencilElement {
    }
    var HTMLPosAppBrowserElement: {
        prototype: HTMLPosAppBrowserElement;
        new (): HTMLPosAppBrowserElement;
    };
    interface HTMLPosAppDocumentViewerElement extends Components.PosAppDocumentViewer, HTMLStencilElement {
    }
    var HTMLPosAppDocumentViewerElement: {
        prototype: HTMLPosAppDocumentViewerElement;
        new (): HTMLPosAppDocumentViewerElement;
    };
    interface HTMLPosAppGenericElement extends Components.PosAppGeneric, HTMLStencilElement {
    }
    var HTMLPosAppGenericElement: {
        prototype: HTMLPosAppGenericElement;
        new (): HTMLPosAppGenericElement;
    };
    interface HTMLPosAppImageViewerElement extends Components.PosAppImageViewer, HTMLStencilElement {
    }
    var HTMLPosAppImageViewerElement: {
        prototype: HTMLPosAppImageViewerElement;
        new (): HTMLPosAppImageViewerElement;
    };
    interface HTMLPosAppLdpContainerElement extends Components.PosAppLdpContainer, HTMLStencilElement {
    }
    var HTMLPosAppLdpContainerElement: {
        prototype: HTMLPosAppLdpContainerElement;
        new (): HTMLPosAppLdpContainerElement;
    };
    interface HTMLPosAppRdfDocumentElement extends Components.PosAppRdfDocument, HTMLStencilElement {
    }
    var HTMLPosAppRdfDocumentElement: {
        prototype: HTMLPosAppRdfDocumentElement;
        new (): HTMLPosAppRdfDocumentElement;
    };
    interface HTMLPosContainerContentsElement extends Components.PosContainerContents, HTMLStencilElement {
    }
    var HTMLPosContainerContentsElement: {
        prototype: HTMLPosContainerContentsElement;
        new (): HTMLPosContainerContentsElement;
    };
    interface HTMLPosContainerItemElement extends Components.PosContainerItem, HTMLStencilElement {
    }
    var HTMLPosContainerItemElement: {
        prototype: HTMLPosContainerItemElement;
        new (): HTMLPosContainerItemElement;
    };
    interface HTMLPosDescriptionElement extends Components.PosDescription, HTMLStencilElement {
    }
    var HTMLPosDescriptionElement: {
        prototype: HTMLPosDescriptionElement;
        new (): HTMLPosDescriptionElement;
    };
    interface HTMLPosDocumentElement extends Components.PosDocument, HTMLStencilElement {
    }
    var HTMLPosDocumentElement: {
        prototype: HTMLPosDocumentElement;
        new (): HTMLPosDocumentElement;
    };
    interface HTMLPosErrorToastElement extends Components.PosErrorToast, HTMLStencilElement {
    }
    var HTMLPosErrorToastElement: {
        prototype: HTMLPosErrorToastElement;
        new (): HTMLPosErrorToastElement;
    };
    interface HTMLPosImageElement extends Components.PosImage, HTMLStencilElement {
    }
    var HTMLPosImageElement: {
        prototype: HTMLPosImageElement;
        new (): HTMLPosImageElement;
    };
    interface HTMLPosLabelElement extends Components.PosLabel, HTMLStencilElement {
    }
    var HTMLPosLabelElement: {
        prototype: HTMLPosLabelElement;
        new (): HTMLPosLabelElement;
    };
    interface HTMLPosLiteralsElement extends Components.PosLiterals, HTMLStencilElement {
    }
    var HTMLPosLiteralsElement: {
        prototype: HTMLPosLiteralsElement;
        new (): HTMLPosLiteralsElement;
    };
    interface HTMLPosLoginElement extends Components.PosLogin, HTMLStencilElement {
    }
    var HTMLPosLoginElement: {
        prototype: HTMLPosLoginElement;
        new (): HTMLPosLoginElement;
    };
    interface HTMLPosNavigationBarElement extends Components.PosNavigationBar, HTMLStencilElement {
    }
    var HTMLPosNavigationBarElement: {
        prototype: HTMLPosNavigationBarElement;
        new (): HTMLPosNavigationBarElement;
    };
    interface HTMLPosNewThingFormElement extends Components.PosNewThingForm, HTMLStencilElement {
    }
    var HTMLPosNewThingFormElement: {
        prototype: HTMLPosNewThingFormElement;
        new (): HTMLPosNewThingFormElement;
    };
    interface HTMLPosPictureElement extends Components.PosPicture, HTMLStencilElement {
    }
    var HTMLPosPictureElement: {
        prototype: HTMLPosPictureElement;
        new (): HTMLPosPictureElement;
    };
    interface HTMLPosRelationsElement extends Components.PosRelations, HTMLStencilElement {
    }
    var HTMLPosRelationsElement: {
        prototype: HTMLPosRelationsElement;
        new (): HTMLPosRelationsElement;
    };
    interface HTMLPosResourceElement extends Components.PosResource, HTMLStencilElement {
    }
    var HTMLPosResourceElement: {
        prototype: HTMLPosResourceElement;
        new (): HTMLPosResourceElement;
    };
    interface HTMLPosReverseRelationsElement extends Components.PosReverseRelations, HTMLStencilElement {
    }
    var HTMLPosReverseRelationsElement: {
        prototype: HTMLPosReverseRelationsElement;
        new (): HTMLPosReverseRelationsElement;
    };
    interface HTMLPosRichLinkElement extends Components.PosRichLink, HTMLStencilElement {
    }
    var HTMLPosRichLinkElement: {
        prototype: HTMLPosRichLinkElement;
        new (): HTMLPosRichLinkElement;
    };
    interface HTMLPosRouterElement extends Components.PosRouter, HTMLStencilElement {
    }
    var HTMLPosRouterElement: {
        prototype: HTMLPosRouterElement;
        new (): HTMLPosRouterElement;
    };
    interface HTMLPosSelectTermElement extends Components.PosSelectTerm, HTMLStencilElement {
    }
    var HTMLPosSelectTermElement: {
        prototype: HTMLPosSelectTermElement;
        new (): HTMLPosSelectTermElement;
    };
    interface HTMLPosSubjectsElement extends Components.PosSubjects, HTMLStencilElement {
    }
    var HTMLPosSubjectsElement: {
        prototype: HTMLPosSubjectsElement;
        new (): HTMLPosSubjectsElement;
    };
    interface HTMLPosTypeBadgesElement extends Components.PosTypeBadges, HTMLStencilElement {
    }
    var HTMLPosTypeBadgesElement: {
        prototype: HTMLPosTypeBadgesElement;
        new (): HTMLPosTypeBadgesElement;
    };
    interface HTMLPosTypeRouterElement extends Components.PosTypeRouter, HTMLStencilElement {
    }
    var HTMLPosTypeRouterElement: {
        prototype: HTMLPosTypeRouterElement;
        new (): HTMLPosTypeRouterElement;
    };
    interface HTMLPosValueElement extends Components.PosValue, HTMLStencilElement {
    }
    var HTMLPosValueElement: {
        prototype: HTMLPosValueElement;
        new (): HTMLPosValueElement;
    };
    interface HTMLElementTagNameMap {
        "pos-add-literal-value": HTMLPosAddLiteralValueElement;
        "pos-add-new-thing": HTMLPosAddNewThingElement;
        "pos-app": HTMLPosAppElement;
        "pos-app-browser": HTMLPosAppBrowserElement;
        "pos-app-document-viewer": HTMLPosAppDocumentViewerElement;
        "pos-app-generic": HTMLPosAppGenericElement;
        "pos-app-image-viewer": HTMLPosAppImageViewerElement;
        "pos-app-ldp-container": HTMLPosAppLdpContainerElement;
        "pos-app-rdf-document": HTMLPosAppRdfDocumentElement;
        "pos-container-contents": HTMLPosContainerContentsElement;
        "pos-container-item": HTMLPosContainerItemElement;
        "pos-description": HTMLPosDescriptionElement;
        "pos-document": HTMLPosDocumentElement;
        "pos-error-toast": HTMLPosErrorToastElement;
        "pos-image": HTMLPosImageElement;
        "pos-label": HTMLPosLabelElement;
        "pos-literals": HTMLPosLiteralsElement;
        "pos-login": HTMLPosLoginElement;
        "pos-navigation-bar": HTMLPosNavigationBarElement;
        "pos-new-thing-form": HTMLPosNewThingFormElement;
        "pos-picture": HTMLPosPictureElement;
        "pos-relations": HTMLPosRelationsElement;
        "pos-resource": HTMLPosResourceElement;
        "pos-reverse-relations": HTMLPosReverseRelationsElement;
        "pos-rich-link": HTMLPosRichLinkElement;
        "pos-router": HTMLPosRouterElement;
        "pos-select-term": HTMLPosSelectTermElement;
        "pos-subjects": HTMLPosSubjectsElement;
        "pos-type-badges": HTMLPosTypeBadgesElement;
        "pos-type-router": HTMLPosTypeRouterElement;
        "pos-value": HTMLPosValueElement;
    }
}
declare namespace LocalJSX {
    interface PosAddLiteralValue {
        /**
          * The entered literal value has been added to the resource and successfully stored to the Pod.
         */
        "onPod-os:added-literal-value"?: (event: PosAddLiteralValueCustomEvent<any>) => void;
        /**
          * Something went wrong while adding the literal value.
         */
        "onPod-os:error"?: (event: PosAddLiteralValueCustomEvent<any>) => void;
        "onPod-os:init"?: (event: PosAddLiteralValueCustomEvent<any>) => void;
        "onPod-os:resource"?: (event: PosAddLiteralValueCustomEvent<any>) => void;
    }
    interface PosAddNewThing {
        "referenceUri": string;
    }
    interface PosApp {
    }
    interface PosAppBrowser {
    }
    interface PosAppDocumentViewer {
        "onPod-os:resource"?: (event: PosAppDocumentViewerCustomEvent<any>) => void;
    }
    interface PosAppGeneric {
    }
    interface PosAppImageViewer {
        "onPod-os:resource"?: (event: PosAppImageViewerCustomEvent<any>) => void;
    }
    interface PosAppLdpContainer {
    }
    interface PosAppRdfDocument {
    }
    interface PosContainerContents {
        "onPod-os:resource"?: (event: PosContainerContentsCustomEvent<any>) => void;
    }
    interface PosContainerItem {
        "onPod-os:link"?: (event: PosContainerItemCustomEvent<any>) => void;
        "onPod-os:resource"?: (event: PosContainerItemCustomEvent<any>) => void;
    }
    interface PosDescription {
        "onPod-os:resource"?: (event: PosDescriptionCustomEvent<any>) => void;
    }
    interface PosDocument {
        "alt"?: string;
        "onPod-os:init"?: (event: PosDocumentCustomEvent<any>) => void;
        /**
          * Indicates that the resource given in `src` property has been loaded.
         */
        "onPod-os:resource-loaded"?: (event: PosDocumentCustomEvent<string>) => void;
        "src"?: string;
    }
    interface PosErrorToast {
    }
    interface PosImage {
        "alt"?: string;
        "onPod-os:init"?: (event: PosImageCustomEvent<any>) => void;
        /**
          * Indicates that the resource given in `src` property has been loaded.
         */
        "onPod-os:resource-loaded"?: (event: PosImageCustomEvent<string>) => void;
        "src"?: string;
    }
    interface PosLabel {
        "onPod-os:resource"?: (event: PosLabelCustomEvent<any>) => void;
    }
    interface PosLiterals {
        "onPod-os:resource"?: (event: PosLiteralsCustomEvent<any>) => void;
    }
    interface PosLogin {
        "onPod-os:init"?: (event: PosLoginCustomEvent<any>) => void;
    }
    interface PosNavigationBar {
        "onPod-os:link"?: (event: PosNavigationBarCustomEvent<any>) => void;
        "uri"?: string;
    }
    interface PosNewThingForm {
        "onPod-os:error"?: (event: PosNewThingFormCustomEvent<any>) => void;
        "onPod-os:init"?: (event: PosNewThingFormCustomEvent<any>) => void;
        "onPod-os:link"?: (event: PosNewThingFormCustomEvent<any>) => void;
        "referenceUri": string;
    }
    interface PosPicture {
        "onPod-os:resource"?: (event: PosPictureCustomEvent<any>) => void;
    }
    interface PosRelations {
        "onPod-os:resource"?: (event: PosRelationsCustomEvent<any>) => void;
    }
    interface PosResource {
        "lazy"?: boolean;
        "onPod-os:init"?: (event: PosResourceCustomEvent<any>) => void;
        /**
          * Indicates that the resource given in `uri` property has been loaded.
         */
        "onPod-os:resource-loaded"?: (event: PosResourceCustomEvent<any>) => void;
        "uri"?: string;
    }
    interface PosReverseRelations {
        "onPod-os:resource"?: (event: PosReverseRelationsCustomEvent<any>) => void;
    }
    interface PosRichLink {
        "onPod-os:link"?: (event: PosRichLinkCustomEvent<any>) => void;
        "uri"?: string;
    }
    interface PosRouter {
    }
    interface PosSelectTerm {
        "onPod-os:init"?: (event: PosSelectTermCustomEvent<any>) => void;
        /**
          * Fires when a term is entered or selected
         */
        "onPod-os:term-selected"?: (event: PosSelectTermCustomEvent<any>) => void;
        "placeholder"?: string;
        "value"?: string;
    }
    interface PosSubjects {
        "onPod-os:resource"?: (event: PosSubjectsCustomEvent<any>) => void;
    }
    interface PosTypeBadges {
        "onPod-os:resource"?: (event: PosTypeBadgesCustomEvent<any>) => void;
    }
    interface PosTypeRouter {
        "onPod-os:resource"?: (event: PosTypeRouterCustomEvent<any>) => void;
    }
    interface PosValue {
        "onPod-os:resource"?: (event: PosValueCustomEvent<any>) => void;
        /**
          * URI of the predicate to get the value from
         */
        "predicate"?: string;
    }
    interface IntrinsicElements {
        "pos-add-literal-value": PosAddLiteralValue;
        "pos-add-new-thing": PosAddNewThing;
        "pos-app": PosApp;
        "pos-app-browser": PosAppBrowser;
        "pos-app-document-viewer": PosAppDocumentViewer;
        "pos-app-generic": PosAppGeneric;
        "pos-app-image-viewer": PosAppImageViewer;
        "pos-app-ldp-container": PosAppLdpContainer;
        "pos-app-rdf-document": PosAppRdfDocument;
        "pos-container-contents": PosContainerContents;
        "pos-container-item": PosContainerItem;
        "pos-description": PosDescription;
        "pos-document": PosDocument;
        "pos-error-toast": PosErrorToast;
        "pos-image": PosImage;
        "pos-label": PosLabel;
        "pos-literals": PosLiterals;
        "pos-login": PosLogin;
        "pos-navigation-bar": PosNavigationBar;
        "pos-new-thing-form": PosNewThingForm;
        "pos-picture": PosPicture;
        "pos-relations": PosRelations;
        "pos-resource": PosResource;
        "pos-reverse-relations": PosReverseRelations;
        "pos-rich-link": PosRichLink;
        "pos-router": PosRouter;
        "pos-select-term": PosSelectTerm;
        "pos-subjects": PosSubjects;
        "pos-type-badges": PosTypeBadges;
        "pos-type-router": PosTypeRouter;
        "pos-value": PosValue;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pos-add-literal-value": LocalJSX.PosAddLiteralValue & JSXBase.HTMLAttributes<HTMLPosAddLiteralValueElement>;
            "pos-add-new-thing": LocalJSX.PosAddNewThing & JSXBase.HTMLAttributes<HTMLPosAddNewThingElement>;
            "pos-app": LocalJSX.PosApp & JSXBase.HTMLAttributes<HTMLPosAppElement>;
            "pos-app-browser": LocalJSX.PosAppBrowser & JSXBase.HTMLAttributes<HTMLPosAppBrowserElement>;
            "pos-app-document-viewer": LocalJSX.PosAppDocumentViewer & JSXBase.HTMLAttributes<HTMLPosAppDocumentViewerElement>;
            "pos-app-generic": LocalJSX.PosAppGeneric & JSXBase.HTMLAttributes<HTMLPosAppGenericElement>;
            "pos-app-image-viewer": LocalJSX.PosAppImageViewer & JSXBase.HTMLAttributes<HTMLPosAppImageViewerElement>;
            "pos-app-ldp-container": LocalJSX.PosAppLdpContainer & JSXBase.HTMLAttributes<HTMLPosAppLdpContainerElement>;
            "pos-app-rdf-document": LocalJSX.PosAppRdfDocument & JSXBase.HTMLAttributes<HTMLPosAppRdfDocumentElement>;
            "pos-container-contents": LocalJSX.PosContainerContents & JSXBase.HTMLAttributes<HTMLPosContainerContentsElement>;
            "pos-container-item": LocalJSX.PosContainerItem & JSXBase.HTMLAttributes<HTMLPosContainerItemElement>;
            "pos-description": LocalJSX.PosDescription & JSXBase.HTMLAttributes<HTMLPosDescriptionElement>;
            "pos-document": LocalJSX.PosDocument & JSXBase.HTMLAttributes<HTMLPosDocumentElement>;
            "pos-error-toast": LocalJSX.PosErrorToast & JSXBase.HTMLAttributes<HTMLPosErrorToastElement>;
            "pos-image": LocalJSX.PosImage & JSXBase.HTMLAttributes<HTMLPosImageElement>;
            "pos-label": LocalJSX.PosLabel & JSXBase.HTMLAttributes<HTMLPosLabelElement>;
            "pos-literals": LocalJSX.PosLiterals & JSXBase.HTMLAttributes<HTMLPosLiteralsElement>;
            "pos-login": LocalJSX.PosLogin & JSXBase.HTMLAttributes<HTMLPosLoginElement>;
            "pos-navigation-bar": LocalJSX.PosNavigationBar & JSXBase.HTMLAttributes<HTMLPosNavigationBarElement>;
            "pos-new-thing-form": LocalJSX.PosNewThingForm & JSXBase.HTMLAttributes<HTMLPosNewThingFormElement>;
            "pos-picture": LocalJSX.PosPicture & JSXBase.HTMLAttributes<HTMLPosPictureElement>;
            "pos-relations": LocalJSX.PosRelations & JSXBase.HTMLAttributes<HTMLPosRelationsElement>;
            "pos-resource": LocalJSX.PosResource & JSXBase.HTMLAttributes<HTMLPosResourceElement>;
            "pos-reverse-relations": LocalJSX.PosReverseRelations & JSXBase.HTMLAttributes<HTMLPosReverseRelationsElement>;
            "pos-rich-link": LocalJSX.PosRichLink & JSXBase.HTMLAttributes<HTMLPosRichLinkElement>;
            "pos-router": LocalJSX.PosRouter & JSXBase.HTMLAttributes<HTMLPosRouterElement>;
            "pos-select-term": LocalJSX.PosSelectTerm & JSXBase.HTMLAttributes<HTMLPosSelectTermElement>;
            "pos-subjects": LocalJSX.PosSubjects & JSXBase.HTMLAttributes<HTMLPosSubjectsElement>;
            "pos-type-badges": LocalJSX.PosTypeBadges & JSXBase.HTMLAttributes<HTMLPosTypeBadgesElement>;
            "pos-type-router": LocalJSX.PosTypeRouter & JSXBase.HTMLAttributes<HTMLPosTypeRouterElement>;
            "pos-value": LocalJSX.PosValue & JSXBase.HTMLAttributes<HTMLPosValueElement>;
        }
    }
}
