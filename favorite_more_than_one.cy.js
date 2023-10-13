describe('favorite_more_than_one', function() {

    it('favorite_more_than_one', function() {
    
       cy.visit('https://www.themoviedb.org/')
    
       cy.get('.card:nth-child(3) > .image > .options > .no_click > .glyphicons_v2').click()
    
       cy.get('.card:nth-child(4) > .image > .options > .no_click > .glyphicons_v2').click()
    
       cy.get('.k-animation-container:nth-child(36) > .k-widget > .k-tooltip-content > .settings_content > .group:nth-child(2) > p > .no_click').click()
    
       cy.get('.card:nth-child(5) > .image > .options > .no_click > .glyphicons_v2').click()
    
       cy.get('.k-state-border-up > .k-tooltip-content > .settings_content > .group:nth-child(2) > p').click()
    
       cy.get('.k-animation-container:nth-child(39) > .k-widget > .k-tooltip-content > .settings_content > .group:nth-child(2) > p > .no_click').click()
    
       cy.get('.card:nth-child(6) > .image > .options > .no_click > .glyphicons_v2').click()
    
       cy.get('.k-state-border-up > .k-tooltip-content > .settings_content > .group:nth-child(2) > p').click()
    
       cy.get('.k-animation-container:nth-child(40) > .k-widget > .k-tooltip-content > .settings_content > .group:nth-child(2) > p > .no_click').click()
    
    })
   
   })
   