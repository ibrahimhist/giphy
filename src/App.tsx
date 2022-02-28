import React from 'react';
import logo from './logo.svg';
import './App.css';

import { GiphySearch } from './pages/GiphySearch';

function App() {
  return (
    <div className='App'>
      <GiphySearch />
    </div>
  );
}

export default App;

// https://developers.giphy.com/docs/api/endpoint/#search

// 1. Giphy api key: f4nA7EJOnybwdpv9cnTsCG10bpEKm54g

// 2. Create a search input that works with min 3chars

// 3. Create a select dropdown with 3 hardcoded categories of your choice. (Any category that you pick)

// 4. When you search with search input dropdown should reset and vice versa

// 5. Giphy query search limit should be 25.

// 6. Implement infinite scroll to fetch as you scroll

// **BONUS:**

// a.Favorite/unfavorite giffs, and store them in localstorage

// b.Create a page to list favorites items

// c.Typescript
