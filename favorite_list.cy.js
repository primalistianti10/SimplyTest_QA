describe('favorite_list', function() {

   it('favorite_list', function() {
   
      cy.visit('https://www.themoviedb.org/')
   
      cy.get('.en > .page_wrap > #main').click()
   
      cy.get('.primary > .user > .no_click > .avatar > img').click()
   
      cy.get('.k-tooltip-content > .settings_content > .group:nth-child(1) > p > a').click()
   
      cy.visit('https://www.themoviedb.org/u/primalisti')
   
      cy.get('#shortcut_bar_scroller > #new_shortcut_bar > #new_shortcut_bar_mn_active > .k-link > .k-menu-expand-arrow').click()
   
      cy.get('.false > .k-animation-container > .k-group > #new_shortcut_bar_mn_active > .k-link').click()
   
      cy.visit('https://www.themoviedb.org/u/primalisti/favorites')
   
   })
  
  })
  