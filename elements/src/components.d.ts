/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PosApp {
    }
    interface PosDemoApp {
    }
    interface PosDescription {
    }
    interface PosLabel {
    }
    interface PosLiterals {
    }
    interface PosLogin {
    }
    interface PosRelations {
    }
    interface PosResource {
        "fetch": () => Promise<void>;
        "lazy": boolean;
        "uri": string;
    }
    interface PosRichLink {
        "uri": string;
    }
}
declare global {
    interface HTMLPosAppElement extends Components.PosApp, HTMLStencilElement {
    }
    var HTMLPosAppElement: {
        prototype: HTMLPosAppElement;
        new (): HTMLPosAppElement;
    };
    interface HTMLPosDemoAppElement extends Components.PosDemoApp, HTMLStencilElement {
    }
    var HTMLPosDemoAppElement: {
        prototype: HTMLPosDemoAppElement;
        new (): HTMLPosDemoAppElement;
    };
    interface HTMLPosDescriptionElement extends Components.PosDescription, HTMLStencilElement {
    }
    var HTMLPosDescriptionElement: {
        prototype: HTMLPosDescriptionElement;
        new (): HTMLPosDescriptionElement;
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
    interface HTMLPosRichLinkElement extends Components.PosRichLink, HTMLStencilElement {
    }
    var HTMLPosRichLinkElement: {
        prototype: HTMLPosRichLinkElement;
        new (): HTMLPosRichLinkElement;
    };
    interface HTMLElementTagNameMap {
        "pos-app": HTMLPosAppElement;
        "pos-demo-app": HTMLPosDemoAppElement;
        "pos-description": HTMLPosDescriptionElement;
        "pos-label": HTMLPosLabelElement;
        "pos-literals": HTMLPosLiteralsElement;
        "pos-login": HTMLPosLoginElement;
        "pos-relations": HTMLPosRelationsElement;
        "pos-resource": HTMLPosResourceElement;
        "pos-rich-link": HTMLPosRichLinkElement;
    }
}
declare namespace LocalJSX {
    interface PosApp {
    }
    interface PosDemoApp {
    }
    interface PosDescription {
        "onPod-os:resource"?: (event: CustomEvent<any>) => void;
    }
    interface PosLabel {
        "onPod-os:resource"?: (event: CustomEvent<any>) => void;
    }
    interface PosLiterals {
        "onPod-os:resource"?: (event: CustomEvent<any>) => void;
    }
    interface PosLogin {
        "onConsumeOs"?: (event: CustomEvent<any>) => void;
    }
    interface PosRelations {
        "onPod-os:resource"?: (event: CustomEvent<any>) => void;
    }
    interface PosResource {
        "lazy"?: boolean;
        "onConsumeOs"?: (event: CustomEvent<any>) => void;
        "uri"?: string;
    }
    interface PosRichLink {
        "uri"?: string;
    }
    interface IntrinsicElements {
        "pos-app": PosApp;
        "pos-demo-app": PosDemoApp;
        "pos-description": PosDescription;
        "pos-label": PosLabel;
        "pos-literals": PosLiterals;
        "pos-login": PosLogin;
        "pos-relations": PosRelations;
        "pos-resource": PosResource;
        "pos-rich-link": PosRichLink;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pos-app": LocalJSX.PosApp & JSXBase.HTMLAttributes<HTMLPosAppElement>;
            "pos-demo-app": LocalJSX.PosDemoApp & JSXBase.HTMLAttributes<HTMLPosDemoAppElement>;
            "pos-description": LocalJSX.PosDescription & JSXBase.HTMLAttributes<HTMLPosDescriptionElement>;
            "pos-label": LocalJSX.PosLabel & JSXBase.HTMLAttributes<HTMLPosLabelElement>;
            "pos-literals": LocalJSX.PosLiterals & JSXBase.HTMLAttributes<HTMLPosLiteralsElement>;
            "pos-login": LocalJSX.PosLogin & JSXBase.HTMLAttributes<HTMLPosLoginElement>;
            "pos-relations": LocalJSX.PosRelations & JSXBase.HTMLAttributes<HTMLPosRelationsElement>;
            "pos-resource": LocalJSX.PosResource & JSXBase.HTMLAttributes<HTMLPosResourceElement>;
            "pos-rich-link": LocalJSX.PosRichLink & JSXBase.HTMLAttributes<HTMLPosRichLinkElement>;
        }
    }
}
