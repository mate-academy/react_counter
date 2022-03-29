/* eslint-disable */ 
/// <reference types="Cypress" />
/* eslint-enable */

describe('Page', () => {
  let counter = 0;

  before(() => {
    cy.visit('/');
  });

  beforeEach(() => {
    cy.reload();
    counter = 0;
  });

  it('should have 3 buttons and count starting with 0', () => {
    cy.get('[type=button]').should('have.length', 3);

    cy.getByDataCy('count')
      .should('contain.text', `Count: 0`);
  });

  it(`should add 1 when clicking on 'Add one'`, () => {
    counter++;

    cy.clickObButton('addOne');

    cy.getByDataCy('count')
      .should('contain.text', `Count: ${counter}`);
  });

  it(`should add 100 when clicking on 'Add 100'`, () => {
    counter += 100;

    cy.clickObButton('addOneHungred');

    cy.getByDataCy('count')
      .should('contain.text', `Count: ${counter}`);
  });

  it(`should add 1, or 101 if count is divisible by 5 on clicking 'Increase'`, () => {
    counter += 5;

    cy.clickObButton('increase', 5);

    cy.getByDataCy('count')
      .should('contain.text', `Count: ${counter}`);

    counter += 101;

    cy.clickObButton('increase');

    cy.getByDataCy('count')
      .should('contain.text', `Count: ${counter}`);
  });

  it(`should add when clicking in different order`, () => {
    cy.clickObButton('addOneHungred', 2);

    counter += 200;

    cy.clickObButton('increase', 3);

    counter += 103;

    cy.clickObButton('addOne', 2);

    counter += 2;

    cy.clickObButton('increase')

    counter += 101;

    cy.getByDataCy('count')
      .should('contain.text', `Count: ${counter}`);
  });
});
