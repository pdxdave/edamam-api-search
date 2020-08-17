import React, {useState, useEffect} from 'react';
import {API_KEY, APP_ID} from './config'
import './App.css';
import RecipeList from './components/RecipeList'

function App() {

  const [data, setData] = useState([])
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('steak')

  useEffect(() => {
    fetchData();
  }, [query])

  const fetchData = async () => {
    // the inside fetch waits for the returned data, then the outside await does the json
    const response = await (await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`)).json()
    setData(response.hits)
  }

  const searchHandler = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <h1 style={{textAlign: "center", padding: "70px 0 50px 0"}}>Super Dooper Recipe Seacher</h1>
      <form onSubmit={handleSubmit} className="form-content">
        <input 
          type="text"
          value={search}
          onChange={searchHandler}
          placeholder="Enter food"
        />
        <button type="submit">Search</button>
      </form>
    
      <div className="container">

        {data.length === 0 
          ? <h2>Sorry, no food by that name. Try again.</h2> 
          : <div className="container">
              {data.map(food => (
                <RecipeList 
                  calories={food.recipe.calories}
                  image={food.recipe.image}
                  label={food.recipe.label}
                  title={food.recipe.label}
                  ingredients={food.recipe.ingredients}
                  servings={food.recipe.yield}
                />
              ))}
        </div> }
      </div>
    </div>
  );
}

export default App;
