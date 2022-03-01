import React from 'react';

import { IGiphy } from '../../models/giphy.model';

export type GiphyListProps = {
  datasource?: IGiphy[] | undefined | null;
};
export const GiphyList: React.FC<GiphyListProps> = ({ datasource }) => {
  return (
    <ul>
      {datasource && datasource.map((x: IGiphy) => <li key={x.id}>{x.id}</li>)}
    </ul>
  );
};

export default GiphyList;
