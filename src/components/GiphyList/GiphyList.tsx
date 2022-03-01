import React from 'react';

import { GiphyCard } from '../GiphyCard/GiphyCard';
import { GiphyFavoriteAction } from '../GiphyFavoriteAction/GiphyFavoriteAction';

import { IGiphy } from '../../models/giphy.model';

export type GiphyListProps = {
  datasource?: IGiphy[] | undefined | null;
  onFavorite?: (giphy: IGiphy) => void;
  onUndo?: (id: string) => void;
};

export const GiphyList: React.FC<GiphyListProps> = ({
  datasource,
  onUndo,
  onFavorite,
}) => (
  <>
    {datasource &&
      datasource.map((x: IGiphy) => (
        <GiphyCard key={x.id} {...x}>
          <GiphyFavoriteAction
            isFavorite={x.isFavorite}
            onUndo={() => {
              onUndo && onUndo(x.id);
            }}
            onFavorite={() => {
              onFavorite && onFavorite(x);
            }}
          />
        </GiphyCard>
      ))}
  </>
);
export default GiphyList;
