document.write("Hello, world!");

function sayHello(){
 var response = prompt("what's your name ");
 alert("Hello"+response+", have a good day!");
}

function add(a,b){
  return a + b;
}
console.log(add(20,30));
console.log(add(120,130));

function showTopic(){
  var x = document.getElementById('demo');
  x.style.fontSize = "5px";
  x.style.color = "red";
}


var movies = ["Avengers","Captaib Marvel",
"Black panther","Spiderman"];
movies[0]="Wonder"
movies.push("Avengers");
movies.pop();
console.log(movies);

var movies = {
  title:"Captain Marvel",
  time:"2pm"
}
alert(movies.title);
movies.atatus = "available";
console.log (movies);

 var fruits = [ ];
 for (i=1; i< 10 ; i++){
   fruits[i] = prompt("Enter fruit");
 }
 alert("fruits contains " + fruits);


 var movieDetails = [
{title: "Avengers",
 time:"12pm",
 status: "available"},
 {title: "Captain Marvel",
 time:"2pm",
 status: "unavailable"},
 {title: "Black Panther",
 time:"4pm",
 status: "available"},
 {title: "Spiderman",
 time:"6pm",
 status: "available"}
];

for (var movie of movieDetails){
 if (movie.status === "available"){
   console.log("The movie " + movie.title + " plays at " + movie.time)
 }
 else{
    console.log("Sorry, the movie " + movie.title + " is sold out.")
  }
 };
