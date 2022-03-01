import React from 'react';

import { IGiphy } from '../../models/giphy.model';

import './GiphyCard.scss';

export type GiphyCardProps = {
  onFavorite?: (id: string) => void;
  key?: string;
} & IGiphy;

export const GiphyCard: React.FC<GiphyCardProps> = ({
  title,
  img,
  children,
}) => {
  return (
    <div className='image-card'>
      <div className='image-card__img-box'>
        <img src={img} alt='' />
      </div>
      <div className='image-card__content'>
        <h6 className='image-card__header'>
          <span>{title}</span>
        </h6>
      </div>

      <div className='image-card__actions'>{children}</div>
    </div>
  );
};

export default GiphyCard;
