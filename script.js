let Films={
    "Search": [
      {
        "Title": "The Lego Movie",
        "Year": "2014",
        "imdbID": "tt1490017",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg"
      },
      {
        "Title": "The Simpsons Movie",
        "Year": "2007",
        "imdbID": "tt0462538",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjc4NmQyNGUtMDg4NS00ZTZkLWI3ODQtMGJmYThiYjQxNGRiXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
      },
      {
        "Title": "El Camino: A Breaking Bad Movie",
        "Year": "2019",
        "imdbID": "tt9243946",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg"
      },
      {
        "Title": "Scary Movie",
        "Year": "2000",
        "imdbID": "tt0175142",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        "Title": "The Super Mario Bros. Movie",
        "Year": "2023",
        "imdbID": "tt6718170",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SX300.jpg"
      },
      {
        "Title": "Bee Movie",
        "Year": "2007",
        "imdbID": "tt0389790",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjE1MDYxOTA4MF5BMl5BanBnXkFtZTcwMDE0MDUzMw@@._V1_SX300.jpg"
      },
      {
        "Title": "Scary Movie 2",
        "Year": "2001",
        "imdbID": "tt0257106",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzQxYjU1OTUtYjRiOC00NDg2LWI4MWUtZGU5YzdkYTcwNTBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        "Title": "The Lego Batman Movie",
        "Year": "2017",
        "imdbID": "tt4116284",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
      },
      {
        "Title": "Scary Movie 3",
        "Year": "2003",
        "imdbID": "tt0306047",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_SX300.jpg"
      },
      {
        "Title": "Scary Movie 4",
        "Year": "2006",
        "imdbID": "tt0362120",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZmFkMzc2NTctN2U1Ni00MzE5LWJmMzMtYWQ4NjQyY2MzYmM1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
      }
    ],
   
  }

  let fullCard=document.querySelector("#fullcard")




  let zz=Films.Search.map(function(item,index){
    return `<div class="card col-4  " style="width: 18rem;">
    <img src="${item.Poster}">
    <div class="">
      <h5 class="card-title">${item.Title}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Year:${item.Year}</li>
      <li class="list-group-item">Rating:${item.imdbID}</li>
      <li class="list-group-item">Type:${item.Type}</li>
    </ul>
   
  </div>
  `
  })

  fullCard.innerHTML=zz.join("")

let inpt1=document.querySelector("#inpt1")

inpt1.addEventListener("input",function(){

 
let inptValue=inpt1.value.toLowerCase()
let filtr=Films["Search"].filter(function(e,i){
  let title=e.Title.toLowerCase()
  if(title.includes(inptValue)){
    return e
  }
})

fullCard.innerHTML=filtr.map(function(item,index){
  return `<div class="card col-4  " style="width: 18rem;">
  <img src="${item.Poster}">
  <div class="">
    <h5 class="card-title">${item.Title}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Year:${item.Year}</li>
    <li class="list-group-item">Rating:${item.imdbID}</li>
    <li class="list-group-item">Type:${item.Type}</li>
  </ul>
 
</div>
`
}).join("")







})

let btn1=document.querySelector("#btn1")
btn1.addEventListener("click",function(){
  fullCard.innerHTML=zz.join("")
  inpt1.value=""
  
})