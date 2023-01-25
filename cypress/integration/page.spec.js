const page = {
  title: () => cy.get('.App__title'),
  addOneButton: () => cy.get('.App__add-one'),
  add100Button: () => cy.get('.App__add-100'),
  increaseButton: () => cy.get('.App__increase'),
};

let failed = false;

Cypress.on('fail', (e) => {
  failed = true;
  throw e;
});

describe('Page', () => {
  beforeEach(() => {
    if (failed) Cypress.runner.stop();

    cy.visit('/');
  });

  it(`should have count 0 by default`, () => {
    page.title().should('have.text', 'Count: 0');
  });
  
  describe('"Add 1" button', () => {
    it('should add 1 on a single click', () => {
      page.addOneButton().click();
  
      page.title().should('have.text', 'Count: 1');
    });
  
    it('should add 7 after 7 clicks', () => {
      page.addOneButton()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click();
  
      page.title().should('have.text', 'Count: 7');
    });
  });
  
  describe('"Add 100" button', () => {
    it(`should add 100 on a single click`, () => {
      page.add100Button().click();
  
      page.title()
        .should('have.text', 'Count: 100');
    });
  
    it(`should add 400 after 4 clicks`, () => {
      page.add100Button()
        .click()
        .click()
        .click()
        .click();
  
      page.title()
        .should('have.text', 'Count: 400');
    });
  });
  
  describe('"Increase" button', () => {
    it(`should run addOne and add100 if count is 0`, () => {
      page.increaseButton().click();
  
      page.title().should('have.text', 'Count: 101');
    });
  
    it(`should run only addOne if count is 1'`, () => {
      page.addOneButton().click();
      page.increaseButton().click();
  
      page.title().should('have.text', 'Count: 2');
    });

    it(`should run only addOne if count is 101`, () => {
      page.addOneButton().click();
      page.add100Button().click();
      page.increaseButton().click();
  
      page.title().should('have.text', 'Count: 102');
    });

    it(`should run addOne and add100 if count is 100`, () => {
      page.add100Button().click();
      page.increaseButton().click();
  
      page.title().should('have.text', 'Count: 201');
    });

    it('should count as expected after 7 click', () => {
      page.increaseButton()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click();
  
      page.title().should('have.text', 'Count: 207');
    });
  });
});
