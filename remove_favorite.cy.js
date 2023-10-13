describe('remove_favorite', function() {

    it('remove_favorite', function() {
    
       cy.visit('https://www.themoviedb.org/u/primalisti')
    
       cy.get('#shortcut_bar_scroller > #new_shortcut_bar > #new_shortcut_bar_mn_active > .k-link > .k-menu-expand-arrow').click()
    
       cy.get('.true > .k-animation-container > .group > #new_shortcut_bar_mn_active > .k-link').click()
    
       cy.get('.false > .k-animation-container > .k-group > #new_shortcut_bar_mn_active > .k-link').click()
    
       cy.visit('https://www.themoviedb.org/u/primalisti/favorites')
    
       cy.get('.details > .action_bar > ul > li > #favourite_63af89898741c4007c7070d2').click()
    
       cy.get('.details > .action_bar > ul > li > #favourite_627d2328006eee150639218d').click()
    
    })
   
   })
   