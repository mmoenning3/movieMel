var allMovies = [];
//Movie object contructor
function Movie(title, rating, havewatched) {
    this.title = title;
    this.rating = rating;
    this.havewatched = havewatched;
}

//add a movie OBJECT to the allMovies array
function addMovie (movie) {
    allMovies.push(movie);
    console.log("A new movie is added");
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
function printMovies () {
    var numWatched = 0;
    console.log("Printing all movies....");
    allMovies.forEach(iterate);
    function iterate(item){
        console.log(item.title + ", " + "rating of: " + item.rating + ", havewatched: " + item.havewatched);
            numWatched++;
    }
    console.log("You have watched " + numWatched + " movies in total"); 
}

//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
function highRatings (rating) {
    var numMatches = 0;
    console.log("printing movie that has a rating higher than " + rating);
    allMovies.forEach(iterate);
    function iterate(item){
        if(item.rating >= rating){
            console.log(item.title + " has a rating of " + item.rating);
            numMatches++
        }
    }

    console.log();
    console.log("In total, there are " + numMatches + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
function changeWatched (title) {
    console.log("changing the status of the movie...");
    if(title.havewatched == true){
      title.havewatched = false;
    }
    else{
      title.havewatched = true;
    }
}

////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, "true");
let y = new Movie("Citizen Kane", 4, "false");
let z = new Movie("Zootopia", 4.5, "true");

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, "false");


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);