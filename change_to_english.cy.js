describe('change_to_english', function() {

    it('change_to_english', function() {
    
       cy.visit('https://www.themoviedb.org/')
    
       cy.get('.id > .page_wrap').click()
    
       cy.get('.sub_media > .flex > .primary > .translate > div').click()
    
       cy.get('#default_language_popup_label > .k-widget > .k-dropdown-wrap > .k-select > .k-icon').click()
    
       cy.get('.k-animation-container > #default_language_popup-list > .k-list-scroller > #default_language_popup_listbox > #tb29b916-e936-40bf-a9b9-ae567cdcdb97').click()
    
       cy.get('.k-widget > .k-animation-container > #default_language_popup-list > .k-list-filter > .k-textbox').type('english')
    
       cy.get('.content > .k-form > fieldset > .refresh > .no_click').click()
    
       cy.visit('https://www.themoviedb.org/')
    
    })
   
   })
   