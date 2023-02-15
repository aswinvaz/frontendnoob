import {useState, useEffect} from 'react';
import './app.css';
import searchi from "./searchic.svg";
import Moviecard from "./moviecard";    
const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';

const App = () => {
    const [movies, setmovies] = useState([]);
const [searchterm, setsearchterm] = useState("");

    useEffect(() => {
   searchmovies('Batman');

},[]);

const searchmovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
    
    setmovies(data.Search);
    
    
    
        } ;

return (
<div className ="app">
    <h1>aswintalkies</h1>
    
    
    <div className="search">
<input
        placeholder="search for movies"
        value={searchterm}
        onChange={(e)=>setsearchterm(e.target.value)}
        />
        <img
          src={searchi}
          alt="search"
          onClick={() => searchmovies(searchterm)}
        />
        </div>
        {
            movies.length >0
            ?(
        
        <div className="container">
{movies.map((movie) =>(
    <Moviecard movie={movies[0]} 
    key={movies.imdbID}/>
    
))} 

</div>
            ):(
                <div className="empty">
                    <h2> no movies found</h2>
                 </div>   )
        }
</div>

);

}
export default App;

