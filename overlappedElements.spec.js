    /// <reference types="cypress" />
    describe('Overlapped Elements', () => {
        beforeEach(() => {
          
          cy.visit('http://localhost:3000/overlapped')
        })

        it('Scroll element into view and type a name', () => {
            let name='Syeda Aeimen Bukhari'

            cy.get('[id="name"]').scrollIntoView().type(name).should('have.value',name)
          
            

            //I have used a cypress attribute here which I added in the front-end code (commented below)

            //  cy.get('[cy-field="Name"]').scrollIntoView().type(name).should('have.value',name)
          })

        })