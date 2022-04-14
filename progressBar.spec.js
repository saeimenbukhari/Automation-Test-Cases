        /// <reference types="cypress" />
        describe('Progress Bar', () => {
            beforeEach(() => {
            
            cy.visit('http://localhost:3000/progressbar')
            })

            it('Stop when the progress bar is at 75 percent', () => {  


                cy.get('[id="startButton"]').click()
                

                //from the start function
                var random = "" + (new Date()).getTime();
                random = parseInt(random.substr(random.length - 3, 3));
                var delay = Math.floor(random/2);
                var ratio = 25;

                //custom wait according to delay 
                cy.wait(delay*50)


                cy.get('[id="progressBar"]').then(bar =>{
                    let val=bar.text()
                    let arr=val.split('')
                    
                    let percentValue=parseInt(arr[0]+arr[1])
                    cy.log(percentValue)
                    
                    //If value is still not 75 percent wait for remaining time
                    if(percentValue<76){
                    //calculate remaining delay
                    let newVal=75-percentValue
                        cy.wait(delay*newVal)
                        cy.get('[id="stopButton"]').click()
                        }
                
                    
                    })
                



            
            
                
            })
            
            })