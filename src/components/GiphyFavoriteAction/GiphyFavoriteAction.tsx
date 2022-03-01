import React from 'react';

import './GiphyFavoriteAction.scss';

export type GiphyFavoriteActionProps = {
  onFavorite?: () => void;
  onUndo?: () => void;
  isFavorite?: boolean;
};

export const GiphyFavoriteAction: React.FC<GiphyFavoriteActionProps> = ({
  onFavorite,
  onUndo,
  isFavorite,
}) => {
  return (
    <div className='giphy-favorite-action'>
      {isFavorite ? (
        <button onClick={onUndo}>
          <b>★ Undo ☆</b>
        </button>
      ) : (
        <button onClick={onFavorite}>★ Make Favorite ★</button>
      )}
    </div>
  );
};

export default GiphyFavoriteAction;
