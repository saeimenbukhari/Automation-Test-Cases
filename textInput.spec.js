    /// <reference types="cypress" />
    describe('Text Input', () => {
        beforeEach(() => {
        
        cy.visit('http://localhost:3000/textinput')
        })

        it('Enter text in a field to change button text ', () => {  
            
            let buttonText="Aeimen's Button"
            cy.get('[id="newButtonName"]').type(buttonText)

            cy.get('[id="updatingButton"]').click().wait(2000).should('contain.text',buttonText)
        

        
        
            
        });

        
        })