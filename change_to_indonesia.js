describe('change_language_to_indonesia', function() {

    it('change_language_to_indonesia', function() {
    
       cy.visit('https://www.themoviedb.org/')
    
       cy.get('.en > .page_wrap > .normal').click()
    
       cy.get('.sub_media > .flex > .primary > .translate > div').click()

       cy.get('#default_language_popup_label > .k-widget > .k-dropdown-wrap > .k-select > .k-icon').click({force: true})

       cy.wait(2000)

       cy.get('.k-widget > .k-animation-container > #default_language_popup-list > .k-list-filter > .k-textbox').type('indo')

       cy.get('#r22edb26-586d-40f6-978d-1280893ad680').click()

       cy.get('.content > .k-form > fieldset > .refresh > .no_click').click()
    })
   
})
   