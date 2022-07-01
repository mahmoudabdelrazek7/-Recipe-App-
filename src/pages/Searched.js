import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json()
        setSearchedRecipes(recipes.results)
    }
    useEffect(() => {
        getSearched(params.search)
    }, [params.search])

    return (
        <div className='grid'>
            {
                searchedRecipes.map((item) => {
                    return (
                        <div className='card' key={item.id}>
                            <Link to={'/recipe/' + item.id}>
                                <img src={item.image} alt='' />
                                <h4>{item.title}</h4>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

