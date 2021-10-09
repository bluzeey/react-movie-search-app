import React from "react";

export default function SearchMovies(){
    
    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");
        
        const query = "Jurassic Park";
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=1a6adc0a34ac6fba92f084ac916545b0&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
        const res = await fetch(url);
        const data  = await res.json();
        console.log(data);
        }catch(error){
            console.log(error)
        }
    }
    
    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}