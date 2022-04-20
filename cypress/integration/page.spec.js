describe('Page', () => {
  const add1ButtonText = 'Add 1';
  const add100ButtonText = 'Add 100';
  const increaseButtonText = 'Increase';

  beforeEach(() => {
    cy.visit('/');
  });

  it(`should have 'h1' containing '0' on start`, () => {
    cy.get('h1').should('contain.text', '0');
  });

  it(`should add 1 when clicking on 'Add 1'`, () => {
    cy.contains('button', add1ButtonText)
      .click();

    cy.get('h1').should('contain.text', '1');
  });

  it(`should add 100 when clicking on 'Add 100'`, () => {
    cy.contains('button', add100ButtonText)
      .click();

    cy.get('h1').should('contain.text', '100');
  });

  it(`should add 1 when clicking on 'Increase'`, () => {
    cy.contains('button', increaseButtonText)
      .click();

    cy.get('h1').should('contain.text', '1');
  });

  it(`should additionaly add 100 when counter is divisible by 5 when clicking on 'Increase'`, () => {
    cy.contains('button', add100ButtonText)
      .click();

    cy.get('h1').should('contain.text', '100');

    cy.contains('button', increaseButtonText)
      .click();

    cy.get('h1').should('contain.text', '201');
  });
});
