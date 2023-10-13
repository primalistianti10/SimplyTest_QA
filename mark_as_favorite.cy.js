describe('mark_as_favorite', function() {

    it('mark_as_favorite', function() {
    
       cy.visit('https://www.themoviedb.org/')

       cy.get('.ot-sdk-container > .ot-sdk-row > #onetrust-button-group-parent > #onetrust-button-group > #onetrust-accept-btn-handler').click()
    
       cy.get('.card:nth-child(1) > .image > .options > .no_click > .glyphicons_v2').click()
    
       cy.get('.k-widget > .k-tooltip-content > .settings_content > .no_pad > p:nth-child(2)').click({force: true})
    
       cy.get('.k-tooltip-content > .settings_content > .no_pad > p > a').click()
    
       cy.visit('https://www.themoviedb.org/login')
    
       cy.get('.wrapper > #login_form > fieldset > .k-form-field > #username').type('primalisti')
    
       cy.get('.wrapper > #login_form > fieldset > .k-form-field > #password').click()
    
       cy.get('.wrapper > #login_form > fieldset > .k-form-field > #password').type('123456')
    
       cy.get('.content_wrapper > .wrapper > #login_form > .flex > #login_button').click().wait(120000)
    
       cy.visit('https://www.themoviedb.org/u/primalisti')
    
    })
   
   })
   