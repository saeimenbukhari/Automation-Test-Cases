    /// <reference types="cypress" />
    describe('Ajax', () => {
        beforeEach(() => {
          
          cy.visit('http://localhost:3000/ajax')
        })

        it('Press button and wait for the label to load', () => {

            let name='Syeda Aeimen Bukhari'
            cy.get('[id="ajaxButton"]').click()
          
          //I have used a cypress attribute here which I added in the front-end code (commented below)
          //cy.get('[cy-button="ajaxButton"]').click()
          

          cy.wait(15000)

          cy.get('[class="bg-success"]', { timeout: 5000 }).should('be.visible');

          })

        })