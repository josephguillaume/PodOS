import { IndexedFormula, isLiteral, isNamedNode, Statement, sym } from "rdflib";

export class Thing {
  constructor(readonly uri: string, readonly store: IndexedFormula) {}

  label() {
    const value = this.anyValue(
      "http://xmlns.com/foaf/0.1/name",
      "http://xmlns.com/foaf/0.1/nick",
      "https://schema.org/name",
      "http://schema.org/name",
      "http://purl.org/dc/terms/title",
      "http://purl.org/dc/elements/1.1/title",
      "http://www.w3.org/2000/01/rdf-schema#label",
      "https://www.w3.org/ns/activitystreams#name",
      "http://www.w3.org/2006/vcard/ns#fn",
      "http://schema.org/caption",
      "https://schema.org/caption"
    );
    return value ?? this.uri;
  }

  literals() {
    const statements = this.store.statementsMatching(sym(this.uri));

    const values = statements
      .filter((it) => isLiteral(it.object))
      .reduce((accumulator: Accumulator, current: Statement) => {
        const existing = accumulator[current.predicate.uri];
        return {
          ...accumulator,
          [current.predicate.uri]: existing
            ? [...existing, current.object.value]
            : [current.object.value],
        };
      }, {});

    return Object.keys(values).map((predicate) => ({
      predicate,
      values: values[predicate],
    }));
  }

  relations() {
    const statements = this.store.statementsMatching(sym(this.uri));

    const values = statements
      .filter((it) => isNamedNode(it.object))
      .reduce((accumulator: Accumulator, current: Statement) => {
        const existing = accumulator[current.predicate.uri];
        return {
          ...accumulator,
          [current.predicate.uri]: existing
            ? [...existing, current.object.value]
            : [current.object.value],
        };
      }, {});

    return Object.keys(values).map((predicate) => ({
      predicate,
      uris: values[predicate],
    }));
  }

  anyValue(...predicateUris: string[]) {
    let value;
    predicateUris.some((it) => {
      value = this.store.anyValue(sym(this.uri), sym(it));
      return Boolean(value);
    });
    return value;
  }
}

interface Accumulator {
  [key: string]: string[];
}