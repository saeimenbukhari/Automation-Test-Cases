   /// <reference types="cypress" />
   describe('Visibility', () => {
      beforeEach(() => {
         
         cy.visit('http://localhost:3000/visibility')
      })

      it('Visibility for multiple buttons', () => {
         
         cy.get('[id="hideButton"]').click()
         
         //removed button
         cy.get('[id="removedButton"]').should('not.exist')
         
         //zero width button
         cy.get('[id="zeroWidthButton"]').should('have.css','width','0px')
         
         //overlapped button
         cy.get('[id="overlappedButton"]').should('be.visible',{force:true})
         
         //transparent button
         cy.get('[id="transparentButton"]').should('have.css','opacity','0')
   
         //invisible button
         cy.get('[id="invisibleButton"]').should('not.be.visible')
   
         //'display none' button
         cy.get('[id="notdisplayedButton"]').should('have.css','display','none')
         
         //off-screen button
         cy.get('[id="offscreenButton"]').should('have.class','offscreen')



         


         
         })

         



         


      })