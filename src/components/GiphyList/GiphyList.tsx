import React from 'react';

import { GiphyCard } from '../GiphyCard/GiphyCard';

import { IGiphy } from '../../models/giphy.model';

export type GiphyListProps = {
  datasource?: IGiphy[] | undefined | null;
};
export const GiphyList: React.FC<GiphyListProps> = ({ datasource }) => {
  return (
    <>
      {datasource &&
        datasource.map((x: IGiphy) => <GiphyCard key={x.id} {...x} />)}
    </>
  );
};

export default GiphyList;
