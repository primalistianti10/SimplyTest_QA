describe('order_favorite', function() {

    it('order_favorite', function() {
    
       cy.visit('https://www.themoviedb.org/u/primalisti/favorites')
    
       cy.get('.group_wrapper > .group_dropdown > .filters > #filter_by_popularity > .filter_list').click()
    
       cy.get('.group_wrapper > .group_dropdown > .filters > #filter_by_release_date > .filter_list').click()
    
    })
   
   })
   