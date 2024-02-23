import { useState , useEffect,useRef} from 'react'
import MovieCard from './MovieCard'
import './App.css'


 

function App() {
  const [movies,setmovies] = useState([])
  const [searchTerm,setsearchTerm] = useState("")
  
    let url = "https://www.omdbapi.com/?i=tt3896198&apikey=e2eb69a2"
   let Moviesapi = (search)=>{
      fetch(`${url}&s=${search}`)           
      .then(response => response.json())
      .then(data => setmovies(data.Search));
   }

console.log(movies);
   useEffect(()=>{
      Moviesapi("man")
   },[setsearchTerm])


  return (
     <div className='app'>
        <h1>Movies.X</h1>
        <div className="search">
         <input 
         placeholder='Search Movies'
         value = {searchTerm}
         onKeyDown={(e)=>{
            if (e.key === "Enter")  Moviesapi(searchTerm);
         }}
         onChange={(e)=> {

            setsearchTerm(e.target.value) 
         
         }}
          />
          <svg 
          onClick={()=> {Moviesapi(searchTerm)}}
          width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M29.8594 29.8594L39.4219 39.4219" stroke="#D88769" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M17.9062 33.0469C26.2682 33.0469 33.0469 26.2682 33.0469 17.9062C33.0469 9.54431 26.2682 2.76562 17.9062 2.76562C9.54431 2.76562 2.76562 9.54431 2.76562 17.9062C2.76562 26.2682 9.54431 33.0469 17.9062 33.0469Z" stroke="#D88769" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>
        </div>
       { movies?.length>0
          ? ( <div className="container">
          {movies.map((movie)=> 
            <MovieCard movie={movie}></MovieCard>
          )}
          </div>):(
            <div className="empty">
               <h2>{"no movies found :( "}</h2>
            </div>
          )}
     </div>
  )
}
export default App
