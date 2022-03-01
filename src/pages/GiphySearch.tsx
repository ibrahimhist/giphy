import React, { useState } from 'react';

import { GiphyListWithInfiniteScroll } from '../components/GiphyListWithInfiniteScroll/GiphyListWithInfiniteScroll';

import { useGetGiphies } from '../services/giphy.service';

import { categories } from '../constants/category.contant';
import { Category } from '../models/categories.model';

export const GiphySearch = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<Category>();
  const [ofset, setOfset] = useState<number>(0);

  const [getGiphies, result, loading, error] = useGetGiphies();

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

  const handleLoadMore = () => {
    if (!loading) {
      const newOfset = ofset + 25;
      setOfset(newOfset);
      getGiphies({ type, offset: newOfset, appendResult: true });
    }
  };

  return (
    <div style={{ display: 'grid' }}>
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

      <div style={{ height: '200px' }}>
        <GiphyListWithInfiniteScroll
          datasource={result}
          loadMore={handleLoadMore}
        />
        {loading && <div>Loading....</div>}
        {error && <div>Something went wrong</div>}
      </div>
    </div>
  );
};

export default GiphySearch;
