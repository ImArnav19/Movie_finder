import React, { useState } from 'react';
import { useEffect } from 'react';

import SearchIcon from './search.svg';
import './App.css'

import Mcard from './Mcard';


const API_KEY = 'http://www.omdbapi.com/?i=tt3896198&apikey=';

const App = () => {


    const [movies,setmovies] = useState([])
    const [search,setsearch] = useState("")

    const searchmov = async (title)=>{
        const response = await fetch(`${API_KEY}&s=${title}`)
        const data = await response.json()
        
        setmovies(data.Search)
    }
    useEffect(() => {

        searchmov('Avengers')
    },[])


    return (
        <div className='app'>
            <h1>MovieHub</h1>
            <div className='search'>
                <input type='text' placeholder='Search for Movies' onChange={(e) => {setsearch(e.target.value)}} value={search}></input>
                <img src ={SearchIcon} onClick={() => {searchmov(search)}} alt='Search'></img>
            </div>

            

                {movies.length > 0 ?(
                    <div className='container'>
                        {movies.map((movie) => (
                            <Mcard movie = {movie}/>
                            
                ))}
                    </div>
                ):
                (
                    <div className='empty'>
                        <h2>No Movies! </h2></div>
                )
                }
            
        </div>
    );
}

export default App