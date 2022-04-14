            /// <reference types="cypress" />
            describe('Dynamic Table', () => {
                beforeEach(() => {
                
                cy.visit('http://localhost:3000/dynamictable')
                })

                it('Compare a field from a dynamic table and a label', () => {  
                    
                

                cy.get('[role=row]').each((el, index) => {

                    //get column header 'Chrome'    
                    if (el.text().includes('Chrome')) {

                        cy.get('[role=columnheader]').each((columnHeader, index1) => {
        
                            //Get row with value 'CPU'
                            if (columnHeader.text().includes('CPU')) {

                                //get value from table
                                cy.wrap(el).children().eq(index1).then(value =>{
                            cy.log('**Table Value:' +value.text()+'**')
                            let tableValue=parseFloat(value.text())/100

                            //get value from label
                            cy.get('[class="bg-warning"]').then(label=>{
                                let labelText=label.text()
                                let arr=labelText.split(" ")
                                cy.log('**Label Value:' +arr[2]+'**')
                                let labelValue=parseFloat(arr[2])/100
                                
                                //compare both values
                                if(tableValue<labelValue)
                                cy.log('**Table value is less!**')
                                else if(tableValue>labelValue)
                                cy.log('**Table value is greater!**')
                                else if(tableValue==labelValue)
                                cy.log('**Both values are equal!**')

                                
                            })

                            

                                })
                            
                            }
                
                        })
                } 

                })

                
                    
                });

                
                })