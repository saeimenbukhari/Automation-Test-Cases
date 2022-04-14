    /// <reference types="cypress" />
    describe('Sample App', () => {
        beforeEach(() => {
        
        cy.visit('http://localhost:3000/sampleapp')
        })

        it('Login to an App', () => {  
            let username="saeimenb"
            let password='pwd'

            cy.get('[name="UserName"]').click().type(username).find('input').should('not.be.empty')
            cy.get('[name="Password"]').click().type(password).find('input').should('not.be.empty')
            
            cy.get('[type="button"]').contains('Log In').click()

            cy.get('[id="loginstatus"]').should('have.text','Welcome, '+username+'!')
        

        
        
            
        });

        
        })