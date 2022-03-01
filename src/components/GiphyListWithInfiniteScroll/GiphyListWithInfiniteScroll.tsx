import React from 'react';

import { GiphyList, GiphyListProps } from '../GiphyList/GiphyList';

export type GiphyListWithInfiniteScrollProps = {
  loadMore: () => void;
} & GiphyListProps;

export const GiphyListWithInfiniteScroll: React.FC<
  GiphyListWithInfiniteScrollProps
> = ({ datasource = [], loadMore }) => {
  const handleListScroll = (e: any) => {
    const bottom: boolean =
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 100;
    if (bottom) {
      loadMore && loadMore();
    }
  };

  return (
    <div
      className='giphy-list-with-infinite-scroll-container'
      onScroll={handleListScroll}
      style={{ height: '100%', width: '100%', overflow: 'auto' }}
    >
      <GiphyList datasource={datasource} />
    </div>
  );
};

export default GiphyListWithInfiniteScroll;
