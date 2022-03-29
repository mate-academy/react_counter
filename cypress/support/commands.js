Cypress.Commands.add("getByDataCy", (selector) => { 
    cy.get(`[data-cy=${selector}]`)
 });

 Cypress.Commands.add("clickObButton", (buttonSelector, number = 1) => { 
    for (let i = 0; i < number; i++) {
        cy.getByDataCy(buttonSelector).click();
    }
 });
