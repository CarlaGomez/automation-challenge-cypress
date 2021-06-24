import Search from '../pageObjects/searchPage'

const search = new Search()

export function searchByNavigation(){
    
    //Search using navigation
    //Takes the user to Evening dresses using the navigation
        
    search.category().eq(0).invoke('show');
    search.subcategory().click();
}

export function searchBySearchBar(){
    
    //Search using the search bar and sort results
    
    search.searchBar().type('Dress{Enter}');
    search.sort().select('Price: Lowest first');
}