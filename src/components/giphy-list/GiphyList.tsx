import React from 'react';

import { Giphy } from '../../models/giphy.model';

export type GiphyListProps = {
  datasource: Giphy[];
};
export const GiphyList: React.FC<GiphyListProps> = ({ datasource = [] }) => {
  return (
    <ul>
      {datasource.map((x: Giphy) => (
        <li key={x.id}>{x.id}</li>
      ))}
    </ul>
  );
};

export default GiphyList;
