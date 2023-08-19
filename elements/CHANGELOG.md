# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Added

- [pos-dialog](../docs/elements/components/pos-dialog): A dialog component with a common style

### Changed

- [pos-app](../docs/elements/components/pos-app): After login `pos-app` now loads the preferences file that is linked in the user's WebID profile (if any).

## 0.13.0

### Added

- [pos-add-new-thing](../docs/elements/components/pos-add-new-thing): A button and dialog to add a new thing
- [pos-new-thing-form](../docs/elements/components/pos-new-thing-form): A form to add a new thing by type and name

### Changed

- [pos-router](../docs/elements/components/pos-router): Allow to add a thing based on the current location
- [pos-select-term](../docs/elements/components/pos-select-term): Delegates focus to internal input. Can receive a value via attribute.

## 0.12.0

### Added

- [pos-select-term](../docs/elements/components/pos-select-term): An input component to select from a list of common terms
- [pos-add-literal-value](../docs/elements/components/pos-add-literal-value): An input component to add a value to a property of a resource
- [pos-error-toast](../docs/elements/components/pos-error-toast): Shows a toast when an error occurs

### Changed

- [pos-literals](../docs/elements/components/pos-literals): Allows to add a property value when resource is editable

## 0.11.0

### Breaking change

- [pos-app](../docs/elements/components/pos-app): Decouple pos-app from ionic ion-app, so that basic elements can be used without ionic. If you want to keep the existing behaviour as before you need to manually wrap everything within `<pos-app></pos-app>` in an additional `<ion-app></ion-app>`.

### Added

- New event `pod-os:resource-loaded` is fired after `pos-resource`, `pos-image` or `pos-document` finished loading the requested resource.
- [pos-value](../docs/elements/components/pos-value): A component to render a value for a given predicate

## 0.10.0

### Added

- [pos-app-ldp-container](../docs/elements/apps/pos-app-ldp-container): View an LDP container and its contents
- [pos-container-contents](../docs/elements/components/pos-container-contents): A list of everything a LDP container contains

## 0.9.0

### Breaking Changes

- pos-app-pdf-viewer renamed to [pos-app-document-viewer](../docs/elements/apps/pos-app-document-viewer) to reflect that it can show many types of documents.
- pos-pdf renamed to [pos-document](../docs/elements/components/pos-pdf) to reflect that it can display many kinds of documents.

### Changed

- [pos-type-router](../docs/elements/components/pos-type-router): Route to pos-app-document-viewer for more document resources, like html, markdown and others.

## 0.8.0

### Added

- [pos-app-pdf-viewer](../docs/elements/apps/pos-app-pdf-viewer): A viewer for pdf document resources
- [pos-pdf](../docs/elements/components/pos-pdf): A component to render a PDF document

### Changed

- [pos-type-router](../docs/elements/components/pos-type-router): Route to pos-app-pdf-viewer for pdf resources
- [pos-image](../docs/elements/components/pos-image): Added alt attribute
- [pos-picture](../docs/elements/components/pos-picture): Adds resource label as alt attribute to image

## 0.7.0

### Added

- [pos-app-image-viewer](../docs/elements/apps/pos-app-image-viewer): A viewer for image resources
- [pos-image](../docs/elements/components/pos-image): New CSS custom properties for max-width and max-height

### Changed

- [pos-type-router](../docs/elements/components/pos-type-router): Route to pos-app-image-viewer for image resources

## 0.6.0

### Added

- [pos-type-badges](../docs/elements/components/pos-type-badges): Show rdf types as simple badges
- Show type badges in [pos-app-generic](../docs/elements/apps/pos-app-generic) and [pos-app-rdf-document](../docs/elements/apps/pos-app-rdf-document)

### Changed

- Remove types from [pos-relations](../docs/elements/components/pos-relations)
- Better error description when [pos-resource](../docs/elements/components/pos-resource) fails to load

## 0.5.0

### Added

- [pos-app-browser](../docs/elements/apps/pos-app-browser): PodOS browser application
- [pos-navigation-bar](../docs/elements/components/pos-navigation-bar): Navigate to URI by entering it

## 0.4.0

### Added

- [pos-subjects](../docs/elements/components/pos-subjects): List subjects mentioned in a document
- [pos-app-rdf-document](../docs/elements/apps/pos-app-rdf-document): Shows information from rdf documents
- [pos-type-router](../docs/elements/components/pos-type-router): Routes to apps depending on resource type

## 0.3.0

### Added

- [pos-picture](../docs/elements/components/pos-picture)

### Changed

- Show resource picture in pos-app-generic
- pos-login: Show picture of signed-in user

## 0.2.0

### Added

- [pos-image](../docs/elements/components/pos-image)

## 0.1.0

### Added

- [Components](../docs/elements/components/):
  - pos-app
  - pos-resource
  - pos-label
  - pos-description
  - pos-literals
  - pos-login
  - pos-relations
  - pos-reverse-relations
  - pos-rich-link
  - pos-router
- Apps:
  - [pos-app-generic](../docs/elements/apps/pos-app-generic)