import React, { useState } from 'react';

import { GiphyList } from '../components/giphy-list/GiphyList';

import { getGiphies } from '../services/giphy.service';

import { categories } from '../constants/category.contant';
import { Category } from '../models/categories.model';
import { Giphy } from '../models/giphy.model';

export const GiphySearch = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<Category>();

  const [limit, setLimit] = useState<number>(25);

  const [result, setResult] = useState<Giphy[]>([]);

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
    const type = (searchText?.length > 2 ? searchText : '') || selectedOption;
    if (type) {
      getGiphies(type).then((response) => {
        console.log(response.data.data);

        const newResult = response.data.data.map((x: any) => ({
          id: x.id,
          img: x.images.original.url,
        }));
        setResult(newResult);
        // id, images.originalurl
      });
    }
  };

  console.log({ searchText, selectedOption, result });

  const handleListScroll = (e: any) => {
    const bottom: boolean =
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 100;
    if (bottom) {
      const newLimit = limit + 25;
      setLimit(newLimit);
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

      <div
        onScroll={handleListScroll}
        style={{ height: '100px', overflow: 'auto' }}
      >
        <GiphyList datasource={result} />
      </div>
    </div>
  );
};

export default GiphySearch;
