/// <reference types = 'Cypress'/>

describe('Test Contact us form via webdriverUni', () => {
    
    
    it('Should be able to submit a successful submission via contact us form', () => {
        
      // cypress code

      cy.visit('https://webdriveruniversity.com/');
      cy.contains('CONTACT US').click()

    });


    it('Should not be able to submit a successful submission via contact us form', () => {
        
          // cypress code

    });


});