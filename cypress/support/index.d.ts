// cypress/support/index.d.ts
declare namespace Cypress {
  interface Chainable<Subject = any> {
    getByDataTest(dataTestSelector: string): Chainable<JQuery<HTMLElement>>;
  }
}
