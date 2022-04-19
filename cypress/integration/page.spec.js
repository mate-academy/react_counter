describe('Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it(`should have 'h1' containing '0' on start`, () => {
    cy.get('h1').should('contain.text', '0');
  });

  it(`should add 1 when clicking on 'Add 1'`, () => {
    cy.contains('[type="button"]', 'Add 1')
      .click();

    cy.get('h1').should('contain.text', '1');
  });

  it(`should add 100 when clicking on 'Add 100'`, () => {
    cy.contains('[type="button"]', 'Add 100')
      .click();

    cy.get('h1').should('contain.text', '100');
  });

  it(`should add 1 when clicking on 'Increase'`, () => {
    cy.contains('[type="button"]', 'Increase')
      .click();

    cy.get('h1').should('contain.text', '1');
  });

  it(`should additionaly add 100 when counter is divisible by 5 when clicking on 'Increase'`, () => {
    cy.contains('[type="button"]', 'Add 100')
      .click();

    cy.get('h1').should('contain.text', '100');

    cy.contains('[type="button"]', 'Increase')
      .click();

    cy.get('h1').should('contain.text', '201');
  });
});
