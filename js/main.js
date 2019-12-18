$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let input  = $('#searchText').val();
        search(input);
        e.preventDefault();
    });
});

function search(input) {
    console.log(input);
    search_url = "https://api.themoviedb.org/3/search/movie?api_key=49c34f6afc0f7fbb3c17e344b1abb335"
                + "&language=en-US&query="
                + input
                + "&page=1&include_adult=false";
    get_movies(search_url);
}
