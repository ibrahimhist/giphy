import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { GiphyListWithInfiniteScroll } from '../../components/GiphyListWithInfiniteScroll/GiphyListWithInfiniteScroll';

import { useGetGiphies } from '../../services/giphy.service';
import { useFavorites } from '../../context/favorites/useFavorites';

import { categories } from '../../constants/category.contant';
import { Category } from '../../models/categories.model';
import { IGiphy } from '../../models/giphy.model';

import './GiphySearch.scss';

export const GiphySearch = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<Category>();
  const [ofset, setOfset] = useState<number>(0);

  const [getGiphies, result, loading, error] = useGetGiphies();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  if (result)
    result.forEach((x) => {
      x.isFavorite = favorites.some((y) => y.id === x.id);
    });

  const type =
    (searchText?.length > 2 ? searchText : '') || (selectedOption as Category);

  const handleSearchTextChange = (e: any) => {
    setSearchText(e.target.value || '');
    setSelectedOption('');
  };

  const handleCategoryChange = (e: any) => {
    const category: Category = e.target.value as Category;
    setSelectedOption(category);
    setSearchText('');
  };

  const handleSearch = () => {
    setOfset(0);
    if (type) getGiphies({ type });
  };

  // there are some libraries, this is just basic implementation.
  const handleLoadMore = () => {
    if (!loading) {
      const newOfset = ofset + 25;
      setOfset(newOfset);
      getGiphies({ type, offset: newOfset, appendResult: true });
    }
  };

  const handleUndoFavorite = (id: string) => removeFavorite(id);
  const handleFavorite = (giphy: IGiphy) => addFavorite(giphy);

  return (
    <div className='giphy-search'>
      <input value={searchText} onChange={handleSearchTextChange} />
      <select value={selectedOption} onChange={handleCategoryChange}>
        <option value={''}>---</option>
        {categories.map((category: Category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button onClick={handleSearch}>Search</button>

      <h3>
        <Link to='/favorites'>Favorite Giphies ({favorites?.length})</Link>
      </h3>

      <GiphyListWithInfiniteScroll
        datasource={result}
        loadMore={handleLoadMore}
        onUndo={handleUndoFavorite}
        onFavorite={handleFavorite}
      />
      {loading && <div>Loading....</div>}
      {error && <div>Something went wrong</div>}
    </div>
  );
};

export default GiphySearch;
