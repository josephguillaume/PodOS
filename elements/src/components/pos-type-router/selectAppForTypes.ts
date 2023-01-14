import { RdfType } from '@pod-os/core';

export enum AvailableApps {
  Generic = 'pos-app-generic',
  RdfDocument = 'pos-app-rdf-document',
  DocumentViewer = 'pos-app-document-viewer',
  ImageViewer = 'pos-app-image-viewer',
}

export function selectAppForTypes(types: RdfType[]) {
  if (types.some(type => type.uri === 'http://www.w3.org/2007/ont/link#RDFDocument')) {
    return AvailableApps.RdfDocument;
  } else if (types.some(type => type.uri === 'http://www.w3.org/ns/iana/media-types/application/pdf#Resource')) {
    return AvailableApps.DocumentViewer;
  } else if (types.some(type => type.uri === 'http://purl.org/dc/terms/Image')) {
    return AvailableApps.ImageViewer;
  } else if (types.some(type => type.uri === 'http://www.w3.org/2007/ont/link#Document')) {
    return AvailableApps.DocumentViewer;
  } else {
    return AvailableApps.Generic;
  }
}
